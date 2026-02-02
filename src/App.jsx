import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { WindowProvider } from './contexts/WindowContext';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <WindowProvider>
          <Layout />
          {/* Routes kept for URL synchronization */}
          <Routes>
            <Route path="/" element={null} />
            <Route path="/about" element={null} />
            <Route path="/about-site" element={null} />
            <Route path="/projects" element={null} />
          </Routes>
        </WindowProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
