import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/Layout';
import Grounding from './pages/Grounding';


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grounding" element={<Grounding />} />
      </Routes>
    </Layout>
  );
}