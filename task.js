const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        fs = require('fs');
        var people = JSON.stringify(json, null, 2);
        fs.writeFile('result/post.txt', people, function (err) {
    if (err) 
        return console.log(err);
    console.log('Successfully posted JSON data to post.txt');
});
})

