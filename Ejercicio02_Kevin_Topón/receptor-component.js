// Definición del componente receptor
class ReceptorComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<p id="receptor"></p>`;
    }
  
    connectedCallback() {
      this.addEventListener('mensajePersonalizado', (e) => {
        this.shadowRoot.querySelector('#receptor').textContent = 'Mensaje recibido: ' + e.detail;
      });
    }
  }
  
  // Registro de los componentes
  customElements.define('emisor-component', EmisorComponent);
  customElements.define('receptor-component', ReceptorComponent);