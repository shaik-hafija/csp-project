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
  
  const Result1 = async (...Parameters) => {
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
    // Details = eval(`(${Parameters[2]})`); 
     
   switch (Parameters[1]) {
      case "Insert":
        Sql = `insert into ${Parameters[0]} values('${Details.p_id}','${Details.p_image}','${Details.p_name}','${Details.p_type}','${Details.p_cost}')`;
        Message = "Inserted Successfully";
        break;
      case "Update":
        Sql = `update ${Parameters[0]} set p_name = '${Parameters[3].p_name}',p_image = '${Parameters[3].p_image}',p_type = '${Parameters[3].p_type}',p_cost = ${Parameters[3].p_cost} where p_id= '${Details}'`;
        Message = `Succes Updating from ${Details.p_name, Details.p_id} to ${Parameters[3].p_name, Parameters[3].p_id}`;
        break;
      case "Delete":
        Sql = `delete  from ${Parameters[0]} where p_id= '${Details}'`;
        Message = `Success deleting ${Details}`;
        
        break;
      case "Read":  
          // Sql = `select * from ${Parameters[0]}`;
          // Message = `Showing all the values in the database ${Parameters[0]}`;
          // if(Details.p_type){
          
            if(Details == "flower"){
              Sql = `select * from ${Parameters[0]} where p_type = '${Details}'`;
            }
            else if(Details == "All")
            {
              Sql = `select * from ${Parameters[0]}`;
            }
            else
            {
              Sql = `select * from ${Parameters[0]} where p_name = '${Details}'`;
            }
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
  const register= async (...Parameters)=>
  {
    let sql,message;
    console.log(Parameters[2]);
    Details=Parameters[2];
    switch(Parameters[1])
    {
      case "Insert":
        sql = `insert into ${Parameters[0]} values('${Details.yourname}','${Details.email}','${Details.password}')`;
        message="inserted successfully";
        break;
      case 'Read':
        sql=`select * from ${Parameters[0]} where email='${Details}'`;
        message="Read successfully";
      default:
      console.log("Inavlid");
      break;

    }
    console.log(sql);
    var result=await Query(sql);
    result.message-message;
    return result;

  }


const login=async(...Parameters)=>
{
  let sql,message;
   Details=Parameters[2];
  console.log(Parameters[2]);
  switch(Parameters[1])
  {
    case 'Read':
      sql =`select * from ${Parameters[0]} where email='${Details}'`;

      message="read succesfully";
    default:
      console.log("Inavlid");
      break;
  
  }
  console.log(sql);
  var result=await Query(sql);
  result.message=message;
  return result;
}


  module.exports = {
    Result1:Result1,
    register:register,
    login:login
  }
