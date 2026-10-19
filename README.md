This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Supabase Backend & Database Architecture (Phase 10)

This project features a secure, minimal Supabase backend for handling form interactions:
- **Newsletter Subscriptions:** Validated email capture with normalized lowercase unique index and duplicate handling.
- **Contact Inquiries:** Validated message submission with anti-spam honeypot and rate-limiting.
- **Event Registrations:** Bound to configured events with availability checks and compound unique constraints.
- **Security:** Strict Row Level Security (RLS) on all tables with zero public SELECT policies. Database writes run server-side via Next.js Server Actions using a private service-role client.

### Setup Instructions
For complete database migration scripts, environment variable configuration, RLS verification, and testing instructions, please refer to:
- [`docs/supabase-setup.md`](docs/supabase-setup.md)
- [`supabase/migrations/20261020000000_init_juboh_backend.sql`](supabase/migrations/20261020000000_init_juboh_backend.sql)
- [`.env.example`](.env.example)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
