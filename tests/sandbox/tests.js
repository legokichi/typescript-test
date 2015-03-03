(function () {
    QUnit.module('hello');
    QUnit.test('hello test', function (assert) {
        return assert.ok(assert._expr(assert._capt(assert._capt(hoge(1), 'arguments/0/left') === 0, 'arguments/0'), {
            content: 'assert.ok(hoge(1) === 0)',
            filepath: 'tests/tests.js',
            line: 5
        }));
    });
}.call(this));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzLmpzIl0sIm5hbWVzIjpbIlFVbml0IiwibW9kdWxlIiwidGVzdCIsImFzc2VydCIsIm9rIiwiX2V4cHIiLCJfY2FwdCIsImhvZ2UiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFXO0FBQUEsSUFDVkEsS0FBQSxDQUFNQyxNQUFOLENBQWEsT0FBYixFQURVO0FBQUEsSUFHVkQsS0FBQSxDQUFNRSxJQUFOLENBQVcsWUFBWCxFQUF5QixVQUFTQyxNQUFULEVBQWlCO0FBQUEsUUFDeEMsT0FBT0EsTUFBQSxDQUFPQyxFQUFQLENBQVVELE1BQUEsQ0FBQUUsS0FBQSxDQUFBRixNQUFBLENBQUFHLEtBQUEsQ0FBQUgsTUFBQSxDQUFBRyxLQUFBLENBQUFDLElBQUEsQ0FBSyxDQUFMLDJCQUFZLENBQVo7QUFBQSxZQUFBQyxPQUFBO0FBQUEsWUFBQUMsUUFBQTtBQUFBLFlBQUFDLElBQUE7QUFBQSxVQUFWLENBQVAsQ0FEd0M7QUFBQSxLQUExQyxFQUhVO0FBQUEsQ0FBWixDQU9HQyxJQVBILENBT1EsSUFQUiIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgUVVuaXQubW9kdWxlKFwiaGVsbG9cIik7XG5cbiAgUVVuaXQudGVzdChcImhlbGxvIHRlc3RcIiwgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gICAgcmV0dXJuIGFzc2VydC5vayhob2dlKDEpID09PSAwKTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iXX0=
