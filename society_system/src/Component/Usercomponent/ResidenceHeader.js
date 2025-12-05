import { MenuIcon } from 'lucide-react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ResidenceHeader() {
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
                width="280px"
                backgroundColor="#1e293b"
                rootStyles={{
                    color: "white",
                    border: "none",
                }}
                className="shadow-xl"
            >
                <div className="p-4 border-b border-gray-700">
                    <h2 className="text-xl font-bold text-white">Residence Panel</h2>
                </div>

                <div className="p-4">
                    <Menu menuItemStyles={menuItemStyles}>

                        <MenuItem
                            component={<Link to="/managevisitor" />}
                            active={location.pathname === '/managevisitor'}
                        >
                            Manage Visitor
                        </MenuItem>

                    </Menu>
                </div>

                <div className="p-4 border-t border-gray-700">
                    <button
                        onClick={() => {
                            localStorage.clear();
                            toast.success("User logout successfully");
                            navigate("/login");
                        }}
                        className="w-full py-2 px-4 bg-red-400 hover:bg-red-500 rounded-lg text-center text-white"
                    >
                        Logout
                    </button>
                </div>
            </Sidebar>

            {/* Main content area */}
            <div className="flex-1 p-6">
                {/* Your main content goes here */}
            </div>
        </div>
    );
}
