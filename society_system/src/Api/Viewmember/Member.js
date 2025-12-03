const { default: MainAdminApiEndPoints } = require("../../Apiroutes/MainAdminRoutes/MainAdminEndpoints")

const MembersManagement = {
    viewMembers: async () => {

        const result = await fetch(MainAdminApiEndPoints.viewMembers);
        const data = await result.json();
        return data;
    },
    makeChairman: async (id) => {
        const result = await fetch(MainAdminApiEndPoints.makeChairman(id), {
            method: "PUT",
        });
        const data = await result.json();
        return data;
    },
    searchMember: async (name) => {
        const result = await fetch(MainAdminApiEndPoints.searchMember(name));
        const data = await result.json();
        return data;
    }
}
export default MembersManagement;