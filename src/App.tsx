import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <BrowserRouter basename="/sophie-ischenko">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}