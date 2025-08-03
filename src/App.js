import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Register from './pages/Register';
import Students from './pages/Students';
import ManageSubjects from './pages/ManageSubjects';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId/subjects" element={<ManageSubjects />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
