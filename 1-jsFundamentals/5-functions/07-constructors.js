// constructor fuctions -- data structures

let myTV = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "sony",
};

let yourTV = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "samsung",
};

// myTV.refreshRate -- run with dot notation

// constructor function

function TV (screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;

    // method
    this.getDescription = () =>
    `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
}


let firstTV = new TV(80, "led", 80, "LG");

console.log(firstTv.getDescription());


// class --- will encounter in Red Badge
class TV {
    constructor(screenSize, screenType, refreshRate, manufacturer) {
      this.screenSize = screenSize;
      this.screenType = screenType;
      this.refreshRate = refreshRate;
      this.manufacturer = manufacturer;
    }
  ​
    getDescription() {
      return `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
    }
  }


 