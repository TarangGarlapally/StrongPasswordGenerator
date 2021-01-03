
function findAppendValue(dob , userCount)
{
	//returns a values between [0 , 26)

	let date = parseInt(dob.split("-")[0]) ; 
    let month = parseInt(dob.split("-")[1]) ; 
    var dateObj  = new Date() ; 
    var time = dateObj.getHours() + dateObj.getMinutes() + dateObj.getSeconds() ; 
    return (date+month+userCount+time)%26  ; 
}
function encrptChars(listOfChars , k ){

	
	for (var i = 0; i < listOfChars.length; i++) {
		
		var val = listOfChars[i] ; 
		var asciVal  = val.charCodeAt()-97;
		var newVal =  97 + (asciVal + k)%(26) ; 
		listOfChars[i] = String.fromCharCode(newVal) ;  

	}

	return listOfChars ; 
}
function algoP21(userName , dob , userCount)
{
	/*
		parameters : username , date of birth , user count.
		returns password of length 16
	*/
	//removing all spaces and converting to lower case.
	var userName = userName.replace(/ /g,"").toLowerCase();
	//spliting the names into charachters set 
	var listOfChars = userName.split("");
	var k = findAppendValue(dob , userCount);
	//returns encrypted characters
	listOfChars  = encrptChars(listOfChars , k) ; 

	//making the lenght 16 by adding or removing chars.
	if(listOfChars.length>16)
    	listOfChars.splice(16,listOfChars.length - 16);
    else if(listOfChars.length<16){
    	tempListOfChars = listOfChars.slice();
    	listOfChars = listOfChars.concat(tempListOfChars.splice(0,16-listOfChars.length));
    }
    listOfChars.sort(() => Math.random() - 0.5);
    //making the first char as Upper Case
    listOfChars[0] = listOfChars[0].toUpperCase();

    //adding special characters
    let year = parseInt(dob.split("-")[2]) ; 
    listOfChars[1] = String.fromCharCode(((userCount+k)%16)+32);
    listOfChars[2] = String.fromCharCode(((year+k)%16)+32);
    //replacing the 4th chars to its asci digit.
    listOfChars[3] = (listOfChars[3].charCodeAt()%10).toString() ;
    listOfChars = listOfChars.join("");    
    return listOfChars ;  
}
