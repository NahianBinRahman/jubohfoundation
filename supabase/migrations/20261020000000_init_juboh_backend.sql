-- ==============================================================================
-- JUBOH Foundation — Core Database Schema Migration
-- Migration: 20261020000000_init_juboh_backend.sql
-- Description: Creates newsletter_subscribers, contact_submissions, and event_registrations
-- Security: Enables strict Row Level Security (RLS) on all tables; no public read policies.
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. TABLE: newsletter_subscribers
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT email_format_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT email_length_check CHECK (char_length(email) <= 255)
);

-- Case-insensitive unique index for normalized email lookups
CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_lower_email_idx
ON public.newsletter_subscribers (LOWER(email));

-- ==============================================================================
-- 2. TABLE: contact_submissions
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT full_name_length_check CHECK (char_length(full_name) BETWEEN 2 AND 100),
    CONSTRAINT contact_email_format_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT contact_email_length_check CHECK (char_length(email) <= 255),
    CONSTRAINT subject_length_check CHECK (char_length(subject) BETWEEN 2 AND 100),
    CONSTRAINT message_length_check CHECK (char_length(message) BETWEEN 10 AND 3000),
    CONSTRAINT status_values_check CHECK (status IN ('new', 'in_progress', 'resolved', 'archived'))
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
ON public.contact_submissions (created_at DESC);

-- ==============================================================================
-- 3. TABLE: event_registrations
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.event_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_slug TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT reg_full_name_length_check CHECK (char_length(full_name) BETWEEN 2 AND 100),
    CONSTRAINT reg_email_format_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT reg_email_length_check CHECK (char_length(email) <= 255),
    CONSTRAINT reg_phone_length_check CHECK (phone IS NULL OR char_length(phone) <= 30),
    CONSTRAINT reg_message_length_check CHECK (message IS NULL OR char_length(message) <= 1500),
    CONSTRAINT reg_status_values_check CHECK (status IN ('pending', 'confirmed', 'waitlisted', 'cancelled'))
);

-- Compound index to prevent duplicate registrations for the same event and email
CREATE UNIQUE INDEX IF NOT EXISTS event_registrations_event_email_idx
ON public.event_registrations (event_slug, LOWER(email));

-- ==============================================================================
-- 4. ROW LEVEL SECURITY (RLS) & ACCESS CONTROL
-- ==============================================================================
-- Enable RLS on all 3 tables
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- CRITICAL SECURITY RULE:
-- No public SELECT policies are created. Anonymous web visitors CANNOT read
-- subscriber emails, contact inquiries, or event attendee details.
-- Database writes and admin operations run via trusted server-side Next.js Server Actions
-- using the private SUPABASE_SERVICE_ROLE_KEY which bypasses RLS safely on the server.
