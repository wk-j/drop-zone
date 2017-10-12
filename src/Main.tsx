import * as React from "react";
import * as ReactDOM from "react-dom";
import Dropzone from "react-dropzone";
import styled, { ThemedStyledProps } from "styled-components";

let image = require("./images/dropbox-logo.png");

type Props = {
    className?: string
}

type MyThemes = ThemedStyledProps<Props, Dropzone>

const MyZone = styled(Dropzone) `
    width: 100%;
    height: 100%;
`;

export class App extends React.Component<Props, {}> {
    onDrop(files) {
        console.log(files);
    }

    onClick(e) {
        console.log(e);
    }

    onDragEnger() {

    }

    render() {
        return (
            <MyZone onDragEnter={this.onDragEnger}
                onDrop={this.onDrop}
                disableClick>
                <h1>Drop Here</h1>
            </MyZone>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));