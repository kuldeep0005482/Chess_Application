import React from 'react';

function MenuCard({ icon, title, subtitle, fullWidth, onClick }) {
  return (
    <div
      className={`
        ${fullWidth ? 'col-span-2' : ''}
        bg-[#1b263b] hover:bg-[#24344d]
        transition duration-200
        rounded-xl p-4 flex items-center gap-4 cursor-pointer
      `}
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>

      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default MenuCard;