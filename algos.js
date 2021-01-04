	var pwd="";
	var cnt = 0;
	function validate(e) {
	 // check if input is bigger than 4
	 var value = document.getElementById('name').value;
	 if (value.length < 4) {
	 	alert("Name should be atleast 4 characters long!");
	 }else{
	 	cnt += 1;
	 	generatePwd();
	 }
	 return false; 
	}


	
	function generatePwd(){
		
		var name = document.getElementById("name").value;
		var dob = document.getElementById("dob").value;
		
		if(name){
			var algo_array = [algoK81, algoK82, algoK91, algoK92, algoM01, algoM02, algoP21, algoQ51, algoQ91, algoQ92];
			var algo = algo_array[Math.floor(Math.random() * algo_array.length)]; 

			dob = dob.split("-");
			dob.reverse();
			dob = dob.join("-");
			
			pwd = algo(name,dob,cnt);
			
			document.getElementById("done").hidden = false;
			document.getElementById("copy").hidden = false;
			
		}
	}
	
	function copyToClipboard(){
	  navigator.clipboard.writeText(pwd).then(function() {
	    	alert("Password copied successfully!");
	  	  }, function() {
	  	 	 alert("Failed to copy password!")
  		});

	}