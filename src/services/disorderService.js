import pkg from 'pg';
import config from '../../db.js'
import 'dotenv/config'

const { Pool } = pkg;
const disorderTable=process.env.DB_TABLA_DESORDEN;

const pool = new Pool(
    {
        connectionString: process.env.DB_SERVER,
        ssl: {
            rejectUnauthorized: false
        }
    })

export class DisorderService{

    getAllDisorders=async()=>{
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`SELECT * 
                                       FROM ${disorderTable}`)
                            
        return result.rows;
    }

    getDisorderById=async(id)=>{
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`SELECT * 
                                    FROM ${disorderTable}
                                    WHERE idDisorder=${id}`);

        return result.rows;
    }

    createDisorder = async (disorderName) => {
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`INSERT INTO ${disorderTable} 
                                        (nameDisorder) VALUES ${disorderName}`);

        return result.rowCount;
    }

    deleteDisorderById = async (idDisorder) => {
        console.log('This is a function on the service');
        await pool.connect();
        let result = await pool.query(`DELETE FROM "${disorderTable}"
                                       WHERE "iddisorder"='${idDisorder}'`)
    }
}