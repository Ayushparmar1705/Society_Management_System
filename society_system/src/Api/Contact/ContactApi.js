const { contactRoutes } = require("../../Apiroutes/ContactRoutes/ContactRoutes")

const contactApi = {
    contactToAdmin: async (data) => {
        const result = await fetch(contactRoutes.sendMessage, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        });
        const finalResult = await result.json();
        return finalResult;

    }
}
export default contactApi;