document.querySelector("input").addEventListener("input", function(input) {
    document.getElementById("say").textContent = input.target.value;
})
