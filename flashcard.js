// Load required node packages
var request = require('request');

// Build the BasicCard constructor
function BasicCard(cardFront, cardBack) {
    this.cardFront = cardFront;
    this.cardBack = cardBack;
}

// Create and then log a new basic card.
var JayZFirstAlbum = new BasicCard("What was the name of Jay-Z\'s first album?", "Reasonable Doubt");

console.log("");
console.log("");
console.log("Basic Card Output is Below:");
console.log("---------------");
console.log("Full Object: ", JayZFirstAlbum);
console.log("---------------");
console.log("Card Front: ", JayZFirstAlbum.cardFront);
console.log("---------------");
console.log("Card Back: ", JayZFirstAlbum.cardBack);
console.log("---------------");
console.log("");
console.log("");

var partial;

// Build the ClozeCard constructor
function ClozeCard(fullText, clozeText) {
    this.fullText = fullText;
    this.clozeText = clozeText;
    this.partialText = function() {
        this.fullTextWords = fullText.split(" ");
        this.clozeTextWords = clozeText.split(" ");
        this.partialTextArray = [];
        for (var i = this.clozeTextWords.length; i < this.fullTextWords.length; i++) {
            this.partialTextArray.push(this.fullTextWords[i]);
        }
        return this.partialTextArray.join(" ");
    };
    this.partial = this.partialText();
};

// Create and then log a new cloze card.
var WhoIsJayZ = new ClozeCard("Jay Z is a rapper and mogul.", "Jay Z");

console.log("Cloze Card Output is Below:");
console.log("---------------");
console.log("Full Text: ", WhoIsJayZ.fullText);
console.log("---------------");
console.log("Cloze Text: ", WhoIsJayZ.clozeText);
console.log("---------------");
console.log("Partial Text: ..." + WhoIsJayZ.partial);
console.log("---------------");
