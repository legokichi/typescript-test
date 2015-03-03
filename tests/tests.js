(function() {
  QUnit.module("hello");

  QUnit.test("hello test", function(assert) {
    return assert.ok(hoge(1) === 0);
  });

}).call(this);
