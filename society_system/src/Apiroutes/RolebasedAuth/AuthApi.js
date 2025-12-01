// for local
// const BASE_URL = "http://localhost:5000"

// for live
const BASE_URL = "https://society-management-backend-vpvs.onrender.com";
const ApiEndpoint = {

    MemberManagement: (society_name) => `${BASE_URL}/auth/member/${society_name}`,
    Approve : (id)=> `${BASE_URL}/auth/approve/${id}`,
    totalResidence: (id) => `${BASE_URL}/auth/totalresidence/${id}`,
    totalParking:(id)=>`${BASE_URL}/auth/totalparking/${id}`,
    Addstaff: (id) => `${BASE_URL}/auth/add-staff/${id}`,
    Managestaff: (id) => `${BASE_URL}/auth/manage-staff/${id}`,
    InActivestaff: (id) => `${BASE_URL}/auth/inactive-staff/${id}`,
    Activestaff: (id) => `${BASE_URL}/auth/active-staff/${id}`,
    getOnestaff: (id) => `${BASE_URL}/auth/getonestaff/${id}`,
    updateStaff: (id) => `${BASE_URL}/auth/update-staff/${id}`,
    totalStaff: (id) => `${BASE_URL}/auth/totalstaff/${id}`,
    getFlats: (id) => `${BASE_URL}/auth/getflatsnumber/${id}`,
    AllocateParking: `${BASE_URL}/auth/allocateparking`,
    viewAllocateParking: (id) => `${BASE_URL}/auth/viewallocateparking/${id}`,


}
export default ApiEndpoint