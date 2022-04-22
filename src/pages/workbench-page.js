class Workbench {
    
    constructor (element) {
        this.element = element;
        this.workbenchStructure();
    }

    workbenchStructure(){
        let backButton = document.createElement("div");
        backButton.id = "back-button";
        backButton.innerHTML = "Back"
        this.element.appendChild(backButton)
    }
    
}
module.exports = Workbench;