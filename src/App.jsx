import './App.scss';
import StoryBoardComponent from "./components/dash-boards/story-board/StoryBoardComponent";
import {ThemeUtils} from "./utils/theme/ThemeUtils";

export default function App() {
    document.documentElement.className = ThemeUtils.THEME_NAME_DARK;
    return (
        <div className="app-component">
          <StoryBoardComponent></StoryBoardComponent>
        </div>
    );
}
