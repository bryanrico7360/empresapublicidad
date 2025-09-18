import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Publimeta</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/about">Nosotros</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
