function NumToSingle(num){
	/*
	    Function Description:
        Has one parameter: num:int
        returns single digit num
	*/
	var sum = num;
	while(sum/10>=1){
		sum = 0;
		while(num>0){
			sum += num%10;
			num = Math.floor(num/10);
		}
		num = sum;
	}
	return sum.toString();
}


function algoK82(name,dob,user_count){

    /*
       Function Description:
       Has two parameters: name:string and dob:string and user_count:int
       returns password of length 16.
    */

    //seperating date,month,year from dob
    let date = parseInt(dob.split("-")[0])
    let month = parseInt(dob.split("-")[1])
    let year = parseInt(dob.split("-")[2])


    var password = "";

    //getting characters from date, month, year and user_count
    password += String.fromCharCode(parseInt(NumToSingle(date))+97);
    password += String.fromCharCode(parseInt(NumToSingle(month))+97);
    password += String.fromCharCode(parseInt(NumToSingle(year))+107);
    password += String.fromCharCode(parseInt(NumToSingle(user_count))+107);

    //removing all spaces in name and converting name to uppercase
    name = name.replace(/ /g,"").toUpperCase();

    //converting string name to an array of characters in the name.
    var listOfChars = name.split("");

    //randomizing the array of characters
    listOfChars.sort(() => Math.random() - 0.5);

    //making the length of array 12, by removing or adding characters as necessary
    if(listOfChars.length>12)
        listOfChars.splice(12,listOfChars.length - 12);
    else if(listOfChars.length<12){
        tempListOfChars = listOfChars.slice();
        listOfChars = listOfChars.concat(tempListOfChars.splice(0,12-listOfChars.length));
    }

    //randomizing the array of characters
    listOfChars.sort(() => Math.random() - 0.5);

    //adding first 4 characters of list of chars to password
    password += listOfChars[0];
    password += listOfChars[1];
    password += listOfChars[2];
    password += listOfChars[3];


    //getting ascii values of next 4 characters and converting them to single digit and appending them to password
    listOfChars = listOfChars.join(""); 
    password += NumToSingle(listOfChars.charCodeAt(4));
    password += NumToSingle(listOfChars.charCodeAt(5));
    password += NumToSingle(listOfChars.charCodeAt(6));
    password += NumToSingle(listOfChars.charCodeAt(7));

    //getting ascii values of next 4 characters and converting them to single digit
    //getting special character from those single digits and appending them to password
    password += String.fromCharCode(parseInt(NumToSingle(listOfChars.charCodeAt(8)))+32);
    password += String.fromCharCode(parseInt(NumToSingle(listOfChars.charCodeAt(9)))+32);
    password += String.fromCharCode(parseInt(NumToSingle(listOfChars.charCodeAt(10)))+32);
    password += String.fromCharCode(parseInt(NumToSingle(listOfChars.charCodeAt(11)))+32);

    return password;

}