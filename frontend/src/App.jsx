import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Play from "./pages/Play.jsx";
import Lobby from "./pages/Lobby.jsx";
import Tournaments from "./pages/Tournaments.jsx";
import Players from "./pages/Players.jsx";
import Stats from "./pages/Stats.jsx";
import Settings from "./pages/Settings.jsx";
import Support from "./pages/Support.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./context/protectedRoute.jsx";
import Online from "./pages/Online.jsx";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/play" element={<ProtectedRoute><Play/></ProtectedRoute>} />
      <Route path="/lobby" element={<ProtectedRoute><Lobby/></ProtectedRoute>} />
      <Route path="/tournaments" element={<ProtectedRoute><Tournaments/></ProtectedRoute>} />
      <Route path="/players" element={<ProtectedRoute><Players/></ProtectedRoute>} />
      <Route path="/stats" element={<ProtectedRoute><Stats/></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute><Support/></ProtectedRoute>} />
      <Route path="/play/online" element={<ProtectedRoute><Online/></ProtectedRoute>} />
    
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
