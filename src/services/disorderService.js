import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const disorderTable=process.env.DB_TABLA_DESORDEN;

export class DisorderService{

    getAllDisorders=async()=>{
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response = await pool.request()
                .query(`SELECT * 
                        FROM ${disorderTable}`);

        return response.recordset;
    }

    getDisorderById=async(id)=>{
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response = await pool.request()
                .input('idDisorder',sql.Int, id)
                .query(`SELECT * 
                        FROM ${disorderTable}
                        WHERE idDisorder=@idDisorder`);

        return response.recordset;
    }
}