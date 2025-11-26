import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi";

export  const  StaffManagement = {
    Addstaff : async(securityData , id)=>{
        const data = await fetch(ApiEndpoint.Addstaff(id),{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(securityData)
        });
        const result = await data.json();
        return result;
    },
    Managestaff : async(id)=>{
        const data = await fetch(ApiEndpoint.Managestaff(id))
        const result = await data.json();
        return result;
    },
    InActivestaff : async(id)=>{
        const data = await fetch(ApiEndpoint.InActivestaff(id),{
            method : "DELETE",
        });
        const result = await data.json();
        return result;
    },
    Activestaff : async(id)=>{
        const data = await fetch(ApiEndpoint.Activestaff(id),{
            method : "PUT",
        })
        const result = await data.json();
        return result;
    },
    editStaff : async(id)=>{
        const data = await fetch(ApiEndpoint.getOnestaff(id));
        const result = await data.json();
        return result;
    },
    updateStaff : async(formdata , id)=>{
        const data = await fetch(ApiEndpoint.updateStaff(id),{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(formdata),
        });
        const result = await data.json();
        return result;
    }
}
