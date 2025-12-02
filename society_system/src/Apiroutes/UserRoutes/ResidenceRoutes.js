// for local
// const BASE_URL = "http://localhost:5000"

// for live
const BASE_URL = "https://society-management-backend-vpvs.onrender.com";
const ResidenceEndPoints = {
    "Manageresidence" : (sid,fid)=>`${BASE_URL}/residence/view_visitor/${sid}/${fid}`,
    "approve": (vid) => `${BASE_URL}/residence/approve/${vid}`,
    "reject": (id) => `${BASE_URL}/residence/reject/${id}`,
   

}
export default ResidenceEndPoints;