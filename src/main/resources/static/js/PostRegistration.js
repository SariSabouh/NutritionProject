$( document ).ready(function() {
	
	var url = window.location;
	
	
    $("#registrationForm").submit(function(event) {
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    
    	var customer = {
    			firstName : $("#firstName").val(),
    			lastName : $("#lastName").val(),
    			dateOfBirth : $("#dob").val(),
    			Phone : $("#Phone").val(),
    			Height : $("#Height").val(),
    			Weight : $("#Weight").val()
    			
    	}
    	
    	var coach ={
    			firstName : $("#firstName").val(),
    			lastName : $("#lastName").val(),
    			dateOfBirth : $("#dob").val(),
    			Phone : $("#Phone").val(),
    	}
    	
    	var user = {
    			email: $("#email").val(),
    			password : $("#password").val()
    	}
    	
    	var payment = {
    			
    			accountNumber : $("#accountNumber").val()
    	}
    	
    	var medical = {
    			
    			nameOfMedical : $("#nameOfMedical").val()
    	}
    	
    	var subscribtion = {
    			subscribtion : $("#packageName")
    	}
    		
   	
    		
    		
    	
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "post",
			data : JSON.stringify({
				user : user,
				customer : customer ,
				coach: coach ,
				payment : payment , 
				medical : medical,
				subscribtion : subscribtion
				
			}),
		
			dataType : 'json',
			success : function(result) {
				if(result.status == "Done"){
					console.log("alf bdoon 7lf");
		
				}else{
					console.log("yl3n 3rd 2l ajax");
				}
				
				console.log(result);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();

    }
    
    function resetData(){
    	
    	$("#email").val("");
    	$("#password").val("");
    
    }
})