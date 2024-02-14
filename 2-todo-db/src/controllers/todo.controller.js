import { assert } from "joi";
import data from '../data/data.json' assert{type:"json"};
import { sendNotFound, sendSeverError } from "../helper/helper.functions";

export const getTodos = async(req , res)=>{
    try {
        if(data.length ===0){
            sendNotFound(res, 'No Todos found')
        }else{
            if (req.query.order){
                res.status(200).json(orderData(data,req.query.order))
            }else{
                res.status(200).json(data)
            }
        }
        
    } catch (error) {
        sendSeverError(res, error)
        
    }
    // res.status(200).send(data)
};
export const CreateTodos =async(req,res)=>{
    res.status(200).send('create a todo')
}