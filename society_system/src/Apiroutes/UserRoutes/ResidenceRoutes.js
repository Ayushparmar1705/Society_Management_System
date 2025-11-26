const BASE_URL = "http://localhost:5000";
// for network
// const BASE_URL = "http://192.168.1.12:5000";
const ResidenceEndPoints = {
    "Manageresidence" : (flat_id)=>`${BASE_URL}/residence/view_visitor/${flat_id}`,
    "approve": (vid) => `${BASE_URL}/residence/approve/${vid}`,
    "reject": (id) => `${BASE_URL}/residence/reject/${id}`,
   

}
export default ResidenceEndPoints;