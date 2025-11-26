import { Building } from 'lucide-react'
import React, { useState } from 'react'
import { FaBuilding, FaChevronDown, FaChevronUp, FaUserCog, FaBars, FaTimes, FaHome, FaCube, FaChartLine, FaCogs, FaSignOutAlt } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()

  const elements = [
    { 
      label: "Society", 
      icon: <FaBuilding className="text-blue-300" />, 
      dropdown: [
        { name: "Add Society", path: "/mainadmin/add-society", icon: "➕" },
        { name: "Manage Society", path: "/mainadmin/manage-society", icon: "⚙️" }
      ]
    },
    { 
      label: "Blocks", 
      icon: <FaCube className="text-green-300" />, 
      dropdown: [
        { name: "Add Blocks", path: "/mainadmin/add-block", icon: "➕" },
        { name: "Manage Blocks", path: "/mainadmin/manage-blocks", icon: "⚙️" }
      ]
    },
    {
      label : "Flats",
      icon : <Building className="text-green-300"></Building>,
      dropdown: [
        { name : "Add Flats" , path : "/mainadmin/add-flats",icon : "➕"},
        { name: "Manage Flats", path: "/mainadmin/manage-flats", icon: "⚙️" }
      ]
    }
  ]

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    navigate("/mainadmin/login");
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <article className={`fixed md:static top-0 left-0 z-40 transition-all duration-300 ease-in-out h-screen ${
        isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
      }`}>
        <header className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white h-full w-[320px] flex flex-col shadow-2xl">
          
          {/* Header Section */}
          <div className="p-6 text-center relative border-b border-blue-600/50">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaUserCog className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-blue-800 rounded-full"></div>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold">Super Admin</p>
                <p className="text-blue-200 text-sm">Administrator</p>
              </div>
            </div>
            
            {/* Close button for mobile */}
            <button 
              className="md:hidden absolute top-4 right-4 text-white hover:bg-blue-600/50 p-2 rounded-xl transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaTimes size={16} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
            <nav className="space-y-1">
              {elements.map((e, index) => (
                <div key={index} className="px-2 py-1">
                  {/* Parent item */}
                  {e.path ? (
                    // Single link item
                    <Link
                      to={e.path}
                      className={`flex items-center p-3 rounded-xl transition-all duration-300 group ${
                        isActiveLink(e.path) 
                          ? 'bg-white/20 shadow-lg transform scale-105' 
                          : 'hover:bg-white/10 hover:translate-x-2'
                      }`}
                      onClick={handleLinkClick}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className={`p-2 rounded-lg transition-colors ${
                        isActiveLink(e.path) ? 'bg-white/30' : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        {e.icon}
                      </div>
                      <span className="ml-3 font-medium text-white/90">{e.label}</span>
                      {hoveredItem === index && (
                        <div className="ml-auto w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  ) : (
                    // Dropdown item
                    <div>
                      <div 
                        className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                          openIndex === index ? 'bg-white/15' : 'hover:bg-white/10'
                        }`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className={`p-2 rounded-lg transition-colors ${
                          openIndex === index ? 'bg-white/30' : 'bg-white/10 group-hover:bg-white/20'
                        }`}>
                          {e.icon}
                        </div>
                        <span className="ml-3 font-medium text-white/90">{e.label}</span>
                        <div className={`ml-auto transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180 text-blue-300' : 'text-white/60'
                        }`}>
                          <FaChevronDown size={12} />
                        </div>
                      </div>

                      {/* Dropdown Content */}
                      <div
                        className={`transition-all duration-500 ease-out overflow-hidden ${
                          openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-8 pl-4 border-l-2 border-blue-400/30 mt-2 space-y-2">
                          {e.dropdown.map((item, idx) => (
                            <Link 
                              key={idx}
                              className={`flex items-center p-2 rounded-lg transition-all duration-300 group hover:translate-x-1 ${
                                isActiveLink(item.path) 
                                  ? 'bg-blue-500/30 text-white font-semibold shadow-md' 
                                  : 'text-white/80 hover:bg-white/10'
                              }`}
                              to={item.path}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleLinkClick()
                              }}
                            >
                              <span className="text-sm mr-3">{item.icon}</span>
                              <span className="text-sm">{item.name}</span>
                              <div className={`ml-auto w-1.5 h-1.5 rounded-full transition-all ${
                                isActiveLink(item.path) ? 'bg-blue-300 scale-100' : 'bg-blue-400/50 scale-0 group-hover:scale-100'
                              }`}></div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Footer Section */}
          <div className="p-6 border-t border-blue-600/50">
            <div className="bg-blue-600/30 rounded-xl p-4 text-center mb-4">
              <p className="text-blue-200 text-sm font-medium">Need help?</p>
              <p className="text-blue-300 text-xs">Contact support</p>
            </div>
            
            <button onClick={logout} className="flex items-center justify-center w-full p-3 text-white/80 hover:text-white rounded-xl hover:bg-red-500/20 transition-all duration-300 group">
              <FaSignOutAlt className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Logout</span>
            </button>
            
            {/* Mobile hint */}
            <div className="text-center text-blue-300/60 text-xs mt-4 md:hidden">
              👈 Swipe to close
            </div>
          </div>
        </header>
      </article>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  )
}