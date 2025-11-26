import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi"

const DashboardManagement = {
    countResidence: async () => {
        const data = await fetch(ApiEndpoint.totalResidence)
        const result = await data.json();

        return result;
    },
    countStaff: async (id) => {
        const data = await fetch(ApiEndpoint.totalStaff(id))
        const result = await data.json();
        console.log("staff : ",result)
        return result;
    },
}
export default DashboardManagement