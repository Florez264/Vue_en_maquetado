<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section>
      <div class="button-container" style="margin: 10px;">
        <button class="button button-pink">
          <p style="text-align: right;"><strong><font size="6">Server Up: {{ serverUpCount }}</font></strong></p>
        </button>
        <button class="button button-yellow">
          <p style="line-height: 100px;"><strong><font size="4">Servers Development: {{ developmentCount }}</font></strong></p>
        </button>
        <button class="button button-green">
          <p><strong><font size="4">Server production: {{ productionCount }}</font></strong></p>
        </button>
        <button class="button button-blue">
          <p><strong><font size="5">Server Offline: {{ offlineCount }}</font></strong></p>
        </button>
      </div>
      <br>
      <div class="window">
    <h1 style="text-decoration: underline;">Uso de almacenamiento</h1>
    <button class="close-button">×</button>
    <div class="container">
      <div class="storage-container">
        <table>
          <tr>
            <th>Almacenamiento Local</th>
            <th>Almacenamiento en la Nube</th>
          </tr>
          <tr>
            <td>
              <div class="storage-section">
                <div class="storage-bar">
                  <div class="used-space local" :style="{ width: localUsedPercentage }"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="storage-section">
                <div class="storage-bar">
                  <div class="used-space cloud" :style="{ width: cloudUsedPercentage }"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>{{ localTotalStorage }} TiB</td>
            <td>{{ cloudTotalStorage }} B</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Total</td>
          </tr>
          <tr>
            <td>
              <div class="space-info">
                <div class="used-space-info">
                  <div class="color-box green"></div>
                  <span>Espacio utilizado {{ localUsedStorage }} TiB</span>
                </div>
              </div>
            </td>
            <td>
              <div class="space-info">
                <div class="used-space-info">
                  <div class="color-box green"></div>
                  <span>Espacio utilizado {{ cloudUsedStorage }} B</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="storage-section">
                <div class="space-info">
                  <div class="available-space-info">
                    <div class="color-box grey"></div>
                    <span>Espacio libre {{ localFreeStorage }} TiB</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="storage-section">
                <div class="space-info">
                  <div class="available-space-info">
                    <div class="color-box grey"></div>
                    <span>Espacio libre {{ cloudFreeStorage }} B</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
    </section>
  </template>
  
  <script>
 export default {
  data() {
    return {
      serverUpCount: 10,
      developmentCount: 20,
      productionCount: 40,
      offlineCount: 10,

      arrayCantidades: [
        { server: "www", tam: 200 },
        { server: "DNS", tam: 40 },
        { server: "www", tam: 50 },
        { server: "DNS2", tam: 50 },
      ],
    };
  },
  computed: {
    localUsedStorage() {
      // Calcula el espacio de almacenamiento utilizado localmente sumando los tamaños de los servidores "www"
      const localUsed = this.arrayCantidades.reduce((total, item) => {
        if (item.server === "www") {
          return total + item.tam;
        }
        return total;
      }, 0);
      return localUsed.toFixed(2);
    },
    cloudUsedStorage() {
      // Calcula el espacio de almacenamiento utilizado en la nube sumando los tamaños de los servidores "DNS"
      const cloudUsed = this.arrayCantidades.reduce((total, item) => {
        if (item.server === "DNS") {
          return total + item.tam;
        }
        return total;
      }, 0);
      return cloudUsed.toFixed(2);
    },
    localFreeStorage() {
      // Calcula el espacio de almacenamiento libre local restando el almacenamiento utilizado del total disponible
      const totalStorage = 1000; // Capacidad total en GB
      const localUsed = parseFloat(this.localUsedStorage);
      const localFree = totalStorage - localUsed;
      return localFree.toFixed(2);
    },
    cloudFreeStorage() {
      // Calcula el espacio de almacenamiento libre en la nube restando el almacenamiento utilizado del total disponible
      const totalStorage = 1000; // Capacidad total en GB
      const cloudUsed = parseFloat(this.cloudUsedStorage);
      const cloudFree = totalStorage - cloudUsed;
      return cloudFree.toFixed(2);
    },
    localTotalStorage() {
      // Devuelve la capacidad total de almacenamiento local
      const totalStorage = 1000; // Capacidad total de almacenamiento
      return totalStorage.toFixed(2);
    },
    cloudTotalStorage() {
      // Devuelve la capacidad total de almacenamiento en la nube
      const totalStorage = 1000; // Capacidad total de almacenamiento
      return totalStorage.toFixed(2);
    },
    localUsedPercentage() {
      // Calcula el porcentaje de espacio de almacenamiento utilizado localmente
      const totalStorage = 1000; // Capacidad total en GB
      const localUsed = parseFloat(this.localUsedStorage);
      const percentage = (localUsed / totalStorage) * 100;
      return `${percentage}%`;
    },
    cloudUsedPercentage() {
      // Calcula el porcentaje de espacio de almacenamiento utilizado en la nube
      const totalStorage = 1000; // Capacidad total en GB
      const cloudUsed = parseFloat(this.cloudUsedStorage);
      const percentage = (cloudUsed / totalStorage) * 100;
      return `${percentage}%`;
    },
  },
};

  </script>
  
<style>
.container {
  display: flex;
  justify-content: center;
}

.storage-container {
  width: 700px;
  padding: 20px;
  border: 0px solid #ccc;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
}

.storage-bar {
  background-color: #ddd;
  height: 20px;
  margin-bottom: 10px;
}

.used-space {
  height: 100%;
}

.local {
  background-color: green;
}

.cloud {
  background-color: green;
}

.space-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.used-space-info, .available-space-info {
  display: flex;
  align-items: center;
}

.color-box {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}

.green {
  background-color: green;
}

.grey {
  background-color: grey;
}

</style>