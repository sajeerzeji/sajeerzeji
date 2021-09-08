import './StoryBoardComponent.scss';
import {Button, Card, Row} from "react-bootstrap";
import {ThemeUtils} from "../../../utils/theme/ThemeUtils";

export default function StoryBoardComponent() {
    return(
        <div className="story-board-component">
            <Row>
                <div className={"col-md-6 col-lg-3"}>
                    <Card className={"story-board-card"}>
                        <Button onClick={onClick}>Click</Button>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

function onClick() {
    ThemeUtils.toggleTheme();
}
