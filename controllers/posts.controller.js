const getPosts = (req, res)=>{
    res.status(200).send(`Get all posts filtered by "${req.query.title}"`);
};

const getPost = (req, res)=>{
    res.status(200).send("Get single post")
};

const createPost = (req, res)=>{
    res.status(201).send("create a posts")
};

const updatePost = (req, res)=>{
    res.status(200).send(`post with ID ${req.params.postId} has been updated`)
};

const deletePost = (req, res)=>{
    res.status(200).send(`post with ID ${req.params.postId} has been deleted`)
};

module.exports={
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};
