(function() {
  QUnit.module("hello");

  QUnit.test("hello test", function(assert) {
    return assert.ok(hoge(1) === 1, "Passed!");
  });

}).call(this);
