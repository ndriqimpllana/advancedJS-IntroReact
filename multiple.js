async function fetchParallelData() {
    try {
        const [userResponse, postsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts')
        ]);

        const user = await userResponse.json();
        const posts = await postsResponse.json();

        console.log('User.', user);
        console.log('Posts.', posts);
    } catch(error) {
        console.log('Error.', error);
    }
}

fetchParallelData();

async function fetchMultipleData() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        const posts = await postsResponse.json();

        console.log('User.', user);
        console.log('Posts.', posts);
    } catch(error) {
        console.log('Error', error);
    }
}

fetchMultipleData();