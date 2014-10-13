function testJasmine(id, callback){

	$.ajax({
		type: "GET",
		url: 'src/sample.xml',
		dataType: 'xml',
		success: callback
		
	});
	
}


