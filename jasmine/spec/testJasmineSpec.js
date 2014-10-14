describe("should test backbone",function(){

	//var HelloView = testr('js/script.js',{});

	it("h1 exist",function(){

	var helloView = new HelloView();	

	var el = $('body h1').is(":visible");
	expect(el).toBe(true);



	});
});