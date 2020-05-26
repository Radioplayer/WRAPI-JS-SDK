# README

## Install

`npm i`

## Tests

To run the tests `npm run test`

To have all the tests working you need to obtain a wrapi wrapi pem file (plain
or base64 encoded) and key ID and make sure you have updated the
`__tests__/Wrapi.test.ts` file to point it at your keys.

## Build

To build `npm run build`

## Deploy to NPM

I don't know yet - TBC

## How to generate the docs

To update the docs (the md files) `npm run docs` To generate the docs html you
need to have mdbook installed and then run `mdbook build` or `mdbook serve` to
use it's built in webserver.

Normally the generate books should not be part of the repo, and they would be
generated during commits and would be deployed to netlify or to a static git
page.

## How to use the SDK

That part should be covered in the
[documentation](https://wrapi-javascript-sdk-docs.netlify.app/).
