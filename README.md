# Tutellus.io
The landing page, kyc process and dashboard for the Tutellus ICO.

## Development
;TL;DR
- requires node v8
- install via `npm i`
- edit environment file `.env`.
- run with `npm start`

This is a create-react-app, the original instructions, development scripts and
related documentation are detailed in DEVELOPERS.md.

This project uses some environment variables during build time to configure the
final bundle. Those can be found with `git grep process.env src/` in order to
create a .env file containing the required. The specifics (for overriding) are
detailed in DEVELOPERS.md, an example `.env` file would look like:
```
REACT_APP_FBTRACKERID=facebook tracker code
REACT_APP_MAILCHIMP_URL=url for mailchimp forms (see mailchimp dashboard)
REACT_APP_MAILLIST_GENERAL=mailing list id for general subscribers (from landing page)
REACT_APP_MAILLIST_REGISTER=mailing list id for registered users (for registration)
REACT_APP_FIREBASE_DATABASEURL=firebase url (see firebase docs)
REACT_APP_FIREBASE_APIKEY=api key for configured firebase db
REACT_APP_FIREBASE_AUTHDOMAIN=auth domain for firebase
REACT_APP_FIREBASE_PROJECTID=firebase project identifier
REACT_APP_FIREBASE_STORAGEBUCKET=firebase storage identifier for KYC documents uploading
REACT_APP_FIREBASE_MESSAGINGSENDERID=used to send registration mails, passwd recovery, etc.
```

### Contributing
The guidelines will be detailed in CONTRIBUTING.md, refer to it for any specifics.

Contribute your changes via a pull request, without adding lint or flowtype
errors.

Use the issue tracker to request features and bugfixes. Check prior issues and
fixes to learn about the project and decissions made.

## Production and deployment
The full application is a SPA statically served, generated via `npm run build`.
Probably any HTTP server would do.

The production configuration can override any keys the local .env file as detailed
in DEVELOPERS.md, for instance `.env.production`: 
```
REACT_APP_FIREBASE_DATABASEURL=production firebase instance
REACT_APP_FIREBASE_APIKEY=production application key
#etc..
```

If the production file is present it will override the local config. Is therefore
recommended to either control wich file is present prior to the build or
sourcing the appropiate config to avoid issues (the latter aproach should work
but hasn't been tested yet).
