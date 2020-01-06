import request from './baseInstance';

export default {
    async login(params){
        return await request.post('/login',params);
    },
    async updateAccount(params){
        return await request.post('/updateAccount',params);
    }
}
