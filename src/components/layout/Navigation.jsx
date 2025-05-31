import React from "react";
import { Home, Film, Tv, Bookmark, User, LogOut } from "lucide-react";

const Navigation = ({ currentPage, setCurrentPage, onLogout, user }) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "movies", icon: Film, label: "Movies" },
    { id: "tv-series", icon: Tv, label: "TV Series" },
    { id: "bookmarks", icon: Bookmark, label: "Bookmarks" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-slate-800 p-4 flex flex-col items-center z-10">
      {/* Logo */}
      <div className="mb-8">
        <Film className="w-8 h-8 text-red-600" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col mb-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`p-3 rounded-lg mb-6 transition-colors ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      {/* User Section */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mb-4">
          <User size={16} className="text-white" />
        </div>
        <button
          onClick={onLogout}
          className="text-gray-400 hover:text-white transition-colors"
          title="Logout"
        >
          <LogOut size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
