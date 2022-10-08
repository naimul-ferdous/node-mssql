const userMssql = require('../user/user.mssql');
class user {
    async getAllUsers(req, res) {
      try {
         const output = await userMssql.getAllUsers();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new user();