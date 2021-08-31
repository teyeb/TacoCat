
//obtain the string from the input
//controller
const getString = ()=>{
    document.getElementById("alert").classList.add("invisible");
   let string = document.getElementById("inputReverse").value;

    if(string.trim().length<2){
        return alert("The input string should be longer than 1!")
    }

    const updatedString = string.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,'');
    //console.log("updatedString : ",updatedString)
    return reverseString(updatedString)
}

 

//concat a new string in reverse
//model 
const reverseString = string=>{
    let reversedString = "";

    //read array in reverse and concat into string
    for(let i = string.length-1; i>=0; i--){
        reversedString += string[i];
    }

    return displayMessage(reversedString,string);
}

//display message with reversed string
//view
const displayMessage = (reversedString,original) =>{
    //grab id of display message paragraph element
    const paragraph = document.getElementById("msg");

    //make it visible

    document.getElementById("alert").classList.remove("invisible");
 

    //console.log(original,': ',reversedString)

    if(original.replace(' ','').toLowerCase() === reversedString.replace(' ','').toLowerCase()){
        return paragraph.innerHTML = `Your reversed string is ${reversedString} and it is a <b style="color:blue">Palindrome</b>-- same in reverse`; 
    }
    return paragraph.innerHTML = `Your reversed string is ${reversedString.replace(' ','')}, but it is not a palindrome`;
}