async function deleteData(url) {
    const response = await fetch(url, {
       method: 'DELETE'

    });

    if(response.ok) return true;

    return false;

} 

deleteData('https://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch (err => console.log(err))

;
// https://jsonplaceholder.typicode.com/posts/100
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1