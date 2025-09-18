import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold">Publimeta S.A.S</h1>
        <p className="mt-4 text-xl font-medium">
          Soluciones de publicidad en Villavicencio y el Meta
        </p>
      </section>

      {/* Descripción */}
      <section className="p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">¿Quiénes somos?</h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Somos expertos en publicidad digital y tradicional. Nuestro objetivo
          es ayudarte a destacar en el mercado de Villavicencio y llegar más
          lejos con tu marca.
        </p>
      </section>

      {/* Servicios */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Servicios Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <ServiceCard
            title="Publicidad Digital"
            description="Campañas en redes sociales y marketing de contenidos."
            image= "/images/publicidad.jpg"
          />
          <ServiceCard
            title="Vallas Publicitarias"
            description="Ubicaciones estratégicas en Villavicencio y el Meta."
            image= "/images/valla.jpg"
          />
          <ServiceCard
            title="Diseño Gráfico"
            description="Creatividad visual para que tu marca destaque."
            image="/images/diseño.jpg"
          />
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Testimonios
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6">
          <Testimonial
            text="Gracias a Publimeta, nuestra empresa ganó más visibilidad en Villavicencio."
            author="SalchiMax"
          />
          <Testimonial
            text="Un servicio profesional y muy creativo, los recomiendo al 100%."
            author="AutoCenter"
          />
          <Testimonial
            text="Gracias a este increible equipo pude llegar a miles de personas."
            author="BikesOne"
          />
          <Testimonial
            text="Ahora vendo mas de 100 productos al dia, es increible."
            author="BurgerMania"
          />
        </div>
      </section>
    </main>
  );
}
