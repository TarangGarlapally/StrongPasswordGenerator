
function findAppendValue()
{
	//returns a values between [0 , 26)
	return Math.round((Math.random()*25)) ; 
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
function algoP22(userName , dob , userCount)
{
	/*
		parameters : username , date of birth , user count.
		returns password of length 16
	*/
	//removing all spaces and converting to lower case.
	var userName = userName.replace(/ /g,"").toLowerCase();
	//spliting the names into charachters set 
	var listOfChars = userName.split("");
	var k = findAppendValue();
	//returns encrypted characters
	listOfChars  = encrptChars(listOfChars , k) ; 

	//making the lenght 16 by adding or removing chars.
	if(listOfChars.length>16)
    	listOfChars.splice(16,listOfChars.length - 16);
    else if(listOfChars.length<16){
    	tempListOfChars = listOfChars.slice();
    	listOfChars = listOfChars.concat(tempListOfChars.splice(0,16-listOfChars.length));
    }

    //jumbling the items in the list
    listOfChars.sort(() => Math.random() - 0.5);
    //making the first char as Upper Case
    listOfChars[0] = listOfChars[0].toUpperCase();
    listOfChars[10] = listOfChars[10].toUpperCase(); 
    //adding special characters
    let year = parseInt(dob.split("-")[2]) ; 
    listOfChars[1] = String.fromCharCode(((userCount+k)%16)+32);
    listOfChars[2] = String.fromCharCode(((year+k)%16)+32);
    //replacing the 4th chars to its asci digit.
    listOfChars[3] = (listOfChars[3].charCodeAt()%10).toString() ;

    listOfChars.sort(() => Math.random() - 0.5);
    listOfChars = listOfChars.join("");    
    return listOfChars ;  
}

