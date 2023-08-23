function printHelloWorld() {
    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello world watch!";

    document.body.appendChild(h1);
}

module.exports = { printHelloWorld };