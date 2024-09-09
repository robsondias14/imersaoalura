function pesquisar() {
  let section = document.getElementById("resultados-pesquisa")
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  //Se campoPesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "Nada foi encontrado"
    return
  }

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  //para cada dado dentro da lista de dados
  for (let dado of dados) {
          // se titulo includes campoPesquisa 
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
      //Cria um novo elemento 
      resultados += `
          <div class="item-resultado">
                      <h2>
                      <a href="#" target="_blank">${dado.titulo}</a>
                      </h2>
                      <p class="descricao-meta">${dado.descricao}</p>
                      <a href=${dado.link} target="_blank">Mais informações</a>
                    </div>
      `;
    }   
  }
  //atribui os resutados gerados a seção HTML
  section.innerHTML = resultados
}
