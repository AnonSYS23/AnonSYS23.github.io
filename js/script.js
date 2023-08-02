document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-group");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener los valores ingresados por el usuario
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const message = form.querySelector('textarea[name="message"]').value;

      // Validar si los campos están vacíos
      if (!name || !email || !message) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Guardar los datos en el localStorage
      const userData = {
        name: name,
        email: email,
        message: message,
      };
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      // Limpiar el formulario después de enviar los datos
      form.reset();

      // Mostrar mensaje de confirmación
      alert("Mensaje enviado correctamente. Gracias por contactarnos!");
    });
  });