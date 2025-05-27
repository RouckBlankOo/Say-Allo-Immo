import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple demo authentication
    // In a real app, you would validate against a server
    setTimeout(() => {
      if (email === "admin@sayalloimmo.com" && password === "admin123") {
        // Store token in localStorage
        localStorage.setItem("admin_token", "demo_token_12345");
        navigate("/admin");
      } else {
        setError("Email ou mot de passe incorrect");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-xl inline-flex">
                <Building className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-2xl font-bold">SayAllo Immo</h1>
            <p className="text-red-100">Panneau d'administration</p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Connexion Admin
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="admin@sayalloimmo.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="••••••••"
                  />
                </div>
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Connexion en cours...
                  </div>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo: admin@sayalloimmo.com / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
