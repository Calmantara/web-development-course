// 1. testing
    // bugs: menjaga code quality
    // bagaimana kita menulis code, dengan minimum bug
// 2. jenis jenis testig
    // unit test
    // integration test
    // etc


// TDD => Test Driven Development
function add(a, b){
    if (a === null) {
        return b
    }    
    return a + b
}

QUnit.module('add', function() {
    QUnit.test('two numbers', function(assert) {
      assert.equal(add(1, 2), 3);
      assert.equal(add(null, 2), 2);
    });
  });

// TDD example
function sub(a, b){
    return a - b
}

QUnit.module("sub", () => {
    QUnit.test("two numbers", (assert) => {
        assert.equal(sub(3, 2), 1)
        assert.equal(sub(-2, 2), -4)
        assert.equal(sub(3, null), 3)
    })
})