async function postData(url, data) {
    const response = await fetch(url, {
       method: 'POST',
       headers: {
        'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
    });

    if(!response.ok) throw Error(response.status);

    return response.json();

} 


postData('https://jsonplaceholder.typicode.com/posts', {
    title: 'my custom title text',
    body: 'Body text',
    desct: 'Description text'
})
.then(data => console.log(data))
.catch (err => console.log(err))

;
// https://jsonplaceholder.typicode.com/posts/100
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1