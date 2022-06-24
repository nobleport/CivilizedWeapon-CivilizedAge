

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
        // blade.id = "blade";
        div.appendChild(blade);
        let emitter = document.createElement("img");
        emitter.id = "emitter";
        let sleeve = document.createElement("img");
        sleeve.id = "sleeve";
        div.appendChild(emitter);
        div.appendChild(sleeve);
        let crystal = document.createElement("img");
        crystal.id = "crystal";
        div.appendChild(crystal);
        div.addEventListener("click", this.igniteBlade.bind(this))
    }

    igniteBlade(e){
        let blade = document.querySelector("#lightsaber-container > div:first-of-type");
            if (blade.style.display === "block"){
                let soundEffect = new Audio("images/Lightsaber-Powering-Down-Sound-Effect.mp3");
                soundEffect.play();
                blade.style.display = "none";
            }else{
                blade.style.display = "block";
                let soundEffect = new Audio("images/Lightsaber-Idle-Hum-Sound-Effect.mp3")
                soundEffect.play();
        }
    }
}