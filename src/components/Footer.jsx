export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Publimeta S.A.S</span> - Villavicencio, Meta
        </p>
      </div>
    </footer>
  );
}
