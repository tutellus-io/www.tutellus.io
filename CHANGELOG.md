## 1.11.0 (2018-02-15)
- feat(docs): adding Documents to i18n (de5ef6b)

## 1.10.0 (2018-02-06)
- fix(PlayButton): remove a dash character from DOM (0e6e1e6)
- fix(documents): fix error in <ol> with `t` property (f63fccf)
- feat(intro): new PageBanner design without background video and 50% layout (f0d90c5)
- feat(roadshow): Adding roadshow section to Home page (10958bc)
- feat(partner): Adding coinsilium as partner (dc382f0)
- refactor: big files into smaller individual component modules (c7e9232)

### 1.9.1 (2018-01-30)
- fix(seo) seo description changed (ed0806c)

## 1.9.0 (2018-01-23)
- feat(Loading): Step parametrized loading (bf17cc2)
- feat(advisors): Loading advisors from DB (03caa61)
- feat(social links): Tutellus subreddit linked from header (433703a)

### 1.8.1 (2018-01-19)
- fix(push): Hide opensignal button (cfd5e3d)

## 1.8.0 (2018-01-19)
- feat(modal): Close modal when click outside (25aa76c)
- feat(push): notifications using OneSignal (22d0dd2)
- refactor: Decouple MST from firebase. (d27b365)

## 1.7.0 (2018-01-17)
- fix: event listener deregistration for i18next (7d71f78)
- feat(notifybar): shows a notification bar in the header to draw users attention (afb3e75)
- feat(i18n): backed by firebase (be476ca)
- feat(kyc): show confirmation on save (2ab852a)

### 1.6.3 (2018-01-16)
- fix(dashboard): corrects formatting of end_date to properly include timezone (cea721e)

### 1.6.2 (2018-01-15)
- feat(dashboard): RoundStatus and DashboardForm are now aware of ICO stages (dfc38f4)
- fix(dashboard): https modal image to prevent security warnings (b27870b)

### 1.6.1 (2018-01-12)
- fix(login) redirect bug (391c598)

## 1.6.0 (2018-01-12)
- New KYC (4603760)

### 1.5.1 (2018-01-09)
- fix: context prop types validation in subscription forms (6a8d92e)

## 1.5.0 (2018-01-08)
- fix(documents): new styles and english guide for dummies link (7a2c479)
- fix: typo "criptomenda" => "criptomoneda" (ec351a8)
- feat(home): background video for the first section (page banner) (51ac697)
- feat(docs): restyling of home section, bigger docs with description (c47c6f6)
- feat(configuration): allows static build-time values in components context (beea7c0)
- docs: updated README, CONTRIBUTING, and DEVELOPERS (e7caf03)

### 1.4.2 (2017-12-21)
- feat(dashboard): include also gas price and some instructions for users (01f6bb1)

### 1.4.1 (2017-12-19)
- fix(partners): Dianel Díez instead of Cellero (c2beae4)
- fix(main menu): scroll to documents section (f19f7ec)
- fix: various design details (c2d1459)
- fix(main menu): link to documents instead of how it works as whitepaper (581f5a8)
- feat(social-icons): link to youtube channel (1155300)

## 1.4.0 (2017-12-18)
- fix: update dates to reflect smart contract launch (fc59d7d, 819cf39, ef8cf3f, cdc01b9)
- feat(documentation): new section with multiple links to external docs (a7a8faf)
- feat(partners): section for the home page (ea59bcd)
- feat(advisors): board of advisors as homepage section (e224f98)

### 1.3.3 (2017-12-15)
- feat(social icons): new icon font, networks and layouts for header & footer (c757b80)

### 1.3.2 (2017-12-14)
- fix(dashboard): hide contract address and inform users of maintainance mode (0c46119)
- feat(floating help): keep it always visible on any page (2b90de0)

### 1.3.1 (2017-12-13)
- fix(service worker): unregister to solve cache issues (b243183)

## 1.3.0 (2017-12-13)
- fix(roadmap): update dates for presale and ICO (97aca84)
- feat(dashboard): allows registered users to monitor the token sale (68509f7)
- feat(signup): redirects from /tokensale (40667a9)

### 1.2.1 (2017-12-11)
- fix(how it works): updated links to whitepaper v3.18 (4e93650)
- feat(social-links): link to facebook page (faf4832)
- feat(roadmap): use strings instead of moment instances for date attr (658ecb2)
- chore: fode formatting and linting (f813ed5, caec9a6, fc117bf)

## 1.2.0 (2017-12-04)
- fix(home): responsive mobile image for "how it works" (f4a5b3f)
- fix(styles) more styling changes (bf81108)
- fix(translations): copys for signup (acbf741)
- fix(social): point to the new link for the telegram group (a2e995f)
- feat(facebook pixel): as a component that enables page tracking (ed1616b)
- feat(signup): subscribe to mailing list upon registration (a722218)
- feat(env): extract config to environment vars (ed65040)

### 1.1.3 (2017-11-30)
- fix(kyc): responsive styles for login and wizard steps (3118931)
- fix(header): estilos responsive de los menús principal y secundario (a6dcae1)
- fix(copys): erratas en la traducción al inglés en pain y benefits (109d58e)

### 1.1.2 (2017-11-29)
- fix(header): Corrige los iconos sociales en responsive. Elimina el enlace a github (2a8c08c)
- fix(design): responsive team members, section images, and token sale tables (2e2ea47)
- fix: fix most lint errors, document types (4254edf)

### 1.1.1 (2017-11-28)
- fix(copys / style): Cambios de copys. Ajuste de estilos mobile / tablet / laptop  (aec3752)
- fix(maillist): Muestro mensaje on success (d3a8ad6)

## 1.1.0 (2017-11-27)
- feature(maillist): allows users to subscribe to news about the ICO (da16f9b)
- feat(design): Nuevo favicon (b49f605)
- fix(crowdsale): total supply 100M TUT (82abea5)
