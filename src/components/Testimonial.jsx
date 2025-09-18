export default function Testimonial({ text, author }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition">
      <p className="text-gray-800 italic">"{text}"</p>
      <p className="mt-3 font-semibold text-gray-600">- {author}</p>
    </div>
  );
}
