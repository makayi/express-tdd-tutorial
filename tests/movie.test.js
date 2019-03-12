import server from '../src/index';
import  request  from 'supertest';
import {expect} from 'chai';


describe('Movie API Tests',()=>{
    it('GET /api/v1/movies/ returns an array of movies',async()=>{
        const response= await request(server).get('/api/v1/movies/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
        // expect(response.body[0]).to.include.keys(['title','release_date','synopsis']);
    })
})