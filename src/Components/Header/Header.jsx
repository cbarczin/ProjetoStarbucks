import {Link} from "react-router-dom"
import logo from "../../assets/images/logo 2.png"
import { HeaderStyle } from "./style";

export default function Header() {
    return (
        <header>
            {/*<img src="src/assets/images/logo 2.png" alt="logomarca" />*/}
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}