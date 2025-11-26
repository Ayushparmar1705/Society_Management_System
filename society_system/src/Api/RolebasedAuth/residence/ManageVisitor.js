import ResidenceEndPoints from "../../../Apiroutes/UserRoutes/ResidenceRoutes";

const ManageResidence = {
    Managevisitor : async(flat_id)=>{
        const data = await fetch(ResidenceEndPoints.Manageresidence(flat_id));
        const result = await data.json();
        return result;
    },
    Approve: async (userid) => {
        const data = await fetch(ResidenceEndPoints.approve(userid));
        const result = await data.json();
        return result;
    }
}

export default ManageResidence