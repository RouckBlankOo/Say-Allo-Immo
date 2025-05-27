import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building,
  LogOut,
  Menu,
  X,
  Plus,
  Home,
  Grid,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      // For demo purposes, we'll use localStorage
      const token = localStorage.getItem("admin_token");

      if (token) {
        setIsAuthenticated(true);
      } else {
        navigate("/admin/login");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // This will redirect to login page through the useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out w-64 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-500 to-red-700 p-2 rounded-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">SayAllo Admin</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="py-6 px-3">
          <ul className="space-y-1">
            <li>
              <a
                href="/admin"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-md transition-colors group"
              >
                <Grid className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-400" />
                <span>Tableau de bord</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/properties"
                className="flex items-center px-4 py-3 bg-gray-800 text-white rounded-md transition-colors group"
              >
                <Building className="h-5 w-5 mr-3 text-red-400" />
                <span>Propriétés</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/properties/new"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-md transition-colors group"
              >
                <Plus className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-400" />
                <span>Ajouter une propriété</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-md transition-colors group"
              >
                <Home className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-400" />
                <span>Voir le site</span>
              </a>
            </li>
          </ul>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <ul className="space-y-1">
              <li>
                <a
                  href="/admin/settings"
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-md transition-colors group"
                >
                  <Settings className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-400" />
                  <span>Paramètres</span>
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-md transition-colors group"
                >
                  <LogOut className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-400" />
                  <span>Déconnexion</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        {/* Top navbar */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-4 text-gray-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center ml-auto">
            <div className="mr-4 text-sm text-gray-600">Admin</div>
            <div className="h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
