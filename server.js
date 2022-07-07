import express from "express";
import productRouter from './src/controllers/productController.js'
import userRouter from './src/controllers/userController.js'
import disorderRouter from './src/controllers/disorderController.js'
import bodyParser from 'body-parser'


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/disorder", disorderRouter);


app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });