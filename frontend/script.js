async function carregarUsuarios() {
  try {
    const response = await fetch("http://localhost:3001/usuarios");
    const usuarios = await response.json();

    const tbody = document.querySelector("#usuarios tbody");
    tbody.innerHTML = "";

    usuarios.forEach(u => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${u.id}</td>
        <td>${u.nome}</td>
        <td>${u.email}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
  }
}

carregarUsuarios();
