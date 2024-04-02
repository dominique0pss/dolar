function converter() {
const valor = document.getElementById("valor").value;
const conversor = valor / 5;
document.getElementById(rs).textContent = conversor;
}









const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener('click', function(){
body.classList.toggle('dark-mode');

}
)