function converterBases(event) {
   let origem = event.target.id;
   let valor = event.target.value;

   if (valor == "") {
       document.getElementById("decimal").value = "";
       document.getElementById("octal").value = "";
       document.getElementById("hex").value = "";
       document.getElementById("binary").value = "";
       return;
   }

   let decimal;

       let bases = { decimal: 10, octal: 8, hex: 16, binary: 2 };
       decimal = parseInt(valor, bases[origem]);

       if (isNaN(decimal)) return;

       document.getElementById("decimal").value = decimal;
       document.getElementById("octal").value = decimal.toString(8);
       document.getElementById("hex").value = decimal.toString(16).toUpperCase();
       document.getElementById("binary").value = decimal.toString(2);
   
}

// Adiciona o evento a todos os inputs
document.querySelectorAll("input").forEach(input => {
   input.addEventListener("input", converterBases);
});

// Seleciona o switch
const switchInput = document.getElementById('switch');

// Verifica se o modo escuro está ativado no localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    switchInput.checked = true; // Marca o switch como ativado
}

// Adiciona o evento de mudança ao switch
switchInput.addEventListener('change', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Salva a preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});