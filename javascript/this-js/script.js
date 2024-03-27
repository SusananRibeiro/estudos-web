function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function() {
        setTimeout(function() {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }  
    
    
    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    } 
}

const aluno1 = new aluno("Susana", 100);
aluno1.dados_anonimo(); // undefined undefined --> o this não funciona dentro da função 
aluno1.dados_arrow(); // Susana 100 --> o this funciona dentro da função arrow