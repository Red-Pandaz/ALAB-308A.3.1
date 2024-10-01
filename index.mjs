// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  try{
    const dbs = {
      db1: db1,
      db2: db2,
      db3: db3
    };
    let db = await central(id)
    let mainData = await dbs[db](id)
    let secretData = await vault(id)
    let userObj = {
      id: id,
      name: secretData.name,
      username: mainData.username,
      email: secretData.email,
      address: secretData.address,
      phone: secretData.phone,
      website: mainData.website,
      company: mainData.company
    }
  console.log(userObj)
  return userObj
  } catch(err){
    console.log(err)
  }   
}
getUserData(7)


