const Workbench = require("./workbench-page");

class Welcome {
    constructor(element){
        this.element = element;
        this.welcomeStructure();
    }
    welcomeStructure(){
        let ul = document.createElement("ul")
        ul.id = "welcome-text-box"
        this.element.appendChild(ul);
        let li1 = document.createElement("li");
            li1.className = "welcome-1";
            ul.appendChild(li1);
        let li2 = document.createElement("li");
            li2.className = "welcome-2";
            ul.appendChild(li2);
        let li3 = document.createElement("li");
            li3.className = "welcome-3";
            ul.appendChild(li3);
        let li4 = document.createElement("a");
            li4.className = "launch-button";
            li4.href = "#";
            //this should link us to generating the workbench page//
            ul.appendChild(li4)
        li4.addEventListener("click", this.switchScreens.bind(this));
        this.welcomeContent(li1, li2, li3, li4);
    }

    welcomeContent(li1, li2, li3, li4){
        li1.innerHTML = 'Welcome, Padawan'
        li2.innerHTML = 'These are your first steps... -Ben Kenobi'
        li3.innerHTML = 'Before you can be fully accepted into the Jedi Order, you must construct your first lightsaber prototype'
        li3.innerHTML += '. Think carefully about your design. Remember, there are consequences to every choice, and the choices '
        li3.innerHTML += 'you make now will help determine your focus as a Jedi. May the Force be with you.'
        li4.innerHTML = "Launch"
    }

    // addEventListener("click",)
    switchScreens(e) {
        let welcomeBox = document.getElementById('welcome');
        welcomeBox.disabled = true;
        let element = document.getElementById('workbench')
        new Workbench(element);
    }
    
}

module.exports = Welcome;

