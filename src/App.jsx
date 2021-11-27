import './App.scss';
import {ThemeUtils} from "./utils/theme/ThemeUtils";
import BaseLayoutComponent from "./layouts/base-layout/BaseLayout";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import WeddingLayoutComponent from "./layouts/wedding-layout/WeddingLayout";

export default function App() {
    document.documentElement.className = ThemeUtils.THEME_NAME_DARK;
    return (
        <div className={"app-component d-flex"}>
            <div className={"col-12 mx-auto"}>
                <Router>
                    <Routes>
                        <Route exact path='' element={<BaseLayoutComponent/>}></Route>
                        <Route exact path='/wedding' element={<WeddingLayoutComponent/>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}
