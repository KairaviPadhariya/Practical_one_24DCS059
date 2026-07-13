function Header({ name }) {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-name">{name}</span>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
