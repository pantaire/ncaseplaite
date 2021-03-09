function displayResult() {

    appearance = {
        aries:          "Ram horns regardless of gender, strong foreheads, and bones stronger than usual since they're prone to injury",
        taurus:         "Bull horns regardless of gender, large hands in proportion to their bodies, and stomachs and immune system allow them to eat anything without harm",
        gemini:         "Second set of arms, eyes can zoom in and out of long range, and have much easier time learning new languages than others",
        cancer:         "Hands can morph into crab claws, skin glitters when exposed to moonlight, all of them are empaths",
        leo:            "Feline like canines, nails are long and strong like claws, skin glitters when exposed to sunlight",
        virgo:          "Large feathered wings, looks human otherwise",
        libra:          "skin on the hands and forearms are metallic gold or silver, has glowing eyes, can always tell if you're lying",
        scorpio:        "Fully funtional scorpion tail (proportinate to body), can easily see in the dark, very silent walkers who can sneak up on anyone",
        sagittarius:    "Can switch from biped to centaur and back, keeps their tail in any form, hair grows long and fast",
        capricorn:      "Goat horns, legs and hooves, pretty much satyrs",
        aquarius:       "Are the most human looking of the signs but they always have at least one robotic body enhancement, can retain more information than the others",
        pisces:         "Can switch from biped to mermaid and back, have a set of gills that closes on land, often have scales grown on stray parts of their body that shows even on land"
    }
    abilities = {
        aries:          "Pyrokinesis, quick self healing factor, rerecognition",
        taurus:         "Super strength, stone manipulation, can communicate with any mammal",
        gemini:         "Super speed, can shapeshift into any human form, physical duplication",
        cancer:         "control tides, produce and shoot lunar beams (can only be accessed at night), psychic absorption (can absorb and use one power at a time, this only tires the victim), producing physical fields",
        leo:            "produce and shoot solar beams, control heat (can only be accessed during the day), laser eyes, sonic boom roar (can physically push away anything in its close range)",
        virgo:          "Portal creation, telekinesis, poison manipulation",
        libra:          "Plant manipulation, siren song, sonic scream (can stun any living being in its range and break close enough objects)",
        scorpio:        "shadow manipulation, mediumship (includes dead and powerful spirits), selective mind reading (can't communicate mentally)",
        sagittarius:    "Can shoot energy arrows or spears, light manipulation, power jump (as far as 50ft off the ground",
        capricorn:      "ice manipulation, telepathy, temporarily slow time",
        aquarius:       "Electric manipulation, technopathy, wind manipulation",
        pisces:         "Water manipulation, aura manipulation, invisibility"
    }
    colours = {
        aries:          "red and orange",
        taurus:         "brown and green",
        gemini:         "light blue and yellow",
        cancer:         "silver and various shades of blue",
        leo:            "gold and red",
        virgo:          "green and yellow",
        libra:          "green and pink",
        scorpio:        "black and red",
        sagittarius:    "orange and brown",
        capricorn:      "brown and black",
        aquarius:       "electric blue and black",
        pisces:         "see green and lavender"
    }
    hair = {
        aries:          "often curly in natural colours",
        taurus:         "often thick and usually black, green or brown",
        gemini:         "any unnatural colour",
        cancer:         "either blue or black",
        leo:            "almost always big, no matter the length",
        virgo:          "either brown or black base with any second colour",
        libra:          "either white, brown or pink",
        scorpio:        "can be any dark colour",
        sagittarius:    "red or dirty blond",
        capricorn:      "can be any secondary colour",
        aquarius:       "can be any bright unnatural colour",
        pisces:         "can be any shade of blue or purple"
    }
    eyes = {
        aries:          "warm red or bright orange",
        taurus:         "can be any colour",
        gemini:         "can be any colour",
        cancer:         "either blue or black",
        leo:            "often gold, hints of brown or orange",
        virgo:          "can be any colour",
        libra:          "either pink or yellow",
        scorpio:        "either dark blue or bright red",
        sagittarius:    "either brown or orange",
        capricorn:      "can be any secondary colour",
        aquarius:       "any shade of blue",
        pisces:         "can be either blue or purple"
    }
    physique = {
        aries:          "average height or smaller",
        taurus:         "often either chubby or beefy physique",
        gemini:         "physique varies",
        cancer:         "tends to be short",
        leo:            "either really tall or really short",
        virgo:          "physique varies",
        libra:          "often tall",
        scorpio:        "physique varies",
        sagittarius:    "often tall",
        capricorn:      "often average height",
        aquarius:       "often tall but body type varies",
        pisces:         "physique varies"
    }
    special = {
        aries:          "",
        taurus:         "",
        gemini:         "long legs proportionate to their height",
        cancer:         "",
        leo:            "",
        virgo:          "all have longer than average fingers",
        libra:          "wide hips regardless of gender",
        scorpio:        "can blend in easily with their surroundings",
        sagittarius:    "short ones are faster runners",
        capricorn:      "very fit physique, throws some of the hardest punches",
        aquarius:       "",
        pisces:         "large glossy eyes"
    }

    displaySun      = document.getElementById("sun").value;
    displayMoon     = document.getElementById("moon").value;
    displayRising   = document.getElementById("rising").value;

    document.getElementById("result").style.display = 'block';

    document.getElementById("colours").innerHTML = colours[displayRising];
    document.getElementById("hair").innerHTML = hair[displayRising];
    document.getElementById("eyes").innerHTML = eyes[displayRising];
    document.getElementById("physique").innerHTML = physique[displayRising];
    document.getElementById("appearance").innerHTML = appearance[displaySun];
    document.getElementById("abilities").innerHTML = abilities[displayMoon];
}