// const Welcome = require("./welcome-page")
import Welcome from "./welcome-page"
import ExtraInfo from "./extra-info";

export default class Workbench {

    constructor () {
        this.workbenchStructure();
        new ExtraInfo();
        //dont wanna leave this Extra info here, just for testing. Eventually It should be on event handler
    }

    workbenchStructure(){
        let workbenchPageFigure = document.createElement("figure");
        workbenchPageFigure.id = 'workbench';
        document.body.appendChild(workbenchPageFigure);
        // this.addBackgroundImg(workbenchPageFigure);
        let backButton = document.createElement("button");
        backButton.id = "back-button";
        workbenchPageFigure.appendChild(backButton)
        backButton.innerHTML = "Back";
        backButton.addEventListener("click", this.toWelcomeScreen.bind(this))
        this.constructSidebar(workbenchPageFigure);
    }
    
    toWelcomeScreen(){
        let workbenchFigure = document.getElementById('workbench');
        document.body.removeChild(workbenchFigure)
        new Welcome();
    }

    constructSidebar(workbenchPageFigure){
        let sidebar = document.createElement("div");
        sidebar.className = "workbench-sidebar"
        workbenchPageFigure.appendChild(sidebar);
        let ul = document.createElement("ul");
        sidebar.appendChild(ul)
        this.addCrystalOption(ul);
        this.addSleeveOption(ul);
        this.addEmitterOption(ul);
    }

    addCrystalOption(ul){
        let button = document.createElement("button");
        button.className = "crystal";
        button.innerHTML = "Crystals"
        let li = document.createElement("li");
        li.className = `dropdown-${button.className}`;
        ul.appendChild(li);
        li.appendChild(button);
        this.addDropdownOptions(li, button, "Yellow", "Green", "Red", "Blue", "Purple", "White", "Black");

    }

    addSleeveOption(ul){
        let button = document.createElement("button");
        button.className = "sleeve";
        button.innerHTML = "Sleeves";
        let li = document.createElement("li");
        li.className = `dropdown-${button.className}`;
        ul.appendChild(li);
        li.appendChild(button);
        this.addDropdownOptions(li, button );
        // add sleeve options as an argument here
    }

    addEmitterOption(ul){
        let button = document.createElement("button");
        button.className = "emitter";
        button.innerHTML = "Emitters";
        let li = document.createElement("li");
        li.className = `dropdown-${button.className}`;
        ul.appendChild(li);
        li.appendChild(button);
        this.addDropdownOptions(li, button);
        // add emitter options as an argument here
    }

    addDropdownOptions(li, button, ...options){
        let div = document.createElement("div");
        div.className = `dropdown-content-${button.className}`
        div.addEventListener("click", this.handleContentClick.bind(this));
        li.appendChild(div);
        for (let i = 0; i < options.length; i++){
            let p = document.createElement("p");
            p.className = options[i];
            //not sure if I want the list options to have a class name or Id at all?
            p.innerHTML = options[i];
            div.appendChild(p);
        }
    }

    handleContentClick(e){
        // dynamic code to pull up information screen
        console.log(e)

    }

    
}
// module.exports = Workbench;