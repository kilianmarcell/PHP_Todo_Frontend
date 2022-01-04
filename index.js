window.addEventListener('DOMContentLoaded', function() {
    let promise = fetch('http://localhost:8080/todos');
    console.log(promise);
});