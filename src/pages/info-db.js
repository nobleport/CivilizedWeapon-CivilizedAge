let dataBase = {
     Yellow:{
        title: "Yellow",
        description: "This is a rare color, used for the most selfless of Jedi. Temple Guards\
are the color's most common weilders. Yellow can represent energy, warmth, sunshine, and opti\
mism. Some other famous yellow lightsaber wielders are Asajj Ventress, and the twins Arcann an\
d Thexon.",
        image: "./images/crystal-colors/Kyber-Crystals_Yellow.png",
        type: "crystal"
    },

    Red:{
        title: "Red",
        description: "Red is the lightsaber color of the Sith, and force users who have emb\
raced the dark side.The color red can represent passion, blood, power, danger, and anger\
. All of these are emotions that represent the Sith. Some famous wielders of red lightsab\
ers include Darth Vader, Darth Maul, and Kylo Ren.",
        image: "./images/crystal-colors/Kyber-Crystals_Red.png",
        type: "crystal"
    },

    Green:{
        title: "Green",
        description: "The second most common lightsaber among Jedi is green. You would most often \
see green lightsabers in the hands of more diplomatic Jedi, such as Yoda and Qui-Got Jinn. \
Green can represent nature, growth, and safety, which is fitting for Jedi who only draws the\
ir lightsabers as a last resort.",
        image: "./images/crystal-colors/Kyber-Crystals_Green.png",
        type: "crystal"
    },

    Blue:{
        title: "Blue",
        description: "One of the most common lightsaber colors is blue. Blue can symbolize calm,\
 trust, stability, and loyalty, all traits important to the Jedi. two famous wielders of blue\
lightsabers are Obi-Wan Kenobi and Rey Skywalker",
        image: "./images/crystal-colors/Kyber-Crystals_Blue.png",
        type: "crystal"
    },

    Black:{
        title: "Black",
        description: "Little is known about Dark Sabers. The only example in republic records is the Dark Saber of Mandalore w\
        hich was constructed by Tarre Vizla",
        image: "./images/crystal-colors/Kyber-Crystals_Black.png",
        type: "crystal"
    },

    White:{
        title: "White",
        description: "Most force-sensitive people who have a white lightsaber have forged their\
own path, not choosing the Jedi or the Sith. Ahsoka Tano built her own lightsaber from salvaged parts, including a Sith corrup\
ted kyber crystal. In building her own lightsaber, she purified the kyber crystal, leaving\
 it white. White can represent purity, beginnings, neutrality, and positivity.",
        image: "./images/crystal-colors/Kyber-Crystals_White.png",
        type: "crystal"
    },

    Purple:{
        title: "Purple",
        description: "Purple is the color of royalty and power, so it would make sense that purple lightsabers would\
 most likely be seen in characters who are not willing to conform to a higher power.",
        image: "./images/crystal-colors/Kyber-Crystal_Purple.png",
        type: "crystal"
    },

    source:"https://www.bossksbounty.com/films/every-lightsaber-color-in-star-wars#:~:text=Every%20Lightsaber%20Color%20in%20Star,and%20red%20for%20the%20Sith.",

    //sleeve options
    "EchaniFoil":{
        title: "Echani Foil",
        description: "Excess energy from the generator in this hilt is conducted\
 directly through the blades. Also possessing a rare Iridorian we\
 ave, this weapon is a deadly Echani masterpiece.",
        image: "./images/lightsaber-pieces/EchaniFoilC.png",
        type: "sleeve"
    },
    
    ShotoHilt: {
        title: "Shoto Hilt",
        description: "This advanced sleeve is a miracle of miniaturization technology.\
 Not only does it deliver increased functionality over a normal vibrosword, it also has cap\
 acitors which discharge upon contact with a target.",
        image: "./images/lightsaber-pieces/ShotoHiltC.png",
        type: "sleeve"
    },

    VibroSleeve: {
        title: "Vibro Sleeve",
        description: "This sleeve possesses a high frequency vibrtation technology that offers it protection\
against even the most dangerous weapons. It has been known to deflect strikes from other lightsabers. Energy captured from\
strikes from other energy weapons is redirected to the emitter, creating a stronger blade.",
        image: "./images/lightsaber-pieces/VibroSleeveC.png",
        type: "sleeve"
    },

    KrathBlood: {
        title: "Krath Blood",
        description: "Twisted by the dark side, this ancient sleeve has come to feed off the weilder to focus more energy into the blade.\
 It is meant for assassination, meaning it's defensive properties lack, but never underestimate the power of weapons infused with the force itself.",
        image: "./images/lightsaber-pieces/KrathBloodSleeveC.png",
        type: "sleeve"
    },

    MassassiBrand: {
        title: "Massassi Brand",
        description: "During the reign of Naga Sadow the Massassi were transformed into foot soldiers for\
 the Sith. This was their traditional weapon design, it excells at piercing damage and has even been known to melt through\
 Mandalorian beskar given enough time.",
        image: "./images/lightsaber-pieces/MassassiBrandC.png",
        type: "sleeve"
    },

    CortosisWeave: {
        title: "Cortosis Weave",
        description: "Sanasiki used this weapon design to kill Nelinik, a Zabrak who assassinated the Echani\
High Protector with battle droids. Cortosis protects the blade against lightsaber sparring dam\
age while energy cells disrupt droid opponents. Use this if you plan on fighting a lot of droids.",
        image: "./images/lightsaber-pieces/cortosisSleeveC.png",
        type: "sleeve"
    },

    JediTremor: {
        title: "Jedi Tremor",
        description: "Traced to the Bladeborn, a Jedi offshoot dedicated to sword mastery,\
 these cortosis-laced weapons were given to 'masterblades' who survived no less than ten li\
 ghtsaber-wielding warriors in combat.",
        image: "./images/lightsaber-pieces/JediTremorC.png",
        type: "sleeve"
    },

    KenobiSleeve: {
        title: "Kenobi Sleeve",
        description: "This is the sleeve design used by the legendary Obi Wan Kenobi. ",
        image: "./images/lightsaber-pieces/KenobiSleeveC.png",
        type: "sleeve"
    },

    // emitter options

    VibrationCell: {
        title: "Vibration Cell",
        description: "Excellent in conjunction with other vibro weapons/modifications since \
it amplifies vibration benefits, but focuses it into the blade. Offers a high slashing power due to the vibrating technology",
        image: "./images/lightsaber-pieces/cortosis-topC.png",
        type: "emitter"
    },

    BeamSplitter: {
        title: "Beam Splitter",
        description: "This emitter widens the blade, making it excellent for deflecting blaster bolts. It makes for a \
less elegant blade, but is prime for defending against multiple weaker enemies. Be cautious when taking on stronger opponents.",
        image: "./images/lightsaber-pieces/EchaniFoilEmittter.png",
        type: "emitter"
    },

    ImprovedEnergyCell: {
        title: "Improved Energy Cell",
        description: "This emitter includes an energy cell that can be used as an external power-source, and is \
quite effective due to it's energy efficiency. It is an extremely dependable emitter and will rarely malfunction.",
        image: "./images/lightsaber-pieces/JediTremorEmitterC.png",
        type: "emitter"
    },

    DurasteelBondingAlloy: {
        title: "Durasteel Bonding Alloy",
        description: "This emitter generates a wide, powerful blade that softens blows from other lightsabers and vibroswords. This makes it\
perfect for a defensive fighting style, waiting for the opponent to become exhausted, opening themselves up to counter-attacks.",
        image: "./images/lightsaber-pieces/KenobiSleeveEmitterC.png",
        type: "emitter"
    },

    HyperFocusingEmitter: {
        title: "Hyper Focusing Emitter",
        description: "Highly focused blades are perfect for dueling a single, lightsaber weilding opponent, but rely on an offensive fighting style. \
This emitter focuses the blade and causes strikes against other lightsabers to deflect much more powerfully.",
        image: "./images/lightsaber-pieces/KrathBloodEmitterC.png",
        type: "emitter"
    },

    MassassiBrandEmitter: {
        title: "Massassi Brand Emitter",
        description: "Massassi designed parts are frequently used by sith assassins or Jedi sentinels who use their weapons to \
quickly dispel an enemy. Upon ignition, this emitter causes the blade to extend almost instantly. Be prepared to kill, and then \
blend into the background.",
        image: "./images/lightsaber-pieces/MassassiBrandEmitterC.png",
        type: "emitter"
    },

    ShotoEmitter: {
        title: "Shoto Emitter",
        description: "The modified Sith Shoto emitter was designed for quick and silent killing of \
unexpected targets. It was damaging against both organic beings and droids, and was usually fatal to both.",
        image: "./images/lightsaber-pieces/ShotoEmitterC.png",
        type: "emitter"
    },

    VibroEmitter: {
        title: "Vibro Emitter",
        description: "The modified Sith Shoto emitter was designed for quick and silent killing of \
        unexpected targets. It was damaging against both organic beings and droids, and was usually fatal to both.",
        image: "./images/lightsaber-pieces/VibroSleeveEmitterC.png",
        type: "emitter"
    }
};

module.exports = dataBase;