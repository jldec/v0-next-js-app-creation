# v0-next-js-app-creation

1. Started with grok prompt:
`create an example of a minimal next.js react app with a button which updates a value with the current client-side date/time, and also showing server-rendered text based on the current date/time on the server.`

2. refined:
`can you change it to use RSC and also include the necessary App route and other nextjs boilerplate files?`

3. and:
`please fix the last set of files to use tailwind 4`

4. Downloaded the resulting file from grok, and uploaded to a new v0 chat prompt:
`create the files indicated by comments in Next(1).jsx to create a minimal nextjs app with RSC`

5. This just worked. Turned the chat into a new v0 project deployed to vercel and pushed to a new github repo.

6. NOTE: v0 forces tailwind v3.x and next.js v14.x even if the the original package.json contains more recent dependencies.

7. NOTE: Fetching the file /data/animal_sayings.json does not work in the v0 Preview environment (deployed app works.)  

### Links

- [Why I did this](https://grok.com/share/bGVnYWN5_88294704-dbde-48da-b253-4ec60df55c3d)
- [More about RSCs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [Initial Grok chat](https://grok.com/share/bGVnYWN5_692dfbef-1bb9-4480-9f62-0a79a364891c)
- [v0 chat](https://v0.dev/chat/next-js-app-creation-Ch5o7lUJBPN)
- [GitHub repo](https://github.com/jldec/v0-next-js-app-creation)
- [Deployed app](https://v0-next-js-app-creation-phi.vercel.app/)
