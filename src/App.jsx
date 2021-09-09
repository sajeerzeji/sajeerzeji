import './App.scss';
import {ThemeUtils} from "./utils/theme/ThemeUtils";
import BaseLayoutComponent from "./layouts/base-layout/BaseLayout";

export default function App() {
    document.documentElement.className = ThemeUtils.THEME_NAME_DARK;
    return (
        <div className={"app-component d-flex"}>
            <div className={"col-12 mx-auto"}>
                <BaseLayoutComponent></BaseLayoutComponent>
            </div>
        </div>
    );
}
