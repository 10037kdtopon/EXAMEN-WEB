// Definimos la clase para nuestro componente
class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      // Creamos un shadow root
      var shadow = this.attachShadow({mode: 'open'});
  
      // Creamos un elemento span
      var saludo = document.createElement('span');
      saludo.textContent = "HOLA MUNDO";
  
      // Añadimos el elemento span al shadow root
      shadow.appendChild(saludo);
    }
  }
  
  // Definimos el nuevo elemento
  customElements.define('saludo-component', SaludoComponent);
  