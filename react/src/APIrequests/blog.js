import request from './baseInstance';

export default {
    async add(params){
        return await request.post('/addBlog',params);
     },
     async getAllBlogs(){
         return await request.get('/getAllBlogs');
     }, 
     async getBlog(id){
         return await request.get(`/getBlog/${id}`);
     },
     async blogsForUser(params){
         console.log('params', params)
        return await request.get('/blogsForUser', {params});
     }
}