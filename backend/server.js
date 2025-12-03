const express = require("express");
const app = express();
const cors = require("cors");

// CORS SETUP (works for localhost + live URL)
app.use(cors({
    origin: [
        "https://society-management-system-afb5.onrender.com",
        "http://localhost:3000"
    ],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// FIX: GLOBAL PRE-FLIGHT HANDLER (instead of app.options("*"))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// ROUTES
const societyroutes = require("./routes/MainAdmin/Addsocietyroutes");
const blockroutes = require("./routes/MainAdmin/Addblockroutes");
const flatsroutes = require("./routes/MainAdmin/Addflatsroutes");
const usersignuproutes = require("./routes/User/Signuproutes");
const userloginroutes = require("./routes/User/Loginroutes");
const memberManagement = require("./routes/RolebasedAuth/Chairman/MemberRoutes");
const dashboardRoutes = require("./routes/RolebasedAuth/Chairman/DashboardRoutes");
const ParkingAllocationRoutes = require("./routes/RolebasedAuth/Chairman/AllocateParkingRoutes");
const StaffRoutes = require("./routes/RolebasedAuth/Staff/StaffRoutes");
const VisitorRoutes = require("./routes/RolebasedAuth/Staff/ManageVisitorRoutes");
const residenceRoutes = require("./routes/residenceRoutes/residenceRoutes");
const contactRoutes = require("./routes/ContactRoutes/ContactRoutes");
app.use("/mainadmin", societyroutes);
app.use("/mainadmin", blockroutes);
app.use("/mainadmin", flatsroutes);
app.use("/users", usersignuproutes);
app.use("/users", userloginroutes)
app.use("/auth", memberManagement);
app.use("/auth", dashboardRoutes);
app.use("/auth", ParkingAllocationRoutes);
app.use("/auth", StaffRoutes);
app.use("/security", VisitorRoutes);
app.use("/residence", residenceRoutes);
app.use("/contact",contactRoutes)

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
