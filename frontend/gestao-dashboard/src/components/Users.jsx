import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="usuarios" className="my-4">
        <div className="card">
          <div className="card-header">
            <h2>👥 Usuários</h2>
          </div>
          <div className="card-body text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p className="mt-3">Carregando usuários...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="usuarios" className="my-4">
      <div className="card">
        <div className="card-header">
          <h2>👥 Usuários</h2>
        </div>
        <div className="card-body">
          <div className="table-container">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td><strong>#{user.id}</strong></td>
                      <td>{user.nome}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className="badge bg-success">Ativo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;