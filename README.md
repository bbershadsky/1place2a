# 1Place2α (AllChat)

Bespoke Twitter clone using NextJS, Typescript, Supabase, and TailwindCSS.

Live site: https://1place2.vercel.app

## Utilities

Updating types from supabase into Typescript: 
`npx supabase gen types typescript --project-id mfbrihozfltjbiqdzndr > lib/database.types.ts`

## TODO

* Set up Public API for future Flutter integration
* Add channels
* Add delete/report functionality
* Internationalization support
* Upload media to post

### Resources + Inspiration

https://www.youtube.com/shorts/BzYDxLH-tdw improved TwitterUX

Adopted from 
**[📹 Egghead.io](https://egghead.io/lessons/deploy-next-js-app-router-project-to-production-with-vercel)**

[Vercel](https://vercel.com) is a hosting platform that works very well with [Next.js](https://nextjs.org) - because it's their framework! In this lesson, we prepare our project to be deployed to production by:

- Pushing code to [GitHub](https://github.com/)
- Deploying repo to [Vercel](https://vercel.com)
- Updating [GitHub OAuth app](https://github.com/settings/developers) to use production URL
- Updating [Supabase](https://supabase.com/) project to use production URL

- [Deploy Next.js to Vercel guide](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)
- [GitHub OAuth App settings](https://github.com/settings/developers)
- [Vercel](https://vercel.com)
- [Supabase URL configuration](https://app.supabase.com/project/_/auth/url-configuration)

---

Part of Boris Bershadsky's Portfolio for https://borisb.ca