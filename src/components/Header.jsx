function Header({ title, bgcolor = "green" }) {
  return <h2 style={{ backgroundColor: bgcolor }}>{title}</h2>;
}

export default Header;
