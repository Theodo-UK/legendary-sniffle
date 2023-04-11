### Development

1. Clone the repo
2. Install dependencies with `yarn`
3. Create a Supabase account if you don't have one already
4. Create a new project in Supabase
5. Link Supabase to your project using `yarn supabase link --project-ref <project-ref>`. You can get your project ref from the Supabase Project dashboard (Project Settings -> API)
6. Duplicate `.env.local.example` and rename it to `.env.local` and add the Project ref, Supabase URL and anon key.
7. Push the database schema to your Supabase project using `yarn supabase db push`.
8. Generate types for your Supabase tables using `yarn generate:types:local`.
9. Run `yarn dev` to start the development server.

### Testing

1. Unit test using `yarn test`
2. End-to-end test using `yarn test:e2e`

### Deployment

This is a simple Next.js project. Deployment is the same as any other Next.js project. You can deploy it to Vercel, Netlify, or any other hosting provider.

### Troubleshooting

Checkout the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) file for common issues.
