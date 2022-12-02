async function getUser(userId = null) {
    userId = userId ? userId : '';

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let data = await response.json()
    return data;
}

getUser()
    .then(data => console.log(data));
