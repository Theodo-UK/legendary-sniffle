### Development

1. Clone the repo
2. Update `node` version to 18
3. Install dependencies with `yarn`
4. Create a Supabase account if you don't have one already
5. Create a new project in Supabase
6. Generate a Supabase access token
7. Install Supabase CLI with `brew install supabase/tap/supabase`
8. Run `supabase init` - project should already be initialised
9. Run `supabase login` and paste the access token in
10. Link Supabase to your project using `yarn supabase link --project-ref <project-ref>`. You can get your project ref from the Supabase Project dashboard (Project Settings -> API)
11. Duplicate `.env.local.example` and rename it to `.env.local` and add the relevant environment variables from Dashlane.
12. Push the database schema to your Supabase project using `yarn supabase db push`.
13. Generate types for your Supabase tables using `yarn generate:types:local`.
14. Run `yarn dev` to start the development server.

### Database Migration

1. In terminal, run `yarn supabase migration new <migration name>`
2. Edit migration file `<123456_migration_name>.sql` to create table, add row etc.
3. Terminal: `yarn supabase db push`
4. Observe changes on app.supabase.com
5. Push new migration files to git
6. For other users to see changes, pull migrations from git, run `yarn supabase db push`

### Testing

1. Unit test using `yarn test`
2. End-to-end test using `yarn test:e2e`

### Deployment

This is a simple Next.js project. Deployment is the same as any other Next.js project. You can deploy it to Vercel, Netlify, or any other hosting provider.

### Troubleshooting

Checkout the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) file for common issues.
