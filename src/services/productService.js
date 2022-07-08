import pkg from 'pg';
import config from '../../db.js'
import 'dotenv/config'

const { Pool } = pkg;
const productTable=process.env.DB_TABLA_PRODUCTO;
const productDisTable=process.env.DB_TABLA_PODUCTOXDESORDEN;
const disorderTable=process.env.DB_TABLA_DESORDEN;

const pool = new Pool(
    {
        connectionString: process.env.DB_SERVER,
        ssl: {
            rejectUnauthorized: false
        }
    })

export class ProductService{

    getAllProducts=async()=>{
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`SELECT * 
                                    FROM "${productTable}"`);

        return result.rows;
    }


    createProduct = async (product) => {
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`INSERT INTO "${productTable}" ("productname","productimage")
                                        VALUES ('${product.productName}', '${product.productImage}')`);

        return result.rowCount;
    }

    updateProductById = async (id, product) => {
        console.log('This is a function on the service');
        console.log(product)
        await pool.connect();
        let result = await pool.query(`UPDATE "${productTable}" 
                                       SET "productname" = '${product.productname}', "productimage" = '${product.productimage}'
                                       WHERE "idproduct"='${id}'`)
        return result.rowCount;
    }

    deleteProductById = async (id) => {
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`DELETE FROM "${productTable}"
                                        WHERE "idproduct"='${id}'`);
        return result.rowCount;
    }

    addDisorderByIdProduct = async (idProduct,idDisorder)=>{
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`INSERT INTO "${productDisTable}"
                                        ("idproduct","iddisorder")
                                        VALUES
                                        ('${idProduct}','${idDisorder}')`)
        return result.rowCount;
    }

    deleteDisorderByIdProduct = async (idProduct,idDisorder) => {
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`DELETE FROM "${productDisTable}" 
                                        WHERE idproduct='${idProduct}' 
                                        AND iddisorder='${idDisorder}'`);
        console.log(response)
        return result.rowCount;
    }

    getDisorderByProductId = async (idProduct)=>{
        await pool.connect();
        let result = await pool.query(`SELECT p."productname", d."namedisorder"
                                       FROM "${productTable}" p
                                       INNER JOIN "${productDisTable}" pd ON p."idproduct"=pd."idproduct"
                                       INNER JOIN "${disorderTable}" d ON  d."iddisorder"=pd."iddisorder"
                                       WHERE p."idproduct"=${idProduct}`)
        return result.rows;
    }

    getProductByName=async(productName)=>{
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`SELECT * 
                                       FROM "${productTable}" 
                                       WHERE "productname"='${productName}'`);
        return result.rows;
    }
}