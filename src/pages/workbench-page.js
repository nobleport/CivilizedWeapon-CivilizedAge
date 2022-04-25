// const Welcome = require("./welcome-page")
import Welcome from "./welcome-page"

export default class Workbench {

    constructor () {
        this.workbenchStructure();
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

    // addBackgroundImg(workbenchPageFigure){
    //     let bgImg = document.createElement("div");
    //     bgImg.className = "workbenchBackground";
    //     workbenchPageFigure.appendChild(bgImg);
    // }

    constructSidebar(workbenchPageFigure){
        let sidebar = document.createElement("div");
        sidebar.className = "workbench-sidebar"
        workbenchPageFigure.appendChild(sidebar);
        let ul = document.createElement("ul");
        sidebar.appendChild(ul)
        this.addCrystalOptions(ul);
        this.addSleeveOptions(ul);
        this.addEmitterOptions(ul);
    }

    addCrystalOptions(ul){
        let button = document.createElement("button");
        button.className = "crystal";
        button.innerHTML = "Crystals"
        ul.appendChild(button);

    }

    addSleeveOptions(ul){
        let button = document.createElement("button");
        button.className = "sleeve";
        button.innerHTML = "Sleeves"
        ul.appendChild(button);
    }

    addEmitterOptions(ul){
        let button = document.createElement("button");
        button.className = "emitter";
        button.innerHTML = "Emitters"
        ul.appendChild(button);
    }

    
}
// module.exports = Workbench;