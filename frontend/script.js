async function carregarUsuarios() {
  try {
    const response = await fetch("http://localhost:3001/usuarios");
    const usuarios = await response.json();

    const div = document.createElement("div");
    div.innerHTML = "<h3>Usuários no sistema:</h3>";

    usuarios.forEach(u => {
      const p = document.createElement("p");
      p.textContent = `${u.id} - ${u.nome} (${u.email})`;
      div.appendChild(p);
    });

    document.body.appendChild(div);
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
  }
}

carregarUsuarios();