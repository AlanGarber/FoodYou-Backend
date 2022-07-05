import { Router } from 'express';
import { UserService } from '../services/userService.js';

const router=Router();
const userService = new UserService();

router.get("/",async(req,res)=>{
    console.log(`This is a get operation`);

    const users=await userService.getAllUsers();
    return res.status(200).json(users);
})

router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const user = await userService.getUserById(req.params.id);
  
    return res.status(200).json(user);
});

router.post('', async (req, res) => {
    console.log(`This is a post operation`);

    const user = await userService.createUser(req.body);
    return res.status(200).json(user)
  
});

router.put('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const user = await userService.updateUserById(req.params.id, req.body);
  
    return res.status(200).json(user);
});

router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const user = await userService.deleteUserById(req.params.id);
  
    return res.status(200).json(user);
});

export default router