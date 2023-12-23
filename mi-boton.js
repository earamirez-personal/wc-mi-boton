
// Definimos la clase para nuestro componente
class MiBoton extends HTMLElement {
  constructor() {
    super(); // Llamada al constructor de la clase padre (HTMLElement)
    // Se adjunta el shadow DOM al custom element
    this.attachShadow({ mode: "open" });
    // Se añade el HTML interno y los estilos al shadow DOM
    this.shadowRoot.innerHTML = `
        <style>
          button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        </style>
        <button><slot>Click me</slot></button>
      `;
  }
}

// Definimos el nuevo elemento personalizado asociado a la clase MiBoton
customElements.define("mi-boton", MiBoton);
