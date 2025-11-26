import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi";

export const Membermanagement = {
    allMembers: async (society_name) => {
  
        const data = await fetch(ApiEndpoint.MemberManagement(society_name));
        const result = await data.json();
        console.log("Member management = ",result)
        return result.message
    },
    approveMembers: async (id) => {
        const data = await fetch(ApiEndpoint.Approve(id))
        const result = await data.json();
        return result;
    }
}

