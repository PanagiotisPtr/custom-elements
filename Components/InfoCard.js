class InfoCard extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});
    
    var info = document.createElement('span');
    info.setAttribute('class', 'fancy-text');
    info.textContent = this.getAttribute('text');

    var style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('href', 'Components/InfoCard.css');

    shadow.appendChild(style);
    shadow.appendChild(info);
  }
}

customElements.define('info-card', InfoCard);