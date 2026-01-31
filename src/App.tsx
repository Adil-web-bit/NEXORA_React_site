/**
 * Main Application Entry Point
 * Sets up React Router and Theme Provider
 */

import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
