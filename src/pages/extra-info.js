import dataBase from "./info-db"; 

export default class ExtraInfo{
    constructor(){
        this.extraInfoDiv();
        //how we can access our database
        
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
        selectButton.addEventListener("click", this.handleSelect.bind(this));
        selectButton.innerHTML = "Select"
        // let deselectButton = document.createElement("button");
        // deselectButton.addEventListener("click", this.handleDeSelect.bind(this));
        // deselectButton.innerHTML = "Deselect"
        // deselectButton.className = "deselect-button"
        let arr = [optionsHeader, description, exampleImg, selectButton];
        arr.forEach(function(ele){
            div.appendChild(ele);
        })
        // console.log(document.querySelector("#options-container > p:first-of-type"))
        //this is how to select the first of each type in the div-container
    }

    // handleDeSelect(e){

    // }
    handleSelect(e){
        let figure = document.getElementById("workbench");
        let div = document.getElementById("options-container");
        // console.log(e.path[1].id);
        let containerId = e.path[1].id;
        let headerDiv = document.querySelector(`#options-container > h3:first-of-type`);
        let headerText = headerDiv.textContent;
        // console.log(headerText);
        // figure.removeChild(div)
        let headerArr = headerText.split(" ");
        let key = "";
            if (headerArr.length === 1) {
                key = headerArr[0]
            }else{
                headerArr.forEach (function(word){
                    key += word;
            })
        }
        console.log(key);
        if (dataBase[key].type === "crystal"){
            let targetDiv = document.querySelector("#lightsaber-container > div");
            targetDiv.id = `blade-${dataBase[key].title}`
            
        }else if(dataBase[key].type === "emitter"){
            let targetDiv = document.getElementById("emitter")
            targetDiv.src = dataBase[key].image;
        }else{
            let targetDiv = document.getElementById("sleeve")
            targetDiv.src = dataBase[key].image;
        }
    }

    
}