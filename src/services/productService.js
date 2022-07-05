import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const productTable=process.env.DB_TABLA_PRODUCTO;

export class ProductService{

    getAllProducts=async()=>{
        console.log('This is a function on the service');
        const pool = await sql.connect(config);

        let response = await pool.request()
                .query(`SELECT * 
                        FROM ${productTable}`);

        return response.recordset;
    }

    getProductById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
                .input('idProduct',sql.Int, id)
                .query(`SELECT *
                        FROM ${productTable}
                        WHERE idProduct=@idProduct`)
        return response.recordset;
    }


    createProduct = async (product) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('productName',sql.VarChar, product.productName)
            .input('productImage',sql.VarChar, product.productImage)
            .query(`INSERT INTO ${productTable} (productName,productImage) VALUES (@productName, @productImage)`);
        console.log(response)

        return response.recordset;
    }

    updateProductById = async (id, product) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idProduct',sql.Int, id)
            .input('productName',sql.VarChar, product.productName)
            .input('productImage',sql.VarChar, product.productImage)
            .query(`UPDATE ${productTable} SET productName = @productName, productImage = @productImage WHERE idProduct=@idProduct`);
        console.log(response)

        return response.recordset;
    }

    deleteProductById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idProduct',sql.Int, id)
            .query(`DELETE FROM ${productTable} WHERE idProduct=@idProduct`);
        console.log(response)

        return response.recordset;
    }
}