import "./header.css"

const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <a href="https://github.com/VictorHenrique48321" style={{"textDecoration": "none", "color": "white"}}>
          <h1 className="header__categoria">Github</h1>
        </a>
        <a href="https://www.linkedin.com/in/victor-henrique-042267205/" style={{"textDecoration": "none", "color": "white"}}>
          <h1 className="header__categoria">Linkedin</h1>
        </a>
      </nav>
    </header>
  )
}

export default Header