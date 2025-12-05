import { Car, LayoutDashboard, MenuIcon, User } from 'lucide-react'
import { useState } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Loginchairmanheader() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItemStyles = {
        button: {
            '&:hover': {
                backgroundColor: "#334155",
                color: "white",
            },
            '&.ps-active': {
                backgroundColor: "#FFF",
                color: "black",
            }
        }
    };

    return (
        <div className="flex h-screen">
            
            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                width="280px"
                collapsedWidth="80px"
                backgroundColor="#1e293b"
                className="h-full shadow-xl"
                rootStyles={{ color: "white", border: "none" }}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        {!collapsed && (
                            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                        )}
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="p-2 rounded-lg hover:bg-[#334155] transition-colors"
                        >
                            <MenuIcon size={20} />
                        </button>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    <Menu menuItemStyles={menuItemStyles}>

                        <MenuItem
                            icon={<LayoutDashboard size={20} />}
                            component={<Link to="/dashboard" />}
                            active={location.pathname === '/dashboard'}
                        >
                            Dashboard
                        </MenuItem>

                        <MenuItem
                            icon={<User size={20} />}
                            component={<Link to="/member-management" />}
                            active={location.pathname === '/member-management'}
                        >
                            Member Management
                        </MenuItem>

                        {/* Staff SubMenu */}
                        <SubMenu label="Staff" icon={<User size={20} />}>
                            <MenuItem
                                component={<Link to="/add-staff" />}
                                active={location.pathname === '/add-staff'}
                            >
                                Add Staff
                            </MenuItem>
                            <MenuItem
                                component={<Link to="/manage-staff" />}
                                active={location.pathname === '/manage-staff'}
                            >
                                Manage Staff
                            </MenuItem>
                        </SubMenu>

                        {/* Parking SubMenu */}
                        <SubMenu label="Parking Allocation" icon={<Car size={20} />}>
                            <MenuItem
                                component={<Link to="/allocate-parking" />}
                                active={location.pathname === '/allocate-parking'}
                            >
                                Allocate Parking
                            </MenuItem>
                            <MenuItem
                                component={<Link to="/view-parking" />}
                                active={location.pathname === '/view-parking'}
                            >
                                View Parking Details
                            </MenuItem>
                        </SubMenu>

                    </Menu>
                </div>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-700">
                    <button
                        onClick={() => {
                            localStorage.removeItem("society_name");
                            localStorage.removeItem("flat_id");
                            localStorage.removeItem("token");
                            localStorage.removeItem("society_id");
                            navigate("/login");
                            toast.success("User logout successfully");
                        }}
                        className="w-full py-2 px-4 bg-red-400 hover:bg-red-500 rounded-lg text-center text-white"
                    >
                        Logout
                    </button>
                </div>
            </Sidebar>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Your content here */}
            </div>
        </div>
    );
}
