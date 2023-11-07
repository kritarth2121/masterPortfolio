import React from "react";
import "./LoaderLogo.scss";
import { loader } from "../../portfolio.js";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div class="container-loader">
        <div class="box">
          {Array.from(Array(16).keys()).map((elem) => (
            <span style={{ "--i": elem + 1 }} >
              <i>{loader.first}</i>
              {loader.second}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default LogoLoader;
