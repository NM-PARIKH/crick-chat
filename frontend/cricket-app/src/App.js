import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import UserScreen from './screen/UserScreen';
import DoChat from "./components/Chat/DoChat";
import ScoreScreen from "./screen/ScoreScreen";
import MainScreen from "./screen/MainScreen";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/main" element={<MainScreen/>}/>
        <Route path="/chat" element={<DoChat/>}/>
        <Route path="/error" element={<ErrorScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
