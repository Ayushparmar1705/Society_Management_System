import ApiEndpoints from "../../../Apiroutes/UserRoutes/UserEndpoints";
const SecurityDashboard = {
    countResidence: async (id) => {
        const data = await fetch(ApiEndpoints.totalResidence((id)));
        const result = await data.json();
        return result;
    },
    countParking: async (id) => {
        const data = await fetch(ApiEndpoints.totalParking(id))
        const result = await data.json();
        return result;
    },
    countVisitor: async (id) => {
        const data = await fetch(ApiEndpoints.totalVisitor(id));
        const result = await data.json();
        return result;
    }
}
export default SecurityDashboard