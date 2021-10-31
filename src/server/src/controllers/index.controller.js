const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL|| 'postgres://root:root@127.0.0.1:5432/edash',
    ssl: process.env.DATABASE_URL ? true : false
})

const getbtn = async (req,res)=>{
    try
    {
        const response = await pool.query('select * from edash.public.btn_set');
        res.status(200).json(response.rows);
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};

module.exports = {
    getbtn
}



// const getUserById = async(req,res) => {
//     const id = req.params.id;
//     const response = await pool.query('SELECT * FROM users WHERE id = $1',[id]);
//     res.json(response.rows);
// };

// const createUser = async (req,res)=>{
//     const {name, email} = req.body;
//     const response = await pool.query('INSERT INTO users(name, email) VALUES($1, $2)',[name, email ]);
//     console.log(response);
//     res.json({
//         message: 'User Added Successfully',
//         body:{
//             user:{name,email}
//         }
//     });
// };

// const deleteUser = async(req,res) =>{
//     const id = req.params.id;
//     const response = await pool.query('DELETE FROM users WHERE id = $1',[id]);
//     console.log(response);
//     res.json(`User ${id} deleted successfully`);
// };

// const updateUser = async(req,res) => {
//     const id = req.params.id;
//     const {name, email} = req.body;
//     const response = await pool.query('UPDATE users SET name = $1, email=$2 WHERE id = $3',[name, email,id]);
//     console.log(response);
//     res.json('User updated successfully');
// };

// module.exports = {
//     getUsers,
//     getUserById,
//     createUser,
//     deleteUser,
//     updateUser
// }