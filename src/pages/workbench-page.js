import dataBase from "./info-db"; 
import Welcome from "./welcome-page"
import ExtraInfo from "./extra-info";
import Lightsaber from "./lightsaber-builder";

export default class Workbench {

    constructor () {
        this.workbenchStructure();
        new Lightsaber();
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
        //add this class to the 2 others later
        button.innerHTML = "Crystals"
        let li = document.createElement("li");
        li.className = `dropdown-${button.className}`;
        button.classList.add("sidebar-buttons");
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
        button.classList.add("sidebar-buttons");
        ul.appendChild(li);
        li.appendChild(button);
        this.addDropdownOptions(li, button, "Echani Foil", "Shoto Hilt", "Vibro Sleeve", "Krath Blood", "Massassi Brand", "Cortosis Weave", "Jedi Tremor", "Kenobi Sleeve");
        // add sleeve options as an argument here
    }

    addEmitterOption(ul){
        let button = document.createElement("button");
        button.className = "emitter";
        button.innerHTML = "Emitters";
        let li = document.createElement("li");
        li.className = `dropdown-${button.className}`;
        button.classList.add("sidebar-buttons");
        ul.appendChild(li);
        li.appendChild(button);
        this.addDropdownOptions(li, button, "Vibration Cell", "Beam Splitter", "Improved Energy Cell", "Durasteel Bonding Alloy", "Hyper Focusing Emitter", "Massassi Brand Emitter", "Shoto Emitter", "Vibro Emitter");
        // add emitter options as an argument here
    }

    addDropdownOptions(li, button, ...options){
        let div = document.createElement("div");
        div.className = `dropdown-content-${button.className}`
        div.classList.remove("sidebar-buttons");
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
        if (document.getElementById("options-container")){
            let figure = document.getElementById("workbench")
            figure.removeChild(document.getElementById("options-container"))
        }
        new ExtraInfo();
        let title = document.querySelector("#options-container > h3:first-of-type")
        let optionClicked = (e.path[0]).className;
        let optionsArr = optionClicked.split(" ");
        let key = ""
            if (optionsArr.length === 1){
                key = optionsArr[0]
            }else{
            optionsArr.forEach (function(word){
                key += word;
            })
        }
        // Echani Foil
        let description = document.querySelector("#options-container > p:first-of-type")
        let img = document.querySelector("#options-container > img:first-of-type")
        // console.log(title) //h3 element, which is what we want
        title.innerHTML = dataBase[key].title;
        description.innerHTML = dataBase[key].description;
        img.src = dataBase[key].image

    }

    
}
// module.exports = Workbench;