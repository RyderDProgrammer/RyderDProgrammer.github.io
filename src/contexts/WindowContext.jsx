import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WindowContext = createContext();

export function useWindows() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindows must be used within WindowProvider');
  }
  return context;
}

// Map routes to window titles
const ROUTE_TITLES = {
  '/': 'Home',
  '/about': 'About Me',
  '/about-site': 'About the Site',
  '/projects': 'Projects',
};

export function WindowProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  const [windows, setWindows] = useState(() => {
    // Try to restore from sessionStorage
    const saved = sessionStorage.getItem('windows');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [activeWindowId, setActiveWindowId] = useState(() => {
    const saved = sessionStorage.getItem('activeWindowId');
    return saved || null;
  });

  const [nextZIndex, setNextZIndex] = useState(100);

  // Save to sessionStorage whenever state changes
  useEffect(() => {
    if (initialized) {
      sessionStorage.setItem('windows', JSON.stringify(windows));
    }
  }, [windows, initialized]);

  useEffect(() => {
    if (activeWindowId && initialized) {
      sessionStorage.setItem('activeWindowId', activeWindowId);
    }
  }, [activeWindowId, initialized]);

  const openWindow = useCallback((route, title) => {
    setWindows(prev => {
      // Check if window already exists for this route
      const existingWindow = prev.find(w => w.route === route);

      if (existingWindow) {
        // Activate existing window and bring to front
        setActiveWindowId(existingWindow.id);
        setNextZIndex(z => z + 1);
        navigate(route);
        return prev.map(w => w.id === existingWindow.id ? { ...w, zIndex: nextZIndex } : w);
      } else {
        // Create new window
        const newWindow = {
          id: `${route}-${Date.now()}`,
          route,
          title: title || ROUTE_TITLES[route] || 'Window',
          zIndex: nextZIndex,
        };

        setActiveWindowId(newWindow.id);
        setNextZIndex(z => z + 1);
        navigate(route);
        return [...prev, newWindow];
      }
    });
  }, [nextZIndex, navigate]);

  // Open initial window based on current route (skip Home — it's always the desktop)
  useEffect(() => {
    if (!initialized) {
      const route = location.pathname;
      if (route !== '/' && windows.length === 0) {
        const title = ROUTE_TITLES[route] || 'Window';
        openWindow(route, title);
      }
      setInitialized(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows(prev => {
      const filtered = prev.filter(w => w.id !== id);

      // If we closed the active window, activate the next one
      if (id === activeWindowId) {
        if (filtered.length > 0) {
          // Activate window with highest zIndex
          const nextWindow = filtered.reduce((max, w) =>
            w.zIndex > max.zIndex ? w : max
          );
          setActiveWindowId(nextWindow.id);
          navigate(nextWindow.route);
        } else {
          // No windows left, return to desktop
          setActiveWindowId(null);
          navigate('/');
        }
      }

      return filtered;
    });
  }, [activeWindowId, navigate, openWindow]);

  const activateWindow = useCallback((id) => {
    // Bring window to front by updating its zIndex
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, zIndex: nextZIndex };
      }
      return w;
    }));

    setActiveWindowId(id);
    setNextZIndex(prev => prev + 1);

    // Update URL
    const window = windows.find(w => w.id === id);
    if (window) {
      navigate(window.route);
    }
  }, [windows, nextZIndex, navigate]);

  const value = {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    activateWindow,
  };

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
}
