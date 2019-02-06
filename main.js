//refrences to inputs value fields
let characterInput = document.getElementById("character")
let numberInput = document.getElementById("number")
//refrence to the button
let makeTreeButton = document.getElementById("treeMakingButton")
//refrence to both inputs
let inputAreas = document.getElementById("inputs")
//refrence to a space, used to create the pyramid
const space = " "

//function to create object with values taken from user input
let inputObject = (userNumber, userSymbol) => {
    return {
        height: parseInt(userNumber),
        symbol: userSymbol
    }
}

//function to print a tree to the console
let treeCreator = (object) => {
//variable to represent twice the height value
    let doubleUp = object.height * 2
    //loops a number of times equal to double the height key
    for (let index = 0; index < doubleUp; index++) {
        //if the key value is even
        if (index % 2 === 0) {
            //console log a space -repeated as many times as the value of the height key- followed by the value of the symbol key -repeated as many times as the value of the current index + 1- results in each level having 2 more symbols than the last
            console.log(space.repeat(object.height) + object.symbol.repeat((parseInt(index + 1))))
            //decreases the value of the height key by one
            object.height--
        }
    }
}

//NOTE: refactor the input blank, and input number chekcing logic into functions

//event listener on text input areas on key press
inputAreas.addEventListener('keypress', event => {
    //if the enter button is pressed
    if (event.keyCode === 13) {
        //capture the user input values
        let chosenCharacter = characterInput.value
        let chosenNumber = numberInput.value
        //if they are not blank
        if (chosenNumber !== "" && chosenCharacter !== "") {
            //create an object with the user input values as the key values
            let userObject = inputObject(chosenNumber, chosenCharacter)
            //if the height value is not a number, alert
            if (isNaN(userObject.height)) { alert("Please enter a number") }
            //if height value is 1 or less alert
            else if (userObject.height <= 1) { alert("Please enter a number greater than 1") }
            //if none of the condidtions are met, runt he tree creator function
            treeCreator(userObject)
        }
        //if the fields are blank alert
        else (alert("Please do not leave fields blank!"))
    }
})

//event listener on button
makeTreeButton.addEventListener("click", () => {
    //capture user input values
    let chosenCharacter = characterInput.value
    let chosenNumber = numberInput.value
    //if they are not blank
    if (chosenNumber !== "" && chosenCharacter !== "") {
        //create an object with the user input values as the key values
        let userObject = inputObject(chosenNumber, chosenCharacter)
        //if the height value is not a number, alert
        if (isNaN(userObject.height)) { alert("Please enter a number")}
        //if height value is 1 or less alert
        else if (userObject.height <= 1) { alert("Please enter a number greater than 1")}
        //if none of the conditions are met, run the tree creator function
        treeCreator(userObject)
    }
    //if the fields are blank, alert
    else (alert("Please do not leave fields blank!"))
})




