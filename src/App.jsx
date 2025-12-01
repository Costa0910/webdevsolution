import { useState } from "react";
import { useIsMobile } from "./hooks/useBreakpoints";
import { Routes, Route, NavLink } from "react-router-dom";
import Lorem from "./pages/Lorem";
import UserPage from "./pages/UserPage";
import QuantumPage from "./pages/QuantumPage";
import MarcusPage from "./pages/MarcusPage";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const LinkClickedOnMobile = () => {
    if (!isMobile) return;
   setSidebarOpen(() => false);
  }

  return (
    <div className="app">
      <header>
        {isMobile && (
          <button className="hamburger-menu" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        <img src="/LOGO-WDR.svg" alt="Web dev logo" />
      </header>

      <div className="app-container">
        {/* Add overlay div for mobile */}
        {isMobile && isSidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}

        <aside
          className={`sidebar ${
            isMobile ? (isSidebarOpen ? "open" : "") : "open"
          }`}
        >
        <nav>
            <ul>
              <li onClick={LinkClickedOnMobile}>
                <NavLink to="/lorem" className={({ isActive }) => isActive ? "active" : ""}>
                  Lorem Ipsum
                </NavLink>
              </li>
              <li onClick={LinkClickedOnMobile}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  Utilizador
                </NavLink>
              </li>
              <li onClick={LinkClickedOnMobile}>
                <NavLink to="/quantum" className={({ isActive }) => isActive ? "active" : ""}>
                  Quantum solum
                </NavLink>
              </li>
              <li onClick={LinkClickedOnMobile}>
                <NavLink to="/marcus" className={({ isActive }) => isActive ? "active" : ""}>
                  Marcus Tremer
                </NavLink>
              </li>
            </ul>
          </nav>
          <footer className="footer">
            <p>
              <a href="https://premium-minds.com">2025® Premium-minds.com</a>
            </p>
          </footer>
        </aside>

        <main className="main-content">
          <Routes>
            <Route index element={<UserPage />} />
            <Route path="/lorem" element={<Lorem />} />
            <Route path="/quantum" element={<QuantumPage />} />
            <Route path="/marcus" element={<MarcusPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
