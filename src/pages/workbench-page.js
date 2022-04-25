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
        let backButton = document.createElement("button");
        backButton.id = "back-button";
        workbenchPageFigure.appendChild(backButton)
        backButton.innerHTML = "Back";
        backButton.addEventListener("click", this.toWelcomeScreen.bind(this))
    }
    
    toWelcomeScreen(){
        let workbenchFigure = document.getElementById('workbench');
        document.body.removeChild(workbenchFigure)
        new Welcome();
    }
}
// module.exports = Workbench;