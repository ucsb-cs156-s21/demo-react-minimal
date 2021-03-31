# demo-spring-react-minimal

[![codecov](https://codecov.io/gh/ucsb-cs156-s21/demo-react-minimal/branch/main/graph/badge.svg)](https://codecov.io/gh/ucsb-cs156-s21/demo-react-minimal)

## Purpose

This app is a course project of <https://ucsb-cs156.github.io>, a course at [UC Santa Barbara](https://ucsb.edu).

This repo is intended to be starter code for apps that have only a React Front end, with no backend or authentication.

## Integrations

* The npm package `prettier` is used to implement a pre-commit hook that formats JavaScript code.  See: [docs/prettier.md](./docs/prettier.md) for more information.

* The npm package `eslint` is used to implement linting for the code under `javascript`.  See [docs/eslint.md](./docs/eslint.md) for more information 

## Getting Started

To get started with this application, you'll need to be able to
* Run it locally (i.e. on localhost)
* Deploy it to Heroku
* Get the test cases running on GitHub Actions
* See aggregrated code coverage statistics on Codecov

# Storybook Support

To run React Storybook:

* cd into `javascript`
* use: `npm run storybook`
* This should put the storybook on <http://localhost:6006>

Additional stories are added under `javascript/src/stories`

For documentation on React Storybook, see: <https://storybook.js.org/>

# GitHub Actions

This repo contains, in the directory `.github`, code to 
run CI/CD testing via GitHub Actions.

