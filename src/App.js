import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chatroom from "./components/pages/Chatroom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Sidebar from "./components/Sidebar";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Routes>
              <Route path="/rooms/:roomId" element={<Chatroom />}></Route>

              <Route path="/" element={<Chatroom />}></Route>

              <Route path="/rooms/" element={<Chatroom />}></Route>
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
