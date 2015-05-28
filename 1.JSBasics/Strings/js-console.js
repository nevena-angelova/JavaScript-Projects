

function jsConsole() {

    function jsRead() {

        return parseFloat(document.getElementById("inputStr").value);
    }

    this.jsRead = jsRead;

    function jsReadString() {

        return document.getElementById("inputStr").value;
    }

    this.jsReadString = jsReadString;

    function jsReadSplit(inputId) {

        var inputId = inputId || "inputStr";
        var numStr = document.getElementById(inputId).value;
        var numStrArray = numStr.split(" ");
        var numArray = new Array();

        for (var i in numStrArray) {
            numArray[i] = parseFloat(numStrArray[i]);
        }

        return numArray;
    }

    this.jsReadSplit = jsReadSplit;

    function jsReadSplitString() {

        var numStr = document.getElementById("inputStr").value;
        var splStrArray = numStr.split(" ");
        return splStrArray;
    }

    this.jsReadSplitString = jsReadSplitString;

    function jsWriteLine(text) {

        var p = document.createElement("p");
        p.innerHTML = text;
        document.getElementById("container").appendChild(p);
    }

    this.jsWriteLine = jsWriteLine;

    function jsWrite(text) {

        var textNode = document.createTextNode(text);
        document.getElementById("container").appendChild(textNode);
    }

    this.jsWrite = jsWrite;

    function jsAddBr() {
        var br = document.createElement("br");
        document.getElementById("container").appendChild(br);
    }

    this.jsAddBr = jsAddBr;
}

var jsConsole = new jsConsole();
