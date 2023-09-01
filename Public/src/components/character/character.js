class Character extends HTMLElement{

    static get observedAttributes(){
        return["name","gender","house","yearofbirth"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/character/character.css">
        <section>
        <h1>${this.name}</h1>
        <p><strong>Gender: ${this.gender}</strong></p>
        <p><strong>House: ${this.house}</strong></p>
        <p><strong>Year of birht: ${this.yearofbirth}</strong></p>
        </section>
        `
    }
}

customElements.define("character-container", Character);
export default Character;