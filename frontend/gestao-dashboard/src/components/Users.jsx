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
    return <div className="text-center my-4">Carregando usuários...</div>;
  }

  return (
    <section id="usuarios" className="my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Usuários</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;