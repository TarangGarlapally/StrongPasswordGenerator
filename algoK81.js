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


function algoK81(name,dob,user_count){

    /*
       Function Description:
       Has two parameters: name:string and dob:string and user_count:int
       returns password of length 16.
    */

    //seperating date,month,year from dob
    let date = parseInt(dob.split("-")[0])
    let month = parseInt(dob.split("-")[1])
    let year = parseInt(dob.split("-")[2])
    //removing all spaces in name and converting name to lowercase
    name = name.replace(/ /g,"").toLowerCase();

    //converting string name to an array of characters in the name.
    var listOfChars = name.split("");

    //randomizing the array of characters
    listOfChars.sort(() => Math.random() - 0.5);
    

    //making the length of array 16, by removing or adding characters as necessary
    if(listOfChars.length>16)
    	listOfChars.splice(16,listOfChars.length - 16);
    else if(listOfChars.length<16){
    	tempListOfChars = listOfChars.slice();
    	listOfChars = listOfChars.concat(tempListOfChars.splice(0,16-listOfChars.length));
    }


    //replacing first 3 characters with numbers(as strings)
    listOfChars[0] = NumToSingle(date);
    listOfChars[1] = NumToSingle(month);
    listOfChars[2] = NumToSingle(year);


    //replacing next 2 characters with uppercase versions of themselves
    listOfChars[3] = listOfChars[3].toUpperCase();
    listOfChars[4] = listOfChars[4].toUpperCase();

    //relacing the next 2 characters with special characters
    listOfChars[5] = String.fromCharCode((user_count%16)+32);
    listOfChars[6] = String.fromCharCode(((parseInt(listOfChars[0])+parseInt(listOfChars[1])+parseInt(listOfChars[2]))%16)+32);

    //randomizing the array of characters again
    listOfChars.sort(() => Math.random() - 0.5);

    return listOfChars.join("");

}