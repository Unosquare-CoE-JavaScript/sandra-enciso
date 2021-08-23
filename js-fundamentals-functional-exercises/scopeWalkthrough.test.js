describe('Scope Exercises', function(){
  var ACTUAL;
  
  //This resets the value of ACTUAL (to null) before each test is run
  beforeEach(function(){
    ACTUAL = null;
  });
  
  it('a function has access to its own local scope variables', function(){
    var fn = function () {
      var name = 'inner';
      ACTUAL = name;
    }
    fn();
    expect(ACTUAL === 'inner')
  });
  
  it('inputs to a function are treated as local scope variables', function () {
    var fn = function (name) {
      ACTUAL = name;
    };
    fn('inner');
    expect(ACTUAL === 'inner').to.be.true;
  });
  
  it('block scope can be created with let', function(){
    var fn = function () {
      var where = 'outer';
      {
        let where = 'inner'
      }
      ACTUAL = where
    };
    fn();
    expect(ACTUAL === 'outer').to.be.true;
  });
  
  it('a functions local scope variables are not available anywhere outside that funtion', function(){
    var firtsFn = function () {
        var localToFirstFn = 'inner';
    };
    firstFn();
    expect(function () {
      ACTUAL =localToSirstFn;
    }).to.throw();
    expect(ACTUAL === '???').to.be.true;
  })
  
})