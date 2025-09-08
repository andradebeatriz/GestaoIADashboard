import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#dashboard">Gestão Empresarial</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#usuarios">Usuários</a></li>
            <li className="nav-item"><a className="nav-link" href="#chatbot">Chatbot</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;