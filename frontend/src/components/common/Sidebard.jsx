import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "users", label: "Usuarios", icon: "👥" },
    { id: "products", label: "Productos", icon: "📦" },
    { id: "orders", label: "Pedidos", icon: "🛒" },
    { id: "settings", label: "Configuración", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-gray-50 min-h-screen border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Menú</h2>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeItem === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveItem(item.id)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}
