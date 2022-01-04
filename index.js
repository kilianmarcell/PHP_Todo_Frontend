window.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/todos')
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP hiba: " + response.statusText);
            } else {
                return response.json();
            }
        }).then(function(eredmeny) {
            console.log(eredmeny);
        }).catch(function(error) {
            window.alert("Hiba! " + error.message);
        });
});