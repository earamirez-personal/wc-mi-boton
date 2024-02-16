
// Definimos la clase para nuestro componente
class MiBoton extends HTMLElement {
  static get observedAttributes() {
    return ["titulo"];
  }

  constructor() {
    super(); // Llamada al constructor de la clase padre (HTMLElement)
    // Se adjunta el shadow DOM al custom element

    this.attachShadow({ mode: "open" });
  }

  showButton(rootElement) {
    const template = document.getElementById("boton-template").content;
    const titulo = this.getAttribute("titulo");
    const alertaMessage = this.getAttribute("alerta-message");
    const h1Element = template.querySelector("h1#__TITULO__");
    const buttonElement = template.querySelector("button#__BUTTON__");

    if (rootElement) {
      if (h1Element) h1Element.innerText = titulo;

      if (buttonElement) {
        buttonElement.addEventListener("click", (e) {
          e.preventDefault();

          this.dispatchEvent(
            new CustomEvent("seleccionar", {
              detail: {
                mensaje: alertaMessage,
              },
              bubbles: true,
              composed: true,
              cancelable: false,
            })
          );
        });
      }

      // Se añade el HTML interno y los estilos al shadow DOM
      rootElement.appendChild(template);
    }
  }

  connectedCallback() {
    if (this.shadowRoot) this.showButton(this.shadowRoot);
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.showButton(this.shadowRoot);
  }
}

// Definimos el nuevo elemento personalizado asociado a la clase MiBoton
customElements.define("mi-boton", MiBoton);
