const app = "I don't do much.";

getFriends() {
  fetch('http://api.example.com/1382/friends')
    .then(function (response) {
      return response.json();
    })
    .then(function (friends) {
      this.friends = friends;
    }.bind(this));
}
