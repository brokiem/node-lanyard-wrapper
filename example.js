import { connectWebSocket, fetchUserData, fetchUserDataForMultipleUsers } from "node-lanyard-wrapper";

// Connecting with WebSocket
const ws = connectWebSocket("548120702373593090", (data) => {
    console.log(data);
}, (err) => {
    console.error(err);
});

// OR Fetching data with REST API
fetchUserData("548120702373593090")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

fetchUserDataForMultipleUsers(["268798547439255572", "156114103033790464"])
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
