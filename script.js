// Remove the "interest-cohort" feature from the Permissions-Policy header
const headers = new Headers({
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
});

// Make a fetch request with the updated headers
fetch('https://muraliac.github.io/coursera-module-4/', {
  headers: headers
})
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle the error
  });

(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        }
        else {
            helloSpeaker.speak(names[i]);
        }
    }

})();
