import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to the Shop Template!</h1>
      </header>
      <main className="app-main">
        <p>This is a basic React application template.</p>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
