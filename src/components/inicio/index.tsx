import "./inicio.css"
import letterzap from "../../img/letterzap.png"
import mapa from "../../img/mapa.png"
import artigos from "../../img/artigos.png"
import linkedin from "../../img/linkedin.png"
import github from "../../img/github.png"
import pokeTeam from "../../img/poketeam.png"

const Inicio = () => {
  return (
    <div className="apresentacao">
      <section className="apresentacao__section">
        <h1 className="apresentacao__nome">Me chamo Victor Henrique</h1>
        <p>
          Tenho 19 anos, e atualamento estou estudando análise e desenvovilemento de sistemas, tenho expêriencia em desenvovilemento,
          testes e manutenção de sites, também ja fiz um curso de dois anos em técnico de informática, na qual aprendi a hardware, softwares como
          (Word, Power Point, Excel, MySQL), rede de computares e banco de dados
        </p>
        <div className="apresentacao__socialMedia">
          <div>
            <img src={linkedin} alt="linkedin logo"/>
            <a href="https://www.linkedin.com/in/victor-henrique-042267205/">Linkedin</a>
          </div>
          <div>
            <img src={github} alt="github logo" />
            <a href="https://github.com/VictorHenrique48321">Github</a>
          </div>
        </div>
      </section>
      <section className="projetos">
        <h1 className="apresentacao__nome" style={{"color": "white"}}>Projetos</h1>
        <div className="projetos__lista">
          <div className="projetos__projeto">
            <a href="https://reactreacting.netlify.app/">
              <img src={pokeTeam} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Poketeam</p>
            <p className="paragrafo">Mostra todos os ataques de um pokemon, indepedente da versão ou geração</p>
            <p className="paragrafo" style={{"color": "#00d2df"}}>Tecnologias: React, TypeScript e HTML</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://letterzap.netlify.app/">
              <img src={letterzap} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Letroca</p>
            <p className="paragrafo">Receba letras aleátorias e tente formar o maior numero de palavras</p>
            <p className="paragrafo" style={{"color": "#00d2df"}}>Tecnologias: React, Node, Material-UI e HTML</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://shareenergy.netlify.app/">
             <img src={artigos} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Artigos</p>
            <p className="paragrafo">Site de artigos relacionados ao espaço, tendo opções de filtrar por data e título</p>
            <p className="paragrafo" style={{"color": "#00d2df"}}>Tecnologias: React, Node, Material-UI, Spaceflight API e HTML</p>
          </div>
          <div className="projetos__projeto">
            <a href="https://estagioteste.netlify.app/">
              <img src={mapa} alt="" className="projetos__img"/>
            </a>
            <p className="paragrafo">Localizadores</p>
            <p className="paragrafo">Mapa que mapeia a localização, rotas e condições dos veículos </p>
            <p className="paragrafo" style={{"color": "#00d2df"}}>Tecnologias: React, Sass, Leaflet, Eslint, TypeScript e HTML </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio