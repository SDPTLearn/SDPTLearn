import { SearchBar } from "./SearchBar";

export function NavbarGuest() {
  return (
    <nav>
        <a href="/"> <img src="/images/SDPTLearnLogo.png" alt="Logo" className="logo-nav" /></a>
      <SearchBar />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/learn">Learn</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login" className="nav-login">Log In</a></li>
      </ul>
    </nav>
  );
}
