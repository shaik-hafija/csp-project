const oracledb = require('oracledb');
// Set database connection details
const dbConfig = {
    user: "system",
    password: "customer",
    connectString: "localhost/orcl",
  };
  const Query = async (sql) => {                                                               
    let connection; 
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(sql);
      await connection.commit();
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  
  const Result = async (...Parameters) => {
    // console.log("hey error");
    
    let Sql, Message;
    console.log(typeof (Parameters[2]));

    Details = Parameters[2];
    console.log(Details);
    // try{
    //   Details = eval(`(${Parameters[2]})`); 
    // }
    // catch
    // {

    // }
    //Details = eval(`(${Parameters[2]})`); 
     
   switch (Parameters[1]) {
      case "Insert":
        Sql = `insert into ${Parameters[0]} values('${Details.p_id}','${Details.p_image}','${Details.p_name}','${Details.p_type}','${Details.p_cost}')`;
        Message = "Inserted Successfully";
        break;
      case "Update":
        Sql = `update ${Parameters[0]} set p_name = '${Parameters[3].p_name}' where p_id= '${Details}'`;
        Message = `Succes Updating from ${Details.p_name, Details.p_id} to ${Parameters[3].p_name, Parameters[3].p_id}`;
        break;
      case "Delete":
        Sql = `delete  from ${Parameters[0]} where p_type= '${Details}'`;
        Message = `Success deleting ${Details}`;
        
        break;
      case "Read":  
          // Sql = `select * from ${Parameters[0]}`;
          // Message = `Showing all the values in the database ${Parameters[0]}`;
          // if(Details.p_type){
            Sql = `select * from ${Parameters[0]} where p_type = '${Details}'`;
            Message = `${Details} Retrived`
          // }
          
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
    console.log(Sql);
    var result = await Query(Sql);
    result.Message = Message;
    return result;
  };
  module.exports = Result;