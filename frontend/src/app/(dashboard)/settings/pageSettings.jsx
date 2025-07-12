import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Configuración</h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">
            Preferencias del Usuario
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tema</label>
              <select className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
                <option value="system">Sistema</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <Button>Guardar Cambios</Button>
              <Button variant="outline">Cancelar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
