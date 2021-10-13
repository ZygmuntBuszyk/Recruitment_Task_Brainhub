# Backend part of Recruitment Task 
I've used Node.js server (with configured Typescript) as well as MongoDb database (on local server).\
For tests I've used JEST.

## Scripts- TODO

### `npm run start:dev`

Runs the app in the development mode via nodemon.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run start`

Runs the app in the production mode.
Command bundles project in production mode and launches from that.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

    "build": "rimraf ./build && tsc",
    "start": "npm run build && node build/index.js",
    "start:dev": "nodemon"

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles project in production mode and optimizes the build for the best performance.

### `npm test` TODO

Launches the Tests using Jest.

### Database
Project is using custom configuration for local mongoDb that connects to port '127.0.0.1'.
