import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./providers";
import { HomePage, LoginPage, MapPage } from "./pages";
import {Navbar} from "./components";
import RegisterPage from "./pages/RegisterPage";

const AppContent = () => {
  return (
    <>
      <Navbar
        isLoggedIn={false}
        onLogout={function (): void {
          throw new Error("Function not implemented.");
        } } isSuperAdmin={false}      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peta" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
