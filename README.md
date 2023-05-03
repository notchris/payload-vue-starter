# PayloadCMS + Vue3

This example application shows how to use [PayloadCMS](https://payloadcms.com) to implement user login / registration with a custom frontend (using [Vue3](https://vuejs.org/)).

This project uses:

- [PayloadCMS](https://payloadcms.com) for user & content management.
- [Vue3](https://vuejs.org/) for the front-end application
- [Formkit](https://formkit.com/getting-started/your-first-form) for Vue3
- [Pinia](https://pinia.vuejs.org/) - Official Vue3 router
-  [TailwindCSS](https://tailwindcss.com/) for styling

## TODO
- Add page for email verification (New user email verification is not enabled in this project)
- Add composition API examples (currently uses Options API)


## Installation

Run install in both the `client` and `payload` project folders

`Client:`
```bash
npm install
```

`Payload:`
```bash
npm install --save --legacy-peer-deps payload.
```
## Configure

`Client:`

The client sets a Vue3 global property `apiRoot` in the `src/main.ts` entry file. **Update this variable to be your Payload URL.**

`Payload:`

You will want to follow the setup instructions for [PayloadCMS](https://payloadcms.com/docs/getting-started/installation#adding-to-an-existing-app)  (Setting your mongoDB URL, configuring CORS, etc...)

There is also an additional `env` var that you should set (used for a custom reset password URL).
`PAYLOAD_PUBLIC_SITEURL=http://example.com`

## Run

You can run:
```bash
npm run dev
```

in both the `client` and `payload` project folders, however - if you use VSCode, the launch tasks for running both are included.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)