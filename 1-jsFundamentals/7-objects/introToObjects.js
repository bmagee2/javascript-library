// objects

// key: value info

let netflix = {
    id: 1,                  //reads objects as strings
    name: "the office",
    seriesInfo: {
        seasons: 9,
        seasonInfo: [
            {
                season: 1,
                episodes: 6,
                episodeInfo: [
                    {
                        episode: 1,
                        episodeName: "pilot",
                    },
                    {
                        episode: 2,
                        episodeName: "diversity day",
                    }
                ]
            },
            {
                season: 2,
                episodes: 2,
                episodeInfo:  [
                    {
                        episode: 1,
                        episodeName: "the dundies",
                    }
                ]
            }
        ]
    }
}

/*
console.log("whole object: ", netflix);

console.log("just series info: ", netflix.seriesInfo);

console.log("just season info: ", netflix.seriesInfo.seasonInfo);
*/

//console.log("just season info: ", netflix.seriesInfo.seasonInfo[0].episodeInfo[0]);


//challenge

console.log("episode name: ", netflix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName);

/*
    JSON: javascript object notation; takes API raw data and turns it into a readable format with an extension
*/


let spaceJam = {
    toonSquad: {
        human: "michael jordan",
        rabbit1: "bugs bunny",
        rabbit2: "lola bunny",
        duck: "daffy duck",
        tDevil: "tasmanian devil",
        bird: "tweenty",
        cat: "sylvester",
        pig: "porky"
    },
    monstars: {
        0: "bupkus",
        1: "bang",
        2: "nawt",
        3: "pound",
        4: "blanko"
    },
    nbaPlayers: {
        phoenixSuns: "charles barkley",
        newJerseyNets: "shawn bradley",
        newYorkKnicks: "patrick ewing",
        charlotteHornets1: "larry johnson",
        charlotteHornets2: "muggsy bogues"
    }
}

//console.log(Object.keys(spaceJam));
//console.log(Object.keys(spaceJam.toonSquad));

//note: keys written as numbers or strings are grabbed with [] rather than dot notation in objects
//console.log(spaceJam.monstars[0]);

//console.log(Object.values(spaceJam.toonSquad));


let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grapes",
    water: true,
    sun: true,
    size: 10
}

let keys = Object.keys(garden);
console.log(typeof keys[0]);

let zucchini = garden["vegetable"];
console.log(zucchini);


let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grapes",
    water: true,
    sun: true,
    size: 10
}
// create properties outside of the object
let baking = {};
//bunch of code here

baking.zucchini = "better make some bread";
console.log(baking);

baking["flour"] = "batter up";
console.log(baking);

console.log(baking[garden["vegetable"]]);

