const BASE_URL = "http://localhost:5000";
// for network
// const BASE_URL = "http://192.168.1.12:5000";
const ApiEndpoints = {
    "get_flats": `${BASE_URL}/mainadmin/getsocietyname`,
    "getblockbyflatsname": (id) => `${BASE_URL}/users/getflatcodebysocietyid/${id}`,
    "userSignup": `${BASE_URL}/users/signup`,
    "userlogin": `${BASE_URL}/users/login`,
    "verifyotp": `${BASE_URL}/users/verify-otp`,
    "security_login": `${BASE_URL}/auth/security-login`,
    "add_visitor": `${BASE_URL}/security/add-visitor`,
    "view_visitor": (id) => `${BASE_URL}/security/get-visitor/${id}`,

}
export default ApiEndpoints;