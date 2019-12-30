const express = require('express');
const router =  express.Router()
const registerCntrl = require('../Controllers/register');
const loginCntrl = require('../Controllers/login');
const addblogCntrl = require('../Controllers/blogs')

// router.post('/register', registerCntrl.registerUser)
router.post('/login', loginCntrl.login)
router.post('/addBlog', addblogCntrl.addBlog)
router.get('/getAllBlogs', addblogCntrl.getAllBlogs)
router.get('/getBlog/:id', addblogCntrl.getBlogForId)
router.get('/blogsForUser', addblogCntrl.getBlogsForUser)

module.exports = router;