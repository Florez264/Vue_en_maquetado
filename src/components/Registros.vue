<!-- eslint-disable vue/multi-word-component-names -->
<template>

<table class="table" id="tablaServidores">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Servidor</th>
        <th scope="col">Sistema Operativo</th>
        <th scope="col">Version</th>
        <th scope="col">IP</th>
        <th scope="col">Ambiente</th>
        <th scope="col">Accion</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tbodyServidores">
      <tr>

      </tr>
    </tbody>
  </table>

  <div style="margin: 10px;">
    <button type="button" id="btnAgregar" class="button" style="background-color: blue;">agregar</button>
  </div>

</template>

<script>
export default {
  mounted() {
    let contador = 1;

    // Agregar una nueva fila a la tabla
    const agregarFila = () => {
      const nuevaFila = document.createElement('tr');

      nuevaFila.innerHTML = `
        <th scope="row">${contador}</th>
        <td contenteditable="true">Nombre Servidor ${contador}</td>
        <td contenteditable="true">Sistema Operativo ${contador}</td>
        <td contenteditable="true">Versión ${contador}</td>
        <td contenteditable="true">IP ${contador}</td>
        <td contenteditable="true">Ambiente ${contador}</td>
        <td>
          <button class="button-primary btn-editar">Editar</button>
          <button class="button-danger btn-eliminar">Eliminar</button>
        </td>
        <td>
          <button class="button-success btn-guardar" sstyle="display: none; background-color: green; color: white;">Guardar</button>
        </td>
      `;

      const tbody = document.getElementById('tbodyServidores');
      tbody.appendChild(nuevaFila);

      contador++;
    };

    // Eliminar una fila de la tabla
    const eliminarFila = (fila) => {
      fila.remove();
    };
 
    // Editar una fila de la tabla
    const editarFila = (fila) => {
      const camposEditables = fila.querySelectorAll('td[contenteditable="true"]');

      // Desactivar la edición en otras filas para evitar conflictos
      const filasEditables = document.querySelectorAll('td[contenteditable="true"]');
      filasEditables.forEach((campo) => {
        campo.removeAttribute('contenteditable');
      });

      const botonesGuardar = document.querySelectorAll('.btn-guardar');
      botonesGuardar.forEach((boton) => {
        boton.style.display = 'none';
      });

      // Activar la edición en la fila seleccionada
      camposEditables.forEach((campo) => {
        campo.setAttribute('contenteditable', 'true');
      });

      // Mostrar el botón "Guardar" en la fila seleccionada
      const botonGuardar = fila.querySelector('.btn-guardar');
      botonGuardar.style.display = 'inline-block';
    };

    // Guardar los cambios de una fila de la tabla
    const guardarCambios = (fila) => {
      const camposEditables = fila.querySelectorAll('td[contenteditable="true"]');

      // Realizar la acción deseada con los valores editados
      camposEditables.forEach((campo) => {
        campo.removeAttribute('contenteditable');
      });

      const botonesGuardar = document.querySelectorAll('.btn-guardar');
      botonesGuardar.forEach((boton) => {
        boton.style.display = 'none';
      });

      // Aquí puedes capturar los nuevos valores y realizar la acción deseada, como guardar los datos en una estructura de datos o enviarlos a un servidor
      console.log('Valores editados:');
      camposEditables.forEach((campo) => {
        console.log(campo.textContent);
      });
    };

    // Evento para agregar una nueva fila cuando se hace clic en el botón "Agregar"
    const btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click', agregarFila);

    // Delegación de eventos para las acciones de editar y eliminar
    const tbodyServidores = document.getElementById('tbodyServidores');
    tbodyServidores.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('btn-eliminar')) {
        const fila = target.closest('tr');
        eliminarFila(fila);
      } else if (target.classList.contains('btn-editar')) {
        const fila = target.closest('tr');
        editarFila(fila);
      } else if (target.classList.contains('btn-guardar')) {
        const fila = target.closest('tr');
        guardarCambios(fila);
      }
    });
  }
};
</script>