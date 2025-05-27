import AdminLayout from "@/components/layouts/AdminLayout";
import {
  Building,
  Users,
  Eye,
  DollarSign,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord</h1>
        <p className="text-gray-600">
          Bienvenue dans votre panneau d'administration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 hover:shadow-md transition-all border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Propriétés</p>
              <h3 className="text-2xl font-bold text-gray-800">24</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Building className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-all border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">À Vendre</p>
              <h3 className="text-2xl font-bold text-gray-800">16</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-all border-l-4 border-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">À Louer</p>
              <h3 className="text-2xl font-bold text-gray-800">8</h3>
            </div>
            <div className="p-3 bg-amber-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-all border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Visiteurs</p>
              <h3 className="text-2xl font-bold text-gray-800">1,254</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Eye className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-2 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Propriétés Récentes</h3>
            <a
              href="/admin/properties"
              className="text-sm text-red-600 hover:underline flex items-center"
            >
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Titre
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Villa sur Hollywood Boulevard
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      Villa
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      740 000€
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                        À Vendre
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Restaurant de Cuisine
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      Commerce
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      2 600€
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                        À Louer
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Villa sur Grand Avenue
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      Villa
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      4 750€
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                        À Louer
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">Contactez-nous</h3>
            <p className="text-sm text-gray-500">Demandes récentes</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                S
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">Sarah Johnson</h4>
                <p className="text-sm text-gray-500 mb-1">
                  sarah.j@example.com
                </p>
                <p className="text-xs text-gray-400">Il y a 2 heures</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                M
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">Michael Chen</h4>
                <p className="text-sm text-gray-500 mb-1">mchen@example.com</p>
                <p className="text-xs text-gray-400">Il y a 5 heures</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                E
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">Emily Rodriguez</h4>
                <p className="text-sm text-gray-500 mb-1">
                  emily.r@example.com
                </p>
                <p className="text-xs text-gray-400">Il y a 1 jour</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
