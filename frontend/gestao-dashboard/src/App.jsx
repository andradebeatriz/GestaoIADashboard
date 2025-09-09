import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [dialogflowMessage, setDialogflowMessage] = useState('');

  useEffect(() => {
    // Chamando a API do backend
    fetch("http://localhost:5000/services/dialogflow")
      .then(res => res.json())
      .then(data => setDialogflowMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Dashboard />
            <Users />
            <Chatbot />
            <p>{dialogflowMessage}</p> {/* Mensagem do backend */}
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; 2025 Gestão Empresarial. Todos os direitos reservados.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
