import ApiEndpoints from "../../../Apiroutes/UserRoutes/UserEndpoints"

const ManageVisitor = {
    AddVisitor: async (vdata) => {
        const data = await fetch(ApiEndpoints.add_visitor, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vdata),
        })

        const result = await data.json();
        return result;
    },
    viewVisitor: async (society_id) => {
        const data = await fetch(ApiEndpoints.view_visitor(society_id));
        const result = await data.json();
        return result;
    }
}
export default ManageVisitor