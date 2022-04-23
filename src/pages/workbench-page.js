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
        let backButton = document.createElement("div");
        backButton.id = "back-button";
        workbenchPageFigure.appendChild(backButton)
        backButton.innerHTML = "Back";
        backButton.addEventListener("click", this.toWelcomeScreen.bind(this))
    }
    
    toWelcomeScreen(){
        new Welcome();
    }
}
// module.exports = Workbench;