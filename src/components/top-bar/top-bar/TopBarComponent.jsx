import './TopBarComponent.scss';
import whiteModeBtnIcon from '../../../assets/images/icons/darkmode/white-mode-btn-icon.svg';
import darkModeBtnIcon from '../../../assets/images/icons/darkmode/dark-mode-btn-icon.svg';
import {ThemeUtils} from "../../../utils/theme/ThemeUtils";

export default function TopBarComponent() {
    return(
        <div className={"app-top-bar"}>
            <button className={"dark-mode-btn"} onClick={toggleDarkMode}>
                <span className={"dark-mode-btn-light-icon"}><img src={whiteModeBtnIcon}/></span>
                <span className={"dark-mode-btn-dark-icon"}><img src={darkModeBtnIcon}/></span>
            </button>
        </div>
    );
}

function toggleDarkMode() {
    ThemeUtils.toggleTheme();
}
