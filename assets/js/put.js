async function putData(url, data) {
    const response = await fetch(url, {
       method: 'PUT',
       headers: {
        'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
    });

    if(!response.ok) throw Error(response.status);

    return response.json();

} 

putData('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'my custom title text/put',
    body: 'Body text/put',
    desct: 'Description text/put'
})
.then(data => console.log(data))
.catch (err => console.log(err))

;
// https://jsonplaceholder.typicode.com/posts/100
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1