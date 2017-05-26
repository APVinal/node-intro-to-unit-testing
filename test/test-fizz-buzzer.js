'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzbuzzer.js');

describe('fizzBuzzer', function(){
  it('Should return fizz-buzz when given 15', function(){
    fizzBuzzer(15).should.equal('fizz-buzz');
  });
  it('Should return buzz given when 5', function(){
    fizzBuzzer(5).should.equal('buzz');
  });
  it('Should return fizz given when 3', function(){
    fizzBuzzer(3).should.equal('fizz');
  });
  it('Should return given number when not divisble by 15, 5, or 3', function(){
    fizzBuzzer(1).should.equal(1);
    fizzBuzzer(7).should.equal(7);
  });
  it('Should throw error "number is not a value"', function(){
    (function() {
    fizzBuzzer('string');
    }).should.throw(Error);
  });
});