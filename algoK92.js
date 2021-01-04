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

function algoK92(name,dob,user_count){
 /*
    Function Description:
    Has two parameters: name:string and dob:string and user_count:int
    returns password of length 10.
 */
    dob=dob.replace(/-/g,"");
    
    let password = "";
    
    //special character list
    var spl_char = "@#$_()!";
    
    //removing all spaces in name and converting name to lowercase
    name = name.replace(/ /g,"").toLowerCase();

    //adding 1st character from name randomly 
    password += name.charAt(0).toUpperCase();

    //adding 2nd character randomly from name
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();

    //adding 3rd character randomly from name
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();

    //adding 4th character as number from dob
    password += dob.charAt(Math.floor(Math.random() * dob.length));

    //adding 5th character as number from dob
    password += dob.charAt(Math.floor(Math.random() * dob.length));

    //adding 6th character as special character
    password += spl_char.charAt(Math.floor(Math.random() * spl_char.length));  

    //adding 7th character randomly from name
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();

    //adding 8th character randomly from name
    password += name.charAt(Math.floor(Math.random() * name.length)).toLowerCase();

    //adding 9th character randomly from name
    password += name.charAt(Math.floor(Math.random() * name.length)).toUpperCase();

    //adding 10th character as number from dob
    password += dob.charAt(Math.floor(Math.random() * dob.length));

    //adding 11th character from name
    password += String.fromCharCode((user_count%16)+32);

    
    //return password
    return password;
    
    }
