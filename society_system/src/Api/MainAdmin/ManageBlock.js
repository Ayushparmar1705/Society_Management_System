import ApiEndpoints from "../../Apiroutes/MainAdminRoutes/MainAdminEndpoints"

const ManageBlock = {
    addBlock : async(blockData)=>{
        try{
            const result = await fetch(ApiEndpoints.add_block,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(blockData),
            });
            const data = await result.json();
            return data;
        }
        catch(error){
            console.log(error);
        }
    },
    getSocietyName : async()=>{
        try{
            const result = await fetch(ApiEndpoints.get_society_name);
            const data = await result.json();
            return data.message;
        }
        catch(error){
            console.log(error);
        }
    },
    getBlock : async()=>{
        try{
            const result = await fetch(ApiEndpoints.get_block);
            const data = await result.json();
            return data.message;
        }
        catch(error){
            console.log(error);
        }
    }
}
export default ManageBlock;