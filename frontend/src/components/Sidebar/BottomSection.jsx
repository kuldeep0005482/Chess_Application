import { Settings, HelpCircle } from "lucide-react";
import BlueButton from "../Buttons/BlueButton";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();
  const onClickMenuItem = (item) => {
    navigate('/game');
  }

  return (
    <div className="flex flex-col gap-4 py-4">

      {/* Play Button */}
        <BlueButton label="Play Now" fullWidth onClick={onClickMenuItem.bind(null, "Play Now")} />

      {/* Settings */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-white">
        <Settings size={18} />
        <span>Settings</span>
      </div>

      {/* Support */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-white">
        <HelpCircle size={18} />
        <span>Support</span>
      </div>

    </div>
  );
};

export default BottomSection;