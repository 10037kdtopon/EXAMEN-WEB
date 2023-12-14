class EmisorComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const boton = document.createElement('button');
      boton.textContent = 'Enviar Mensaje';
  
      // Usamos `this` para agregar el evento al propio componente emisor
      boton.addEventListener('click', () => {
        const evento = new CustomEvent('mensajeEnviado', {
          bubbles: true,
          detail: { mensaje: 'Hola desde emisor-component' }
        });
  
        this.dispatchEvent(evento);
      });
  
      shadow.appendChild(boton);
    }
  }
  
  customElements.define('emisor-component', EmisorComponent);
  