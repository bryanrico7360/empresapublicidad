// src/app/about/page.jsx

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h1>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Publimeta S.A.S nació en Villavicencio con el propósito de ofrecer soluciones 
          innovadoras en publicidad digital y tradicional. Con años de experiencia en el sector, 
          nos hemos consolidado como un aliado estratégico para las marcas de la región del Meta.
        </p>

        {/* Imagen del equipo */}
        <img src="/images/equipo.jpg" alt="Nuestro equipo"
          className="mx-auto mt-8 rounded-xl shadow-lg w-full max-w-md"
        />
      </section>

      {/* Historia */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-blue-600">Nuestra Historia</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Desde nuestros inicios en Villavicencio, hemos acompañado a pequeñas, medianas 
          y grandes empresas en la construcción de su presencia publicitaria. Nuestra 
          trayectoria refleja compromiso, creatividad e innovación constante.
        </p>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-blue-600">Misión</h3>
          <p className="mt-3 text-gray-700">
            Impulsar el crecimiento de nuestros clientes a través de estrategias publicitarias 
            innovadoras que generen impacto y valor en el mercado de Villavicencio.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-blue-600">Visión</h3>
          <p className="mt-3 text-gray-700">
            Ser reconocidos como la agencia líder en publicidad en los Llanos Orientales, 
            destacándonos por nuestra creatividad, profesionalismo y resultados comprobados.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-blue-600">Valores</h3>
          <ul className="mt-3 text-gray-700 space-y-2 text-left list-disc list-inside">
            <li>Compromiso con cada proyecto</li>
            <li>Creatividad e innovación</li>
            <li>Transparencia en el servicio</li>
            <li>Pasión por la publicidad</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
