import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Mail, Lock, User, ArrowRight } from "lucide-react";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import axiosInstance from "../api/axios.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const {setIsLoggedIn, getUserData} = useContext(AppContext);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!form.name || !form.email || !form.password) {
        setError("Fill in every field to create your account.");
        return;
      }
      if (form.password !== form.confirm) {
        setError("Passwords don't match.");
        return;
      }
      const { data } = await axiosInstance.post(
        "/api/auth/register",
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      if (data.success) {
        setIsLoggedIn(true);
        getUserData()
        navigate('/');
      }
      
        setError(data.message);
      
      // Hook up to a real auth API here.
    } catch (error) {
       setError(
    error.response?.data?.message || "Something went wrong"
  );
      
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-body text-ink">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass w-full max-w-[420px] p-7"
      >
        <div className="flex flex-col items-center gap-3 mb-7">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-purple to-blue">
            <Crown size={24} strokeWidth={2.25} />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide">
            CHESS<span className="logo-accent">ENGINE</span>
          </span>
          <div className="text-center">
            <h1 className="font-display text-xl font-semibold mb-1">Create your account</h1>
            <p className="text-dim text-[13.5px]">Join the board. Start climbing the ranks.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
          <Input
            label="Username"
            icon={User}
            name="name"
            placeholder="GrandmasterArjun"
            value={form.name}
            onChange={onChange}
            autoComplete="username"
          />
          <Input
            label="Email"
            icon={Mail}
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
          />
          <Input
            label="Password"
            icon={Lock}
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={onChange}
            autoComplete="new-password"
          />
          <Input
            label="Confirm Password"
            icon={Lock}
            type="password"
            name="confirm"
            placeholder="••••••••"
            value={form.confirm}
            onChange={onChange}
            autoComplete="new-password"
          />

          {error && <p className="text-loss text-xs -mt-1">{error}</p>}

          <Button type="submit" className="mt-1.5">
            Create Account <ArrowRight size={16} />
          </Button>
        </form>

        <p className="text-center text-[13px] text-dim mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple font-semibold hover:text-blue transition-colors">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
