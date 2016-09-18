describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return false if value is not contained in the set', function() {
    set.add('Danny Glover');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // extra tests to handle different key types
  it('should handle numbers as keys', function() {
    set.add(2);
    expect(set.contains(2)).to.equal(true);
  });

  it('should handle booleans as keys', function() {
    set.add(true);
    expect(set.contains(true)).to.equal(true);
  });

  xit('should handle arrays as keys', function() {
    set.add([1, 2]);
    expect(set.contains([1, 2])).to.equal(true);
  });

  xit('should handle functions as keys', function() {
    set.add(function() {
      return true;
    });
    expect(set.contains(function() {
      return true;
    })).to.equal(true);
  });
});
