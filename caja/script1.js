function showModal() {
  const now = new Date();
  const fecha = now.toLocaleDateString(); // Formato de fecha local
  const hora = now.toLocaleTimeString();  // Formato de hora local
  document.getElementById("fechaHora").textContent = `${fecha} ${hora}`;
  
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function redirectToPedidos() {
  window.location.href = "../pedidos/pedidos.html"; // Ajusta la ruta si es necesario
}

function logout() {
  window.location.href = "../index.html"; // Ajusta la ruta si es necesario
}