import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi"

const DashboardManagement = {
    countResidence: async (id) => {
        const data = await fetch(ApiEndpoint.totalResidence(id))
        const result = await data.json();

        return result;
    },
    countStaff: async (id) => {
        const data = await fetch(ApiEndpoint.totalStaff(id))
        const result = await data.json();
        return result;
    },
    countParking: async(id)=>{
        const data = await fetch(ApiEndpoint.totalParking(id));
        const result = await data.json();
        return result;
    }
}
export default DashboardManagement