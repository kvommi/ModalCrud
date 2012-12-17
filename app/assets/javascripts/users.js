$(document).ready(function(){ 
	
	
	
	$( "#create-user" )
            .button()
            .click(function() {
            	//alert("hello");
                $( "#form" ).dialog( "open" );
            });
    
    	$( "#edit-user" )
            .click(function() {
            	//alert("hello");
                $( "#form" ).dialog( "open" );
            });
    
            $( "#form" ).dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            closeOnEscape: true,
            resizable:false,
            buttons: {
                "Create an account": function() {
                        $("#new_user").submit();
                        $( this ).dialog( "close" );
                        $("#new_user")[0].reset();
                },
                Cancel: function() {
                	$("#new_user")[0].reset();
                    $( this ).dialog( "close" );
                }
            }
        })
        
        
        $( "#update-form" ).dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            closeOnEscape: true,
            resizable:false,
            buttons: {
                "Update an account": function() {
                    $(".edit_user").submit();
                   $(".new_user")[0].reset();
                   $( this ).dialog( "close" );
                },
                Cancel: function() {
                	$("#new_user")[0].reset();
                    $( this ).dialog( "close" );
                }
            }
        })
    
});