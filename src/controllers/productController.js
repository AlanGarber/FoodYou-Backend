import { Router } from 'express';
import { ProductService } from '../services/productService.js';

const router=Router();
const productService = new ProductService();

router.get("/",async(req,res)=>{
    console.log(`This is a get operation`);

    const productos=await productService.getAllProducts();
    return res.status(200).json(productos);
})

router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const product = await productService.getProductById(req.params.id);
  
    return res.status(200).json(product);
});

router.post('', async (req, res) => {
    console.log(`This is a post operation`);

    const product = await productService.createProduct(req.body);
    return res.status(200).json(product)
  
});

router.post('/:id', async (req, res) => {
    console.log(`This is a get operation`);
    console.log(req.params.id,req.query.idDisorder)
    const user = await productService.addDisorderByIdProduct(req.params.id,req.query.idDisorder);
  
    return res.status(200).json(user);
});


router.put('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a put operation`);
  
    const product = await productService.updateProductById(req.params.id, req.body);
  
    return res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a delete operation`);
  
    const product = await productService.deleteProductById(req.params.id);
  
    return res.status(200).json(product);
});

router.delete('/:idProduct/:idDisorder', async (req, res) => {
    console.log(`This is a delete operation`);
    console.log(req.params.idProduct,req.query.idDisorder)
    const user = await productService.deleteDisorderByIdProduct(req.params.idProduct,req.params.idDisorder);
  
    return res.status(200).json(user);
});

export default router