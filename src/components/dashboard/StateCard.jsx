const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between hover:border-blue-500 transition">

      {/* Left Content */}
      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <h2 className="text-2xl font-bold text-white mt-1">{value}</h2>
      </div>

      {/* Icon */}
      <div className={`text-3xl ${color}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;