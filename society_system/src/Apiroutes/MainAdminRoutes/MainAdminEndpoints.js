// for local host
const BASE_URL = "http://localhost:5000";
// for network
// const BASE_URL = "http://192.168.1.12:5000";
const MainAdminApiEndPoints = {
    "add_society" : `${BASE_URL}/mainadmin/addsociety`,
    "get_society" : (page , limit) => `${BASE_URL}/mainadmin/getsociety/${page}/${limit}`,
    "delete_society" : (id) => `${BASE_URL}/mainadmin/deletesociety/${id}`,
    "get_society_byname" : (name) => `${BASE_URL}/mainadmin/searchsociety/${name}`,
    "search_by_id" : (id)=> `${BASE_URL}/mainadmin/searchbyid/${id}`,
    "add_block" : `${BASE_URL}/mainadmin/addblock`,
    "get_society_name" : `${BASE_URL}/mainadmin/getsocietyname`,
    "get_block" : `${BASE_URL}/mainadmin/getblock`,
    "pagination" :  `{BASE_URL}/mainadmin/pagination`,
    "Activate_society" : (id)=> `${BASE_URL}/mainadmin/activatesociety/${id}`,
    "add_flats" : `${BASE_URL}/mainadmin/addflats`,
    "getblockbyflatsname" : (id) => `${BASE_URL}/mainadmin/getblockbyflatname/${id}`,
    "getFlats" : (page , limit) => `${BASE_URL}/mainadmin/getFlats/${page}/${limit}`,
    "update_society" : (id)=> `${BASE_URL}/mainadmin/updatesociety/${id}`,

}
export default MainAdminApiEndPoints;