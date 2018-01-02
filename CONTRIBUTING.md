# CONTRIBUTING
The project uses the following technologies. Please refer to their documentation
and common patterns and solutions in order to contribute to the project.

- create-react-app: lifecycle scripts, bootstraping, general application toolchain.
- webpack: module bundler and transpilation (babel)
- styled-components: css-in-js solution for react ui components
- firebase: for application persistance and auth
- i18next: coupled with react adapter for multi-lang support
- formik: form validation library
- ramda/lodash: functional programming libraries
- eslint: code linter (uses tutellus specific configuration and conventions)
- flowtype: serves as documentation and static type checking

Other libraries not listed here can be found as dependencies in `package.json`

## Workflow
Contribute your changes via a pull request, without adding lint or flowtype
errors.

Use the issue tracker to request features and bugfixes. Check prior issues and
fixes to learn about the project and decissions made.

The project uses a git-flow type workflow, where new features stem from a develop
branch (an integration of all next features and fixes to be released), and critical
bugfixes branch off of the master branch.

The master branch should neve be altered directly (refer to git-flow for more
details), and only very small changes can be commited directly to develop (such
as copy text content and little more). All changes should ideally be peer reviewed
in a merge request (therefore should be made in a separate branch).

## Specifics

In order to use both flowtype and styled-components, the best option seems to be:

https://github.com/styled-components/styled-components/issues/570#issuecomment-332087358
