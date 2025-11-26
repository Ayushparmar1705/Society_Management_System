import ApiEndpoints from "../../Apiroutes/UserRoutes/UserEndpoints"

const Managesignup = {
    getSociety : async()=>{
        const data = await fetch(ApiEndpoints.get_flats)
        const result = await data.json();

        return result;
    },
        getFlatsCode : async(society_id)=>{
            const data = await fetch(ApiEndpoints.getblockbyflatsname(society_id));
            const result = await data.json();
            return result;
        },
    userSignup : async(FormData)=>{
        const data = await fetch(ApiEndpoints.userSignup,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(FormData)
        })
        const result = await data.json();
        return result;
    }
  

}
export default Managesignup;