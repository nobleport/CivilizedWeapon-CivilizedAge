export default class ExtraInfo{
    constructor(){
        this.extraInfoDiv();
    }

    extraInfoDiv(){
        let workbenchFigure = document.getElementById("workbench");
        let div = document.createElement("div");
        div.id = "options-container";
        workbenchFigure.appendChild(div);
        this.extraInfoStructure(div);
    }

    extraInfoStructure(div){
        let optionsHeader = document.createElement("h3");
        let description = document.createElement("p");
        let exampleImg = document.createElement("img");
        let selectButton = document.createElement("button");
        let arr = [optionsHeader, description, exampleImg, selectButton];
        arr.forEach(function(ele){
            div.appendChild(ele);
        })
        console.log(document.querySelector("#options-container > p:first-of-type"))
        //this is how to select the first of each type in the div-container
    }
}