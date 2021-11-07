import { Routes, Route } from 'react-router-dom';
import { HomePage, RegistrationPage, LoginPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
