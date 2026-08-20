import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SettingsForm from "./SettingsForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Preferences from "./pages/Preferences";
import Notifications from "./pages/Notifications";
import Security from "./pages/Security";
import Health from "./pages/Health";
import Playground from "../playground/Playground";
import AIChat from "./components/AIChat";

function Layout() {
  return (
    <div>
      <nav className="app-nav">
        <div className="nav-brand">Settings App</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/preferences">Preferences</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/security">Security</Link>
          <Link to="/health">Health</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/chat">AI Chat</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<SettingsForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/security" element={<Security />} />
          <Route path="/health" element={<Health />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/chat" element={<AIChat />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

