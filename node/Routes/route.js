const express = require('express');
const router =  express.Router()
const userCntrl = require('../Controllers/user');
const addblogCntrl = require('../Controllers/blogs');
const multer = require('multer');
const path = require('path');

let Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.join(__dirname + '../../public/uploads/'));
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
})
let upload = multer({ storage: Storage });

router.post('/login', userCntrl.login)
router.post('/addBlog', upload.single('file') ,addblogCntrl.addBlog)
router.get('/getAllBlogs', addblogCntrl.getAllBlogs)
router.get('/getBlog/:id', addblogCntrl.getBlogForId)
router.get('/blogsForUser', addblogCntrl.getBlogsForUser)
router.post('/addReply', addblogCntrl.addReply)
router.post('/updateReply', addblogCntrl.updateLikesOrUnlikes)
router.post('/updateAccount', userCntrl.update)

module.exports = router;