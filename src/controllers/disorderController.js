import { Router } from 'express';
import { DisorderService } from '../services/disorderService.js';

const router=Router();
const disorderService = new DisorderService();

router.get("/",async(req,res)=>{
    console.log(`This is a get operation`);

    const disorders=await disorderService.getAllDisorders();
    return res.status(200).json(disorders);
})

router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const disorder = await disorderService.getDisorderById(req.params.id);
  
    return res.status(200).json(disorder);
});

router.post('', async (req, res) => {
    console.log(`Request URL Param: ${req.body}`);
    console.log(`This is a post operation`);
  
    const disorder = await disorderService.createDisorder(req.body.disorderName);
  
    return res.status(200).json(disorder);
});

export default router