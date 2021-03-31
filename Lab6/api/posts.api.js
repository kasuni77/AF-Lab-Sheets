const uuid = require('uuid');

let posts = new Map();


let createPost = (obj) =>{

    let post = {
        id: uuid.v4(),
        data: new Date(),
        name:obj.name,
        description:obj.description
    };
    posts.set(post.id,post);
    return post;
};

// create.post('/', ctx => {
//     ctx.body = 'Hello World - post';
// });

let getPosts = () => {
    //spred syntax ...
    return[...posts.values()]
};

let getPost = () => {
    return posts.get(id);
};

module.exports = {
    createPost,
    getPosts,
    getPost
}