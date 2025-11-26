import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi"

const ParkingAllocationApi = {
    getFlats: async (fid) => {
        console.log(fid);
        const result = await fetch(ApiEndpoint.getFlats(fid));
        const data = await result.json();
        return data;
    },
    AllocateParking: async (formData) => {
        const result = await fetch(ApiEndpoint.AllocateParking, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const data = await result.json();
        return data;
    },
    viewAllocateParking: async (id) => {
        console.log("view p = ",id);
        const result = await fetch(ApiEndpoint.viewAllocateParking(id));
        const data = await result.json();
        return data;
    }
}

export default ParkingAllocationApi