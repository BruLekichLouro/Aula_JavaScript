
function botao(){
    document.getElementById("agradecimento").innerHTML="Obrigada por clicar";
}
function redirecionar(){
    window.open("https://www.google.com.br/");
   // window.location.href ="https://www.google.com.br/";
}
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML ="Obrigada por passar o mouse"
   elemento.innerHTML="Obrigada por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui"
    elemento.innerHTML="Passe o mouse aqui"
}
function load(){
    alert("Página carregada");
}
function mudar(elemento){
    console.log(elemento.value)
}



/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

var idade = prompt("Qual suaidade?");
alert(validaIdade(idade));

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 5));

var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());

for(count = 0; count <=5; count++){
    alert(count);
};

var count =0;
while(count <= 5){
    console.log(count);
    count ++;
}

var idade = prompt("Qual sua idade?");
if(idade>18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
    }

var nome = "Bruna Louro";
var idade = 37;
alert(nome + " tem " + idade + " anos");

var frase = "O Brasil tem o melhor time";
alert(frase.replace("Brasil", "Japão"));

var lista = ["maçã", "pera", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));

var frutas = [{nome: "Maçã", cor: "vermelha"}, {nome: "maçã", cor:"roxa"}]
console.log(frutas[1].nome);*/
