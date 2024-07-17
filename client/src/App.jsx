import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBar />
        <Outlet />
        <div id="hiddenDiv"> </div>
      </main>
    </UserProvider>
  );
}

export default App;
