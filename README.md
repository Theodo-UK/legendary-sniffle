### Development

1. Clone the repo
2. Update `node` version to 18
3. Install dependencies with `yarn`
4. Install additional dependencies by running `pip3 install -r requirements.txt`
5. Create a Supabase account if you don't have one already
6. Create a new project in Supabase
7. Generate a Supabase access token
8. Copy `.env.local.example` and rename to `.env.local`
9. Add your access tokens/keys to `.env.local`
10. Install Supabase CLI with `brew install supabase/tap/supabase`
11. Run `supabase init` - project should already be initialised
12. Run `supabase login` and paste the access token in
13. Link Supabase to your project using `yarn supabase link --project-ref <project-ref>`. You can get your project ref from the Supabase Project dashboard (Project Settings -> API)
14. Duplicate `.env.local.example` and rename it to `.env.local` and add the relevant environment variables from Dashlane.
15. Push the database schema to your Supabase project using `yarn supabase db push`.
16. Generate types for your Supabase tables using `yarn generate:types:local`.
17. Run `yarn dev` to start the development server.

### Database Migration

For other users to see new db changes:

1. Pull migrations from git, then run `yarn supabase db push`

To make a change to db:

1. In terminal, run `yarn supabase migration new <migration name>`
2. Edit migration file `<123456_migration_name>.sql` to create table, add row etc.
3. Terminal: `yarn supabase db push`
4. Observe changes on app.supabase.com
5. Push new migration files to git

### Running Python Files

Some of the Python files have type hints (strong typing). Running these files with `python3 preproces.py` for example will not enforce the type hints. If you would like to check the types are being enforced, do the following:

1. Check you have mypy installed by running `mypy --version`
2. Run your desired Python file with `mypy <filename.py>`

### Testing

1. Unit test using `yarn test`
2. End-to-end test using `yarn test:e2e`

### Deployment

This is a simple Next.js project. Deployment is the same as any other Next.js project. You can deploy it to Vercel, Netlify, or any other hosting provider.

### Troubleshooting

Checkout the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) file for common issues.
