const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create Post
router.post('/', async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const newPost = new Post({ title, content, userId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
