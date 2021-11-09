import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage, RegistrationPage, LoginPage} from './pages';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
    </Router>
  );
}

export default App;
