

export default class Lightsaber{
    constructor(){
        this.buildLightsaberContainer();
    }

    buildLightsaberContainer(){
        let div = document.createElement("div");
        div.id = "lightsaber-container"
        let figure = document.getElementById("workbench")
        figure.appendChild(div)
        this.buildLightsaberStructure(div);
    }

    buildLightsaberStructure(div){
        let blade = document.createElement("div");
        blade.className = "blade";
        div.appendChild(blade);
        let emitter = document.createElement("img");
        emitter.className = "emitter";
        let sleeve = document.createElement("img");
        sleeve.className = "sleeve";
        div.appendChild(emitter);
        div.appendChild(sleeve);
    }

}