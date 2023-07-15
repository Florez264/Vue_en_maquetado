<template>
  <div>
    <header>
      <input type="checkbox" id="menu-toggle">
      <label for="menu-toggle"><i class="fa-solid fa-bars fa-2xl"></i></label>
      <nav class="menu">
        <a @click="loadContent('tablero')">Tablero del sistema</a>
        <a @click="loadContent('monitor')">Monitor</a>
        <a @click="loadContent('registros')">Registro</a>
        <a @click="loadContent('datos')">Datos</a>
        <a @click="loadContent('ayuda')">Ayuda</a>
      </nav> 
    </header>
    
    <main>
      <div class="subTitle">
        <div class="divt" @click="toggleMenu">
          <i class="fa-solid fa-desktop fa-2xl" style="color: #00988d;"></i>
        </div>
        <div class="divt">
          <h1>Tablero del sistema</h1>
          <p class="subp">unicordoba-vsa</p>
        </div>
        <div class="divf"> <i class="fa-solid fa-table-cells fa-2xl"></i> </div>
      </div>
      
      <article>
        <component :is="currentComponent"></component>
      </article>
    </main>
    <br> <br> 
    <footer>
      <p>Derechos reservados © 2023</p>
    </footer>
  </div>
</template>

<script>
import Tablero from './components/tablero.vue';
import Monitor from './components/Monitor.vue';
import Registros from './components/Registros.vue';
//import Datos from './components/Datos.vue';
//import Ayuda from './components/Ayuda.vue';

export default {
  name: 'App',
  components: {
    Tablero,
    Monitor,
    Registros,
    //Datos,
    //Ayuda
  },
  data() {
    return {
      currentComponent: 'Tablero'
    };
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('show');
    },
    loadContent(component) {
      this.currentComponent = component;
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    color: #063940;
}

.subp {
    color: #2c6b74;
}

article {
    display: flex;
    margin-left: 15rem;
    margin-bottom: 4.25rem;
}

section {
    display: inline-block;
    margin: 2rem;
}

footer {
    padding: 1rem;
    text-align: center;
    position: fixed;
    background-color: #063940;
    color: #fef5c8;
    bottom: 0;
    width: 100%;
}

h2,
h1,
p,
h3,
h4 {
    margin: 0%;
}

ul {
    list-style: none;
}

li {
    padding: 0.7rem 0;
}

nav {
    width: 15rem;
    float: left;
    height: 35rem;
    background-color: #2c6b74;
}


nav a {
    display: block;
    color: #fef5c8;
    text-decoration: none;
    padding: 1rem;
    font-size: 1.2rem;
}

nav a:hover {
    color: #faf7e9;
    background-color: #1f4c53;
}

.db1 {
    color: #2c6b74;
    text-decoration: underline;
}

.db2 {
    color: grey;
}

.box1 {
    border: 1px solid #2c6b74;
    padding: 1rem;
    height: 25rem;
}

.box2 {
    border: 1px solid #2c6b74;
    padding: 1rem;
    display: flex;
    height: 25rem;
}

.box2p2 {
    margin-top: 4rem;
}

.linea {
    border-right: 1px solid #2c6b74;
    margin: 1rem 2rem;
}

.subTitle {
    padding: 1rem;
    margin-left: 17rem;
    display: flex;
    justify-content: left;
    align-items: center;
}

.divt {
    margin-right: 3rem;
}

.divf {
    margin-left: 35rem;
}

.icoNav {
    margin: 1rem;
}

.fa-bars:hover {
    color: #fef5c8;
}

.fa-bars {
    color: black;
}

header {
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}

label {
    margin: 1rem;
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
}

input[type="checkbox"] {
    display: none;
}

.menu {
    padding: 5rem 1rem 0rem 1rem;
    position: fixed;
    left: -250px;
    width: 200px;
    height: 100%;
    background-color: #063940;
    transition: all 0.3s ease-in-out;
}


input[type="checkbox"]:checked + label +.menu {
    left: 0;
}

.menu.show {
    left: 0;
}

/* CSS de la tabla */

.table {
    width: 87%;
    border-collapse: collapse;
  }

  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Estilos para resaltar la información */
  .resaltar-info {
    color: blue;
    background-color: #eaf2f8;
  }
  
  .table thead th {
    background-color: #02b66b;
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }
  
  .table tbody th {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }
  
  .table tbody td {
    border-bottom: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }
  
  .table-striped tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  

  .button-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .button-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
    color: #fff;
  }
  
  .button-primary:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  
  .button-primary:active {
    background-color: #0062cc;
    border-color: #005cbf;
    color: #fff;
  }

  .button-danger{
     background-color: #ff1100;
    border-color: #ff004c;
    color: #fff;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .button-danger:hover{
    background-color: #d93300;
    border-color: #cc002c;
    color: #fff;
  }

  .button-danger:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  
  .button-danger:active {
    background-color: #0062cc;
    border-color: #005cbf;
    color: #fff;
  }

  .button-success{
    background-color: #1ba043;
   border-color: #00ff95;
   color: #fff;
   padding: 0.375rem 0.75rem;
   font-size: 1rem;
   line-height: 1.5;
   border-radius: 0.25rem;
   cursor: pointer;
 }

 .button-success:hover{
   background-color: #00d95a;
   border-color: #00cc33;
   color: #fff;
 }

 .button-success:focus {
   outline: none;
   box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
 }
 
 .button-success:active {
   background-color: #0062cc;
   border-color: #005cbf;
   color: #fff;
 }

 .button-container {
    display: flex;
  }

  .button {
    flex: 1;
    color: #fff;
    border: none;
    cursor: pointer;
    height: 150px;
    width: 250px;
    border-radius: 10px;
  }

  .button:not(:last-child) {
    margin-right: 10px;
  }

  .button-pink {
    background-color: #ff69b4;
  }

  .button-yellow {
    background-color: #ffd700;
  }

  .button-green {
    background-color: #008000;
  }

  .button-blue {
    background-color: #007bff;
  }

  .button:hover {
    opacity: 0.8;
  }

  .button:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #007bff;
  }

  .button:active {
    opacity: 0.6;
  }

  /* ventana */

  .window {
    position: relative;
    width: 700px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  .window .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .window .close-button:hover {
    background-color: #a3a2a2;
  }



  .loading-line {
    width: 200px;
    height: 10px;
    background-color: #acacac;
    position: relative;
  }

  .loading-line::before {
    content: "";
    display: block;
    width: 0%;
    height: 100%;
    background-color: #00ff00;
    position: absolute;
    top: 0;
    left: 0;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% { width: 0%; }
    100% { width: 10%; }
  }

  .line {
    width: 200px;
    height: 10px;
    background-color: #acacac;
    position: relative;
  }

  .line::before {
    content: "";
    display: block;
    width: 0%;
    height: 100%;
    background-color: #0099ff;
    position: absolute;
    top: 0;
    left: 0;
    animation: loading  linear infinite;
  }

  @keyframes loading {
    0% { width: 0%; }
    100% { width: 10%; }
  }


  .green-box {
    width: 10px;
    height: 10px;
    background-color: #00ff00;
  }

  .gris-box {
    width: 10px;
    height: 10px;
    background-color: #acacac;
  }
</style>
