# TTT X-Wing Overlay

## Setup

Install **Node 12.10.0** (default all settings)

Run `npm install` in the project root directory

## Firebase

Create an account at [Firebase](https://firebase.google.com/)

Create a new firebase project (analytics optional)

### Firebase config:
1. Build > Authentication > Sign-in method > enable Google

2. Build > Realtime Database > Create (any location, start in locked mode) (note the database URI once created) Add the below rules at Realtime Database > Rules

    ```json
    {
    "rules": {
        "streams": {
        ".read": "true",
        ".indexOn": ["user"],
        "$streamid": {
            ".write": "data.child('user').val() === auth.uid || data.child('user').val() === null"    	  
        } 
        },
        "users": {
        "$uid": {
            ".write": "auth != null && auth.uid == $uid",
            ".read": "auth.uid == $uid" 
        }
        }
    }
    }
    ```

3. Build > Hosting > Get Started

    * Follow step 1 instructions to set up firebase-cli `npm install -g firebase-tools`
    * Follow step 2 instructions to log in and initialise your project `firebase login` and `firebase init`
        * Init with the following options:
            * Features: choose database and hosting options
            * Use an existing project - then choose the firebase project you've created
            * Use default options for Real Time Database Rules (database.rules.json)
            * Change public directory option to 'dist'
            * Configure as a single page app
            * No to automatic builds
    * Skip/complete step 3

## Environment Configuration

Open **src/environments/environment.sample.ts** and fill in with values from your firebase config. Save a copy of this file as **src/environments/environment.ts**

* {{apikey}} from Project Settings > General > Your Project > Web API Key
* {{appname}} from Project Settings > General > Your Project > Project ID
* {{messagingid}} from Project Settings > Cloud Messaging > Project Credentials > Sender ID
* {{databaseURL}} from Build > Realtime Database




## Development server

Run `ng serve` or `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:prod` for a production build. The build artifacts will be stored in the `dist/` directory.

Run `firebase deploy` to deploy production code to firebase hosting.

