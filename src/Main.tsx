import * as React from "react";
import * as ReactDOM from "react-dom";
import Dropzone from "react-dropzone";
import styed from "styled-components";

import "./Style.css";

type Props = {
    className?: string
}

type State = {}

const MyDrop = styed(Dropzone) `
    width: 100%;
    height: 100%;
    background-color: #139033;
    padding: 20px;
`;

export class App extends React.Component<Props, {}> {
    onDrop(files) {
        console.log(files);
    }

    onClick(e) {
        console.log(e);
    }

    render() {
        return (
            <MyDrop onDrop={this.onDrop} disableClick>
                <h1>Drop Here</h1>
            </MyDrop>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));