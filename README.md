# node-lanyard-wrapper
Fully-typed Lanyard API wrapper for Node.js

## Installation
### NPM
```bash
npm i node-lanyard-wrapper
```
### Yarn
```bash
yarn add node-lanyard-wrapper
```

## Usage
### Connecting with WebSocket
```js
import { connectWebSocket } from 'node-lanyard-wrapper';

function onUpdate(data) {
    // data is a Lanyard data object
    console.log(data);
}

function onError(err) {
    // err is an error object
    console.error(err);
}

const ws = connectWebSocket('USER_ID', onUpdate, onError);
```

### OR Using the REST API
```js
import { fetchUserData, fetchUserDataForMultipleUsers } from 'node-lanyard-wrapper';

// Fetching data for a user
fetchUserData('USER_ID').then((data) => {
    // data is a Lanyard data object
    console.log(data);
});

// Fetching data for multiple users
fetchUserDataForMultipleUsers(['USER_ID_1', 'USER_ID_2']).then((data) => {
    // data is an array of Lanyard data objects
    console.log(data);
});
```

## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
