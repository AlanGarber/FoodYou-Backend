import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const userTable=process.env.DB_TABLA_USUARIO;

export class UserService{
    
    getAllUsers=async()=>{
        console.log('This is a function on the service');
        const pool = await sql.connect(config);

        let response = await pool.request()
                .query(`SELECT * 
                        FROM ${userTable}`);

        return response.recordset;
    }

    getUserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
                .input('idUser',sql.Int, id)
                .query(`SELECT *
                        FROM ${userTable}
                        WHERE idUser=@idUser`)
        return response.recordset;
    }


    createUser = async (user) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('profilePic',sql.VarChar, user.profilePic)
            .input('userName',sql.VarChar, user.userName)
            .input('userPassword',sql.VarChar, user.userPassword)
            .input('mail',sql.VarChar, user.mail)
            .query(`INSERT INTO ${userTable}
                    (profilePic,userName,userPassword,mail)
                    VALUES
                    (@profilePic,@userName,@userPassword,@mail)`);
        console.log(response)

        return response.recordset;
    }

    updateUserById = async (id, user) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idUser',sql.Int, id)
            .input('profilePic',sql.VarChar, user.profilePic)
            .input('userName',sql.VarChar, user.userName)
            .input('userPassword',sql.VarChar, user.userPassword)
            .input('mail',sql.VarChar, user.mail)
            .query(`UPDATE ${userTable} SET profilePic = @profilePic, userName = @userName, userPassword = @userPassword, mail = @mail WHERE idUser=@idUser`);
        console.log(response)

        return response.recordset;
    }

    deleteUserById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('idUser',sql.Int, id)
            .query(`DELETE FROM ${userTable} WHERE idUser=@idUser`);
        console.log(response)

        return response.recordset;
    }
}