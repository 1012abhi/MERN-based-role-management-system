export default function Card({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

