// for local
// const BASE_URL = "http://localhost:5000"

// for live
const BASE_URL = "https://society-management-backend-vpvs.onrender.com";
const ApiEndpoints = {
    "get_flats": `${BASE_URL}/mainadmin/getsocietyname`,
    "getblockbyflatsname": (id) => `${BASE_URL}/users/getflatcodebysocietyid/${id}`,
    "userSignup": `${BASE_URL}/users/signup`,
    "userlogin": `${BASE_URL}/users/login`,
    "verifyotp": `${BASE_URL}/users/verify-otp`,
    "security_login": `${BASE_URL}/auth/security-login`,
    "add_visitor": `${BASE_URL}/security/add-visitor`,
    "view_visitor": (society_id) => `${BASE_URL}/security/get-visitor/${society_id}`,
    "totalResidence":(society_id)=>`${BASE_URL}/security/totalresidence/${society_id}`,
    "totalParking":(cid)=>`${BASE_URL}/security/totalparking/${cid}`,
    "totalVisitor":(society_id)=>`${BASE_URL}/security/totalvisitor/${society_id}`,
}
export default ApiEndpoints;