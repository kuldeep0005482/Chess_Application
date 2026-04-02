import MenuItem from "./MenuItem";
import { Gamepad2, MessageSquare, Trophy, Users, BarChart } from "lucide-react";

const MenuList = () => {
  return (
    <div className="flex flex-col gap-2">
      <MenuItem icon={<Gamepad2 size={18} />} label="Play" active />
      <MenuItem icon={<MessageSquare size={18} />} label="Lobby" />
      <MenuItem icon={<Trophy size={18} />} label="Tournaments" />
      <MenuItem icon={<Users size={18} />} label="Players" />
      <MenuItem icon={<BarChart size={18} />} label="Stats" />
    </div>
  );
};

export default MenuList;