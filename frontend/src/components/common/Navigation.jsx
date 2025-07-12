import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Mi App</h2>
          </div>

          <div className="hidden md:flex space-x-4">
            <Button variant="ghost">Inicio</Button>
            <Button variant="ghost">Productos</Button>
            <Button variant="ghost">Contacto</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                Inicio
              </Button>
              <Button variant="ghost" className="justify-start">
                Productos
              </Button>
              <Button variant="ghost" className="justify-start">
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
