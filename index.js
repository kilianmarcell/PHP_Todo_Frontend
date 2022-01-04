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
            let lista = document.getElementById("lista");
            eredmeny.forEach(function(element) {
                let li = document.createElement('li');
                li.innerHTML = element.text;
                lista.appendChild(li);
            });
        }).catch(function(error) {
            window.alert("Hiba! " + error.message);
        });
});