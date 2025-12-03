import ApiEndpoints from "../../Apiroutes/MainAdminRoutes/MainAdminEndpoints"
const ManageNotification = {
    manageNotification: async () => {
        try {
            const result = await fetch(ApiEndpoints.getNotification);
            const data = await result.json();
            return data;
        }
        catch(err){
            console.log(err);
        }
    }
}
export default ManageNotification;