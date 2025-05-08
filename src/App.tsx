import Aside from "./components/aside/Aside";
import Dashboard from "./components/dashboard/Dashboard";
import Manager from "./components/manager/Manager";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex h-full">
        <Aside />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
