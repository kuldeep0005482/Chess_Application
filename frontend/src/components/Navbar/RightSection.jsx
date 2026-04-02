import { Settings, Bell } from "lucide-react";

const RightSection = () => {
  return (
    <div className="flex items-center gap-4">
      
      {/* Icons */}
      <Settings className="text-gray-400 cursor-pointer hover:text-white" size={18} />
      <Bell className="text-gray-400 cursor-pointer hover:text-white" size={18} />

      {/* Sign In Button */}
      <button className="px-4 py-1.5 rounded-md bg-linear-to-r from-indigo-300 to-indigo-600 text-black text-sm font-medium">
        Sign In
      </button>

    </div>
  );
};

export default RightSection;