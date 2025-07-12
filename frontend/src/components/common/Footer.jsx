export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi Aplicación</h3>
            <p className="text-gray-300">
              Una aplicación moderna construida con Next.js y React.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300">
              Email: contacto@miapp.com
              <br />
              Teléfono: +54 123 456 7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
