import "./Header.css";
import { SocialIcon } from 'react-social-icons'

function Header() {
    return (
        <div className="header">
            <h1 className="header__title"> Dog Facts </h1>
            <SocialIcon className="header__twitterLogo" network="twitter" url="https://twitter.com/MokoSharma" />
        </div>
    )
}

export default Header
