import { motion } from "framer-motion";
import { User, Mail, Lock, Bell, Palette } from "lucide-react";
import Layout from "../components/Layout.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import Avatar from "../components/Avatar.jsx";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

function Toggle({ defaultChecked }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-10 h-[22px] rounded-full bg-white/10 peer-checked:bg-purple transition-colors duration-200 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-[18px] after:h-[18px] after:rounded-full after:bg-white after:transition-all after:duration-200 peer-checked:after:translate-x-[18px]" />
    </label>
  );
}

export default function Settings() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl flex flex-col gap-5">
        <div className="px-1">
          <h1 className="font-display font-semibold text-[clamp(26px,3vw,34px)] mb-1">Settings</h1>
          <p className="text-dim text-[14.5px]">Manage your profile and preferences.</p>
        </div>

        <div className="glass p-5">
          <div className="flex items-center gap-3.5 mb-5">
            <Avatar initials="AK" size={56} ring />
            <div>
              <h3 className="text-[15px] font-bold">Arjun Kade</h3>
              <p className="text-xs text-dim">2156 ELO &middot; Member since 2023</p>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <Input label="Display Name" icon={User} defaultValue="Arjun Kade" />
            <Input label="Email" icon={Mail} type="email" defaultValue="arjun@example.com" />
            <Input label="New Password" icon={Lock} type="password" placeholder="Leave blank to keep current" />
            <Button className="self-start px-6">Save Changes</Button>
          </div>
        </div>

        <div className="glass p-5">
          <h3 className="font-display text-[15px] font-semibold mb-4 flex items-center gap-2">
            <Bell size={16} className="text-purple" /> Notifications
          </h3>
          <div className="flex flex-col gap-3.5">
            {[
              ["Game invites", true],
              ["Tournament reminders", true],
              ["Friend requests", false],
              ["Marketing emails", false],
            ].map(([label, checked]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[13.5px]">{label}</span>
                <Toggle defaultChecked={checked} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-5">
          <h3 className="font-display text-[15px] font-semibold mb-4 flex items-center gap-2">
            <Palette size={16} className="text-purple" /> Board Theme
          </h3>
          <div className="flex gap-3">
            {["#1b2c50", "#2b1c10", "#143018", "#301430"].map((color) => (
              <button
                key={color}
                className="w-10 h-10 rounded-lg border-2 border-white/10 hover:border-purple transition-colors"
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
