import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Register from './pages/Register';
import Students from './pages/Students';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/register" element={<Register />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export default App;
