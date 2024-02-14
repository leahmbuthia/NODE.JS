export const sendSeverError =(res,error)=>{
    res.status(500).send({message: error.message});
}
export const sendNotFound =(res,message)=>{
    res.status(500).send({message: message});
}
export const orderData=(data, order)=>{
    if(order === 'asc'){
        return data.sort((a, b)=> a.id - b.id);
    }else if(order==='desc'){
        return data.sort((a, b)=> b.id - a.id); 
    }

    }
export const paginate =(data, req, res)=>{
    const page=Number (req.query.page);
    const limit =Number(req.query.limit);
    const StartIndex =(page-1) *limit;
    const endIndex = page*limit;
    const results ={};
    if(endIndex<data.length){
        results.next ={
            page:page+1,
            limit: limit
        }
    }
    if(StartIndex > 0){
        results.previous ={
            page: page-1,
            limit:limit
        }
    }
    results.results =data.slice(StartIndex)
}
