import ApiEndpoints from "../../../Apiroutes/UserRoutes/UserEndpoints";
import { Membermanagement } from "../Chairman/MemberManagement";


const Managestaff = {
    login: async (formdata) => {
        const data = await fetch(ApiEndpoints.security_login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata)
        })
        const result = await data.json();
        return result;
    },

}

export default Managestaff;