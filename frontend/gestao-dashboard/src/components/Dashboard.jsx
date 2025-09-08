import React from 'react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-4">📊 Dashboard</h2>
          
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h6 className="card-title">Total de Usuários</h6>
                  <h3 className="card-text">15</h3>
                  <small>+5 desde a última semana</small>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h6 className="card-title">Vendas</h6>
                  <h3 className="card-text">R$ 12,5K</h3>
                  <small>+12% desde o mês passado</small>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="card bg-info text-white">
                <div className="card-body">
                  <h6 className="card-title">Taxa de Conversão</h6>
                  <h3 className="card-text">24.8%</h3>
                  <small>+2.4% desde ontem</small>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <h6 className="card-title">Clientes Satisfeitos</h6>
                  <h3 className="card-text">89%</h3>
                  <small>+8% desde a última pesquisa</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info mt-4">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <span style={{fontSize: '2rem'}}>📈</span>
              </div>
              <div className="flex-grow-1">
                <h5 className="alert-heading mb-2">Gráficos em Breve</h5>
                <p className="mb-0">Em breve integraremos gráficos interativos para melhor visualização dos dados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;