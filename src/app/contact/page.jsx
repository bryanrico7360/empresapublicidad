export default function Contacto() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Contáctanos
        </h1>
        <p className="mt-4 text-center text-gray-700">
          Estamos listos para ayudarte a impulsar tu marca en Villavicencio y
          toda la región del Meta. Déjanos un mensaje y te responderemos pronto.
        </p>

        {/* Formulario */}
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-400 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-400 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-3 border border-gray-400 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border border-gray-400 bg-gray-100 text-black rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>

        {/* Información de contacto destacada */}
        <div className="mt-10 border border-gray-300 bg-gray-50 rounded-lg p-6 text-black text-center space-y-4 shadow-sm">
          <p>
            <span className="font-semibold">Teléfono:</span> +57 320 123 4567
          </p>
          <p>
            <span className="font-semibold">Dirección:</span> Calle 25 # 15-30, Villavicencio - Meta
          </p>
          <p>
            <span className="font-semibold">Correo:</span> contacto@publimeta.com
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
