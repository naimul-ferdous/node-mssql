const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sa',
              password: 'Tkgl@432!',
              server: 'localhost',
              database: 'attandance',
              port: 1433,
              options: {
                cryptoCredentialsDetails: {
                    minVersion: 'TLSv1'
                },
                trustServerCertificate: true
            }
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();