const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois");
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    const comandos = document.createElement("div");
    comandos.setAttribute("class","comandos");
    
    const radioBotao = document.createElement("input");
    radioBotao.setAttribute("type","radio")
    radioBotao.setAttribute("name","rb_curso");

    comandos.appendChild(radioBotao);

    novoElemento.appendChild(comandos);

    return novoElemento;
}

cursos.map((elemento, chave)=>{
    const novoElemento = criarNovoCurso(elemento);
    caixaCursos.appendChild(novoElemento);
    indice++;
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    const radioSelecionado=todosRadios.filter((elemento, indice, array) => {
        return elemento.checked;
    })
    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click", (evento) => {
    const radioSelecionadoConst = radioSelecionado();
    try{
        const cursoSelecionado= radioSelecionadoConst.parentNode.previousSibling.textContent;
        alert("Curso selecionado: " + cursoSelecionado);
    }catch(ex){
        alert("Selecione um curso");
    }
})

btnRemoverCurso.addEventListener("click", (evento) => {
    const radioSelecionadoConst = radioSelecionado();
    if(radioSelecionadoConst != undefined){
        const cursoSelecionado = radioSelecionadoConst.parentNode.parentNode;
        cursoSelecionado.remove();
    }else{
        alert("Selecione um curso");
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
    const radioSelecionadoConst = radioSelecionado();
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = radioSelecionadoConst.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado);
        }else {
            alert("Digite o nome do curso");
        }
    }catch(ex){
        alert("Selecione um curso");
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
    const radioSelecionadoConst = radioSelecionado();
    try{
        if(nomeCurso.value != "") {
            const cursoSelecionado = radioSelecionadoConst.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
        }else{
            alert("Digite o nome do curso");
        }
    } catch(ex){
        alert("Selecione um curso");
    }
})
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling