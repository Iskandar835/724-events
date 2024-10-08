import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

function ContactLink() {
  (window.location.href = "#contact")
}

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={ContactLink}>
      Contact
    </Button>
  </nav>
);

export default Menu;
