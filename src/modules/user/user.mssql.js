const mssqlcon = require('../../dbconnection');
class UserMSSql { 
   async getAllUsers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from USERINFO');
    return res.recordset;
  }
}
module.exports = new UserMSSql();