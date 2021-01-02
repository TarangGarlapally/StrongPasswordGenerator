function algoQ92(name,dob,user_count){
    /*
       Function Description:
       Has two parameters: name:string and dob:string and user_count:int
       returns password of length 16.
    */
       
       //current date and month number
       var d = new Date();
       var n = d.getSeconds();
       let password = ""
   
       //seperating date,month,year from dob
       let date = parseInt(dob.split("-")[0])
       let month = parseInt(dob.split("-")[1])
       let year = parseInt(dob.split("-")[2])

       //Get characters from name with indices date,month,year % length(name) +1 and add them to password
       let char1 = name[(date % name.length)-1].toUpperCase()
       let char2 = name[(month % name.length)-1].toUpperCase()
       let char3 = name[(year % name.length)-1].toUpperCase()
       
       password += char1+char2+char3

       //Get ascii values of those characters and convert them into single digit 
       let ascii1 = char1.charCodeAt(0)
       let ascii2 = char2.charCodeAt(0)
       let ascii3 = char3.charCodeAt(0) 
       while(ascii1>10 || ascii2>10 || ascii3>10){
           if (ascii1>10)
             ascii1 = parseInt(ascii1.toString().split("")[0]) + parseInt(ascii1.toString().split("")[1])
           if (ascii2>10)
             ascii2 = parseInt(ascii2.toString().split("")[0]) + parseInt(ascii2.toString().split("")[1])
           if (ascii3>10)
            ascii3 = parseInt(ascii3.toString().split("")[0]) + parseInt(ascii3.toString().split("")[1])
       }
       
       //Get the special symbols for these ascii values +35
       let spec1 = String.fromCharCode(ascii1+35)
       let spec2 = String.fromCharCode(ascii2+35)
       let spec3 = String.fromCharCode(ascii3+35)
   
       //Add these specials to password
       password += spec1+spec2+spec3

       //Add these ascii values with timetamp(seconds)
       let n1 = char1.charCodeAt(0) + n
       let n2 = char2.charCodeAt(0) + n
       let n3 = char3.charCodeAt(0) + n
       console.log(n1,n2,n3)          
       //Add these numbers to password each should be a triple digit number
       if (n1.toString().length<3){
           n1 = "0"+n1.toString()
       }
       else{
           n1 = n1.toString()
       }
       if (n2.toString().length<3){
           n2 = "0"+n2.toString()
       }
       else{
           n2 = n2.toString()
       }
       if (n3.toString().length<3){
           n3 = "0"+n3.toString()
       }
       else{
           n3 = n3.toString()
       }

       password += n1+n2+n3

       //Get special using user_count and add it to password
       let spec4 = String.fromCharCode((user_count%16)+32)

       password += spec4


   
       //return password
       return password
   
    
   }
   