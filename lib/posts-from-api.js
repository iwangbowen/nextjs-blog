const fetch = require('node-fetch');
const blogsUrl = 'http://localhost:1337/Blogs';
// cSpell:disable
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTkzNzY1Mjg3LCJleHAiOjE1OTYzNTcyODd9.CtPEmecaleCw8P2J5PWuK6YtU_FXsoRAtveyQso-tWw';

export function getBlogs() {
    return fetch(blogsUrl,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json());
}