# Address Book

[:link: Here](https://t6r8d2q9.stackpathcdn.com) is the link for the live demo!

## Run it Locally

### Prerequisites

Make sure you have the `address` document collection created in Edge Database/Collections and an API key with the corresponding permissions.

You will have to create a `.env.development.local` file in `/demos/address-book` directory to store your environment variables. This file must have the following env. variables:

```
REACT_APP_GDN_URL = "https://{GDN_URL}"
REACT_APP_FABRIC_NAME = "{FABRIC_NAME}"
REACT_APP_MACROMETA_API_KEY = "{API_KEY}"

```

### Steps

First, clone the repository and `cd` to the Address Book demo directory.

```
git clone git@github.com:CoxEdge-Tools/demos.git
```

```
cd demos/address-book
```

Then, install the project's dependencies with

```
npm install
```

and finally, run

```
npm run start
```

## Build it for Production

First, you will have to create `.env.production.local` file to store your env. variables. This file must have the following env. variables:

```
REACT_APP_GDN_URL = "https://coxedge.macrometa.io"
REACT_APP_FABRIC_NAME = "db-demo-for-macrometa"
REACT_APP_MACROMETA_API_KEY = "{API_KEY}"

```

Then, run the command below to generate your `build` directory. You will then host this `build` directory in your server machine.

```
npm run build
```
