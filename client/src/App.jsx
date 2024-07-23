import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </UserProvider>
  );
}

export default App;
