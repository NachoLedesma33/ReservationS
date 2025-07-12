import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Mi App</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Notificaciones
            </Button>
            <Button variant="ghost" size="sm">
              Perfil
            </Button>
            <Button size="sm">Salir</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
