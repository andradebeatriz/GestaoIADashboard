import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Dashboard />
            <Users />
            <Chatbot />
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; 2024 Gestão Empresarial. Todos os direitos reservados.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;