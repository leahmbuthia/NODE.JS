import {poolRequest , sql} from "../utils/dbConnect.js";
 export const getTodosServices = async()=>{
    try {
        const result =await poolRequest.query("select * from tbl_todo");
        console.log(result);
        return result.recordset
    } catch (error) {
        return error.message;
        
    }
 }