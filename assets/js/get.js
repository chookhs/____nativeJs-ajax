async function getData(url) {
    const response = await fetch(url, {
       method: 'GET',
       headers: {
        'Content-type': 'text/plain'
       }
    });

    if(!response.ok) throw Error(response.status);

    return response.json();

} 


getData('https://jsonplaceholder.typicode.com/posts/99')
.then(data => console.log(data))
.catch (err => console.log(err))

;
// https://jsonplaceholder.typicode.com/posts/100
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1