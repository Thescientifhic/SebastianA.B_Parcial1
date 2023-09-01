import * as components from "./components/IndexHijo.js"
import { data } from "./data.js";

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=> {
            this.shadowRoot.innerHTML += `
            <character-container name="${user.name}" gender="${user.gender}" house="${user.house}"
            yearofbirth="${user.yearOfBirth}"></character-container>
            <button-container></button-container>`
        })
    }
}

customElements.define("app-container",AppContainer);