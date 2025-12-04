import { Bell, Car, LayoutDashboard, MenuIcon, Shield, User, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function SecurityHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // Check if device is mobile
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setToggle(true); // Always show sidebar on desktop
            } else {
                setToggle(false); // Hide sidebar on mobile by default
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setToggle(false);
        }
    };

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

    const subMenuStyles = {
        color: "white",
        backgroundcolor: "bg-gray-700"
    }

    return (
        <div className="flex">
            {/* Mobile Header */}
            <div className={`fixed top-0 left-0 right-0 bg-[#1e293b] text-white p-4 z-50 flex items-center justify-between md:hidden shadow-lg`}>
                <h1 className="text-xl font-bold">Dashboard</h1>
                <button
                    onClick={handleToggle}
                    className="p-2 rounded-lg hover:bg-[#334155] transition-colors"
                >
                    {toggle ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Overlay for mobile */}
            {toggle && isMobile && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:static h-screen z-50 transition-transform duration-300 ease-in-out
                ${toggle ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <Sidebar
                    collapsed={collapsed}
                    width="280px"
                    collapsedWidth="80px"
                    className="h-full shadow-xl"
                    backgroundColor="#1e293b"
                    rootStyles={{
                        color: "white",
                        border: "none",
                    }}
                >
                    {/* Header */}
                    <div className="p-4 border-b border-gray-700 hidden md:block">
                        <div className="flex items-center justify-between">
                            {!collapsed && (
                                <h2 className="text-xl font-bold text-white">Staff Panel</h2>
                            )}
                            <button
                                onClick={() => setCollapsed(!collapsed)}
                                className="p-2 rounded-lg hover:bg-[#334155] transition-colors hidden md:block"
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
                                component={<Link to="/staffdashboard" onClick={closeSidebar} />}
                                active={location.pathname === '/staffdashboard'}
                            >
                                Dashboard
                            </MenuItem>

                            <MenuItem
                                icon={<User size={20} />}
                                component={<Link to="/view-member" onClick={closeSidebar} />}
                                active={location.pathname === '/view-member'}
                            >
                                View member
                            </MenuItem>

                            <SubMenu
                                label="Visitor"
                                icon={<User size={20} />}
                                defaultOpen={location.pathname.includes('/staff')}
                            >
                                <MenuItem
                                    className={`${subMenuStyles.color, subMenuStyles.backgroundcolor}`}
                                    component={<Link to="/add-visitor" onClick={closeSidebar} />}
                                    active={location.pathname === '/add-visitor'}
                                >
                                    Add visitor
                                </MenuItem>
                                <MenuItem
                                    className={`${subMenuStyles.color, subMenuStyles.backgroundcolor}`}
                                    component={<Link to="/view-visitor" onClick={closeSidebar} />}
                                    active={location.pathname === '/view-visitor'}
                                >
                                    View visitor
                                </MenuItem>
                            </SubMenu>

                            <MenuItem
                                className={`${subMenuStyles.color, subMenuStyles.backgroundcolor}`}
                                component={<Link to="/viewparking" onClick={closeSidebar} />}
                                active={location.pathname === '/viewparking'}
                            >
                                View Parking Details
                            </MenuItem>


                           
                        </Menu>
                    </div>

                    {/* Mobile close area */}
                    <div className="p-4 border-t border-gray-700 md:hidden">
                        <button
                            onClick={closeSidebar}
                            className="w-full py-2 px-4 bg-[#334155] hover:bg-[#475569] rounded-lg transition-colors text-center"
                        >
                            Close Menu
                        </button>
                    </div>
                    <div className='w-full '>
                        <button onClick={() => {
                            localStorage.removeItem("society_name");
                            localStorage.removeItem("flat_id");
                            localStorage.removeItem("token");
                            localStorage.removeItem("society_id");
                            navigate("/security-login")
                            toast.success("User logout succesfully")
                        }} className='block bg-red-400 p-3 w-2/3 rounded m-[auto]'>Logout</button>
                    </div>
                </Sidebar>
            </div>

            {/* Main content area - with proper spacing for mobile header */}
            <div className={`
                flex-1 transition-all duration-300
                ${toggle && !isMobile ? 'md:ml-0' : 'md:ml-0'}
                mt-16 md:mt-0
            `}>
                {/* Your main content goes here */}
            </div>
        </div>
    )
}