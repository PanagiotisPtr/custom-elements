(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    * {
      font-family: 'Merriweather', serif;
    }
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    #card {
      width: 25vw;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 0px 5px; black;
    }
    img {
      width: 25vw;
      border-radius: 10px 10px 0px 0px;
    }
    #row-container {
      display: flex;
      flex-direction: row;
    }
    button {
      height: 4vh;
      font-size: 1.4em;
      margin-right: 2vw;
      background: none;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background: rgb(200, 200, 200);
      border-radius: 10px;
    }
    button:focus {
      outline: none;
    }
    #content {
      display: flex;
      flex-direction: column;
      margin: 1vw;
      width: 23vw;
    }
    #content > * {
      overflow-wrap: normal;
    }
    #title {
      font-size: 2em;
      font-weight: bold;
    }
    #subtitle {
      font-size: 1em;
      font-weight: bold;
      opacity: 0.5;
    }
  </style>
  <div id='card'>
    <img card-image/>
    <div id='content'>
      <div id='title' card-title></div>
      <div id='subtitle' card-subtitle></div>
      <p  card-description></p>
      <div id='row-container'>
        <button card-button-1></button>
        <button card-button-2></button>
      </div>
    </div>
  </div>
  `;

  class InfoCard extends HTMLElement {
    static get observedAttributes() {
      return ['image', 'title', 
              'subtitle', 'description',
              'button1', 'button2'];
    }

    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.imageVal = this.shadowRoot.querySelector('[card-image]');
      this.titleVal = this.shadowRoot.querySelector('[card-title]');
      this.subtitleVal = this.shadowRoot.querySelector('[card-subtitle]');
      this.descriptionVal = this.shadowRoot.querySelector('[card-description]');
      this.buttonVal1 = this.shadowRoot.querySelector('[card-button-1]');
      this.buttonVal2 = this.shadowRoot.querySelector('[card-button-2]');
    }

    connectedCallback() {
      if(!this.hasAttribute('description')) 
        this.setAttribute('description', '');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.imageVal.setAttribute('src', this.image);
      this.titleVal.textContent = this.title;
      this.subtitleVal.textContent = this.subtitle;
      this.descriptionVal.textContent = this.description;
      this.buttonVal1.textContent = this.button1;
      this.buttonVal2.textContent = this.button2;
    }

    // set/get image
    set image(value) {
      this.setAttribute('image', value);
    }

    get image() {
      return this.getAttribute('image');
    }

    // set/get title
    set title(value) {
      this.setAttribute('title', value);
    }

    get title() {
      return this.getAttribute('title');
    }

    // set/get subtitle
    set subtitle(value) {
      this.setAttribute('subtitle', value);
    }

    get subtitle() {
      return this.getAttribute('subtitle');
    }

    // set/get description
    set description(value) {
      this.setAttribute('description', value);
    }

    get description() {
      return this.getAttribute('description');
    }

    // set/get button1
    set button1(value) {
      this.setAttribute('button1', value);
    }

    get button1() {
      return this.getAttribute('button1');
    }

    // set/get button2
    set button2(value) {
      this.setAttribute('button2', value);
    }

    get button2() {
      return this.getAttribute('button2');
    }
  }

  customElements.define('info-card', InfoCard);
})();