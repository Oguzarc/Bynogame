const express = require('express');
const mongodb = require('mongodb');

const router = express.Router()

//get posts
router.get('/',async (req, res) =>{
   const posts = await loadPostCollection();
   res.send(await posts.find({}).toArray()); 
});

//add Post
router.post('/',async (req, res)=> {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        password: req.body.password,
        email: req.body.email,
    });
    res.status(201).send();
});

//delete post
router.delete('/:id', async (req, res)=>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://abc123:oguzfener123@cluster0-7shz7.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true});

    return client.db('vue_express').collection('uyeler')
}

module.exports = router;