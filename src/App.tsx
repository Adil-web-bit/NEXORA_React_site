/**
 * Main Application Entry Point
 * Sets up React Router and Theme Provider
 */

import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
