// Requiring our models and chai module
var Theory = require("../models/theory");
var expect = require("chai").expect;

// Test to see if I can create a new Theory.  Passed!!
describe("Theory", function() {
 describe("new", function() {
  it("initializes a new theory", function() {
      var theoryish = new Theory();
        expect(typeof(theoryish)).to.equal("object");
 describe ("new", function() {
  it ('should check obect for properties', function(){
  	  var theoryish = new Theory();
  	  expect(theoryish).to.have.property('title');
  });
  });
});

    });
});
       



   