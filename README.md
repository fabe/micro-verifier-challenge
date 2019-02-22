# `micro-verifier-challenge`

A tiny Node.js microservice to generate a cryptographically-random `verifier` and `challenge` (for React Native authentication flows).

This can help if you are required to follow the [Auth0 Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce) with Expo/React Native (as Node.js' `crypto` module is not available in RN).

## Deployment

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/fabe/micro-verifier-challenge)

## Usage

```sh
GET https://your-url.now.sh/
```

You will get the data in the following format:

```JSON
{
  "verifier": "MAIYIPi-3BJWxzaV1cXPZGnfMZdgbWuwxThvUdmFHQE",
  "challenge": "eWbxKj7OZAr8RDaGSHN_bWvxpDBrS30lGW53DHzuUT8"
}
```

Keep in mind that this process is a compromise and should usually be handled locally. It's *probably* secure enough, but keep in mind that this microservice should **only be accessed through HTTPS**.

## Development

```sh
git clone git@github.com:fabe/micro-verifier-challenge.git
yarn
yarn dev
```

The server will be listening at `localhost:3000`.

## Authors

- Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_))