# Supabase Backend Setup & Integration Guide

**Project:** JUBOH Foundation  
**Phase:** 10 — Minimal Production-Ready Supabase Backend  
**Security Model:** Server-Only Service-Role Architecture with Strict Row-Level Security (RLS)

---

## 1. Overview & Architecture

JUBOH Foundation uses a minimal, secure, server-side Supabase architecture. 
- **Zero Client Exposure:** Database credentials are never prefixed with `NEXT_PUBLIC_` and never bundled into client-side JavaScript.
- **Server Actions:** All database interactions execute via Next.js Server Actions (`app/actions/*`) using a protected server-only client (`lib/supabase/server.ts`).
- **Strict RLS:** All tables have Row Level Security enabled with **no public SELECT policies**, ensuring anonymous web visitors cannot read subscriber lists, contact messages, or attendee details.

---

## 2. Creating a Supabase Project

1. Log in to [Supabase](https://supabase.com).
2. Click **New Project** and select your organization.
3. Name your project (e.g., `juboh-foundation-prod`).
4. Set a strong database password and choose the region closest to your primary audience (e.g., `us-east-1` or `us-east-2`).
5. Choose the **Free** or **Pro** plan according to your deployment needs.
6. Wait for project provisioning to complete (typically 1–2 minutes).

---

## 3. Environment Variables Configuration

In the Supabase Dashboard, navigate to **Project Settings > API**:

1. Locate **Project URL** (e.g., `https://xyzcompany.supabase.co`).
2. Locate **Project API Keys**:
   - Copy the **`service_role` (secret)** key.
   - ⚠️ **DO NOT** use the `anon` key for server actions if service role is expected, and **NEVER** expose the `service_role` key to the browser.

Create or update `.env.local` in your project root:

```bash
# JUBOH Foundation Supabase Configuration
SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPER_SECRET_SERVICE_ROLE_KEY"

# Public Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

> [!CAUTION]
> `.env.local` is listed in `.gitignore` and must **never** be committed to Git. For production hosting (e.g., Vercel, Netlify, AWS), add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` directly in your hosting provider's Environment Variables dashboard.

---

## 4. Applying Database Migrations

A complete SQL migration script is located at:
`supabase/migrations/20261020000000_init_juboh_backend.sql`

### Option A: Using the Supabase Web Dashboard (Recommended & Fastest)
1. In your Supabase Dashboard, click on the **SQL Editor** icon in the left navigation.
2. Click **New query**.
3. Copy the entire contents of `supabase/migrations/20261020000000_init_juboh_backend.sql`.
4. Paste it into the SQL Editor and click **Run**.
5. Confirm that the query executes with `Success. No rows returned`.

### Option B: Using the Supabase CLI
If using the Supabase CLI locally:
```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_ID
npx supabase db push
```

---

## 5. Verifying Table Creation & Schema Integrity

In the Supabase Dashboard, click **Table Editor** to confirm the three core tables:

### 1. `newsletter_subscribers`
- `id` (UUID, Primary Key, default `gen_random_uuid()`)
- `email` (TEXT, NOT NULL, checked for format and max 255 chars)
- `created_at` (TIMESTAMPTZ, default `now()`)
- `updated_at` (TIMESTAMPTZ, default `now()`)
- **Index:** `newsletter_subscribers_lower_email_idx` (Unique on `LOWER(email)`)

### 2. `contact_submissions`
- `id` (UUID, Primary Key, default `gen_random_uuid()`)
- `full_name` (TEXT, 2–100 chars)
- `email` (TEXT, max 255 chars)
- `subject` (TEXT, 2–100 chars)
- `message` (TEXT, 10–3000 chars)
- `status` (TEXT, default `'new'`, constrained to `'new'`, `'in_progress'`, `'resolved'`, `'archived'`)
- `created_at` (TIMESTAMPTZ, default `now()`)

### 3. `event_registrations`
- `id` (UUID, Primary Key, default `gen_random_uuid()`)
- `event_slug` (TEXT, NOT NULL)
- `full_name` (TEXT, 2–100 chars)
- `email` (TEXT, max 255 chars)
- `phone` (TEXT, nullable, max 30 chars)
- `message` (TEXT, nullable, max 1500 chars)
- `status` (TEXT, default `'pending'`, constrained to `'pending'`, `'confirmed'`, `'waitlisted'`, `'cancelled'`)
- `created_at` (TIMESTAMPTZ, default `now()`)
- **Index:** `event_registrations_event_email_idx` (Unique on `(event_slug, LOWER(email))`)

---

## 6. Verifying Row Level Security (RLS)

1. In the Supabase Dashboard, navigate to **Authentication > Policies** (or click the shield icon next to each table in the Table Editor).
2. Confirm that:
   - `newsletter_subscribers`: RLS is **Enabled** (green badge). Policies: 0 public policies.
   - `contact_submissions`: RLS is **Enabled** (green badge). Policies: 0 public policies.
   - `event_registrations`: RLS is **Enabled** (green badge). Policies: 0 public policies.
3. Test an anonymous REST query using `curl` or Postman with the project `anon` key:
   ```bash
   curl -X GET "https://YOUR_PROJECT_ID.supabase.co/rest/v1/newsletter_subscribers" \
     -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY"
   ```
   **Expected Response:** `[]` (Empty array or permission denied). It must **never** return existing subscriber records.

---

## 7. Testing Backend Functionality

### Feature A: Newsletter Subscriptions
- **Location:** Global Footer (`components/common/newsletter-form.tsx`)
- **Positive Test:** Enter `test.donor@example.com` and click "Subscribe".
  - UI State: Button displays a spinner (`isPending`).
  - Response: Displays `"Thanks for subscribing!"`. Input clears.
  - Verification: Verify in Supabase Table Editor that `newsletter_subscribers` contains `test.donor@example.com`.
- **Duplicate Test:** Enter `test.donor@example.com` again.
  - Response: Handled idempotently, returning `"Thanks for subscribing!"` without throwing a server crash or creating duplicate records.
- **Validation Test:** Enter `invalid-email` and submit.
  - Response: Form displays validation message `"Please enter a valid email address."`.
- **Honeypot Test:** If the hidden `hp_newsletter` field contains text, submission returns silent success without database write.

### Feature B: Contact Form Submissions
- **Location:** `/contact` (`components/contact/ContactForm.tsx`)
- **Positive Test:** Fill in Name, Email, Inquiry Subject, and a Message (>= 10 chars).
  - UI State: Button shows `"Sending Message..."` with a spinner.
  - Response: Success alert with `"Your message has been received. Thank you for contacting Juboh Foundation."`. Form resets.
  - Verification: Check `contact_submissions` table in Supabase.
- **Validation Test:** Submit with empty fields or message < 10 characters.
  - Response: Client-side Zod and server-side validation flag errors below each field.
- **Rate-Limiting / Duplicate Guard:** Submitting the exact same message within 60 seconds from the same email will succeed gracefully without duplicate insertion.

### Feature C: Event Registration
- **Location:** `/events/[slug]` (`components/events/EventRegistrationForm.tsx`)
- **Genuine Event Verification:** Server checks against `data/events.ts`. If an event does not exist, action returns: `"The requested event is not currently recognized or scheduled."`
- **Availability State:** If `registrationEnabled === false` (current state for unconfirmed schedule dates), the form displays a locked status banner and disables form submission to prevent fictitious registrations.
- **Registration Test (When Enabled):** Validates full name, email, phone, and optional message. Enforces uniqueness on `(event_slug, LOWER(email))`.

---

## 8. Graceful Fallback When Credentials Are Not Set

If `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are not set in the environment:
- The website continues to render smoothly without crashes.
- Submissions receive an honest, transparent feedback notice:
  - *"The subscription database is currently pending environment configuration. Please check back shortly."*
  - *"Our automated contact service is currently pending environment configuration. Please email us directly at info@jubohfoundation.org or call (800) JUBOH-ORG."*
- Success is **never** faked.

---

## 9. Safe Production Deployment

1. **Hosting Environment:** Configure `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in your production platform (e.g., Vercel Project Settings > Environment Variables).
2. **Build Check:** Ensure `npm run build` passes with zero type or linting errors.
3. **Database Backup:** Enable Supabase automatic daily backups or Point-In-Time Recovery (PITR) in Supabase settings.

---

## 10. External Services Status

To maintain organizational integrity, the following external services are documented:

| Feature | Current State | External Service Required For Activation |
|---|---|---|
| **Newsletter Storage** | ✅ Production-ready in Supabase | Resend / SendGrid / Mailchimp (for sending automated mass campaigns) |
| **Contact Message Storage** | ✅ Production-ready in Supabase | SMTP / Postmark / Resend (for internal email notifications to staff) |
| **Event Registration Storage** | ✅ Production-ready in Supabase | Finalized calendar dates + email ticket delivery provider |
| **Donation Payments** | 🛡️ Protected UI State | Stripe / PayPal official nonprofit merchant gateway integration |
