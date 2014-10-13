describe("should execute the callback function on success",function(){

	it("xml ok",function(){

		spyOn($,"ajax").and.callFake(function(options){
			options.success();
		});


		var callback = jasmine.createSpy();
		testJasmine('',callback);
		expect(callback).toHaveBeenCalled();


	});
});