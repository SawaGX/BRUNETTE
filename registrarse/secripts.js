document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    
    if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    alert('Registro exitoso');
});
