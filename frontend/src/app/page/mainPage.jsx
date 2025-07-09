import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navigation } from "@/components/common/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenido a Mi Aplicación
        </h1>

        <div className="flex justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir Panel</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Panel de Configuración</SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <p>Contenido del panel aquí...</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
}
