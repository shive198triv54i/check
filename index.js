// console.log("backend ... har har mahadev")
require('dotenv').config();
const express=require('express');
const app=express();
const port=3690;
const githubdata={
    "login": "shive198triv54i",
    "id": 78144950,
    "node_id": "MDQ6VXNlcjc4MTQ0OTUw",
    "avatar_url": "https://avatars.githubusercontent.com/u/78144950?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shive198triv54i",
    "html_url": "https://github.com/shive198triv54i",
    "followers_url": "https://api.github.com/users/shive198triv54i/followers",
    "following_url": "https://api.github.com/users/shive198triv54i/following{/other_user}",
    "gists_url": "https://api.github.com/users/shive198triv54i/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shive198triv54i/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shive198triv54i/subscriptions",
    "organizations_url": "https://api.github.com/users/shive198triv54i/orgs",
    "repos_url": "https://api.github.com/users/shive198triv54i/repos",
    "events_url": "https://api.github.com/users/shive198triv54i/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shive198triv54i/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-01-28T09:56:02Z",
    "updated_at": "2023-12-01T04:48:13Z"
};
app.get('/',(req,res)=>{
    res.send('hello world!!!')
})
app.get('/insta',(req,res)=>{
    res.send("trivedi.shivesh");
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>this is heading</h1>")
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT,()=>{
    console.log(`focus on p not r ${port}`)
})