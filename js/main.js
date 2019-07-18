$("#loginForm").validate({
	rules:{
		key1: {
			required:true,
			minlength:8,
			maxlength:63
		} 
	}, 
	errorPlacement: function ( error, element ) {
		error.insertAfter( element.parent() );
	}
});

function closeWindow( ){
  window.close();
}