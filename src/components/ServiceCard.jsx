export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="mx-auto mb-6 w-48 h-36 object-cover rounded-lg"
        />
      )}
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="mt-3 text-gray-700">{description}</p>
    </div>
  );
}
