class Button extends HTMLElement{


    static get observedAttributes(){
        return["name","alternate_names"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    connectedCallback(){
        this.mount();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.mount();
    }

    mount(){
        this.render();
        this.addListener();
    }

    addListener(){
        this.shadowRoot.querySelector("button").addEventListener("name",this.onButtonClicked);
    }

    onButtonClicked(){
        const currenteValue = this.getAttribute("name");
        this.setAttribute("name","alternate_names");
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Button/button.css">
        <section>
        <button>Alternate name</button>
        </section>`
        
    }
}

customElements.define("button-container", Button);
export default Button;
