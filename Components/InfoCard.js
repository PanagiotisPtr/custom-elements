(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    .fancy-text {
      color: blue;
      font-size: 4em;
    }
  </style>
  <div>
    <p description></p>
  </div>
  `;

  class InfoCard extends HTMLElement {
    static get observedAttributes() {
      return ['description'];
    }
    
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.descriptionVal = this.shadowRoot.querySelector('[description]');
    }

    connectedCallback() {
      console.log('mounted!');

      if(!this.hasAttribute('description')) 
        this.setAttribute('description', '');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.descriptionVal.textContent = this.description;
    }

    set description(value) {
      this.setAttribute('description', value);
    }

    get description() {
      return this.getAttribute('description');
    }
  }

  customElements.define('info-card', InfoCard);
})();