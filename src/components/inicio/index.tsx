import "./inicio.css"
import testes from "../../img/testes.png"
import letterzap from "../../img/letterzap.png"
import mapa from "../../img/mapa.png"
import artigos from "../../img/artigos.png"

const Inicio = () => {
  return (
    <div className="apresentacao">
      <section>
        <h1 className="apresentacao__nome">Me chamo Victor Henrique</h1>
        <p className="apresentacao__objetvio">
          Tenho 19 anos, e atualamento estou estudando análise e desenvovilemento de sistemas, tenho expêriencia em desenvovilemento,
          testes e manutenção de sites, também ja fiz um curso de dois anos em técnico de informática, na qual aprendi a hardware, softwares como
          (Word, Power Point, Excel, MySQL), rede de computares e banco de dados
        </p>
      </section>
      <section className="projetos">
        <h1 className="apresentacao__nome">Projetos</h1>
        <div className="projetos__lista">
          <div className="projetos__projeto">
            <a href="https://reactreacting.netlify.app/">
              <img src={testes} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Benchmark</p>
            <p className="paragrafo">Finalize os testes, e receba uma pontuação baseada na sua perfomace</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://letterzap.netlify.app/">
              <img src={letterzap} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Letroca</p>
            <p className="paragrafo">Receba letras aleátorias e tente formar o maior numero de palavras</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://shareenergy.netlify.app/">
             <img src={artigos} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Artigos</p>
            <p className="paragrafo">Site de artigos relacionados ao espaço, tendo opções de filtrar por data e título</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://estagioteste.netlify.app/">
              <img src={mapa} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Localizadores</p>
            <p className="paragrafo">Mapa que mapeia a localização, rotas e condições dos veículos </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio