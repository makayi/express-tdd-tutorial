import express from 'express';
import movie from '../models/movie';
const router =express.Router();


router.get('/movies',async(req,res)=>{
    try {
        const movies = await movie.find({}).exec();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({message:'Interval server error'})
    }
})


module.exports=router;

