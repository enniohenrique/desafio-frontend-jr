import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Personagens } from './pages/Personagens';
import { Filmes } from './pages/Filmes';
import { HQs } from './pages/HQs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/hqs" element={<HQs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
