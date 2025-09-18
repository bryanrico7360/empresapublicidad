import ServiceCard from "@/components/ServiceCard";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Nuestros Servicios
        </h1>
        <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
          En Publimeta S.A.S ofrecemos soluciones integrales para dar visibilidad
          y fortalecer la presencia de tu marca en Villavicencio y toda la región.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <ServiceCard
            title="Publicidad Digital"
            description="Gestión de campañas en redes sociales, anuncios en Google Ads y estrategias de marketing digital que generan resultados medibles."
          />
          <ServiceCard
            title="Vallas Publicitarias"
            description="Disponemos de ubicaciones estratégicas en Villavicencio para garantizar que tu mensaje llegue a miles de personas diariamente."
          />
          <ServiceCard
            title="Diseño Gráfico"
            description="Diseños creativos y profesionales: logotipos, branding, flyers, catálogos y todo lo que tu marca necesite."
          />
          <ServiceCard
            title="Marketing de Contenidos"
            description="Creamos contenido atractivo y relevante para captar clientes potenciales y fidelizar a tu audiencia."
          />
          <ServiceCard
            title="Producción Audiovisual"
            description="Videos corporativos, spots publicitarios y material audiovisual de alta calidad para potenciar tu comunicación."
          />
          <ServiceCard
            title="Consultoría en Marketing"
            description="Asesoría personalizada para definir estrategias que lleven tu negocio al siguiente nivel."
          />
        </div>
      </section>
    </main>
  );
}
