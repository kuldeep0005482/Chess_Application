const MenuItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition 
        ${active ? "bg-[#1e293b] text-white border-r-2 border-indigo-400" : "hover:bg-[#1e293b]"}
      `}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default MenuItem;