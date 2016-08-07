describe('user data', function () {
     it('should retrieve the employees', function () {
          var users = yield data.users.get();

          yield data.users.save({ name: "" });
     })
});