import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Piece } from "avataaars";
import Avatar from "avataaars";
import map from "lodash/map";
import FileSaver from "file-saver";
import options from "./options";
import {
  Button,
  DownloadRow,
  Tabs,
  Tabpanes,
  ColorContainer,
  Container,
  StyledAvatar,
  Pieces,
  Color,
  None,
  Tab,
  Tabpane,
} from "./style";
import { DownloadIcon } from "./svg";

export default function Avataaar(props) {
  const canvasRef = useRef(null);
  const avatarRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("top");

  const pieceClicked = (attr, val) => {
    var newAttributes = {
      ...props.value,
      [attr]: val,
    };
    if (props.onChange) {
      props.onChange(newAttributes);
    }
  };

  const triggerDownload = (imageBlob, fileName) => {
    FileSaver.saveAs(imageBlob, fileName);
  };

  const onDownloadPNG = () => {
    const svgNode = ReactDOM.findDOMNode(avatarRef.current);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anyWindow = window;
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;

    const data = svgNode.outerHTML;
    const img = new Image();
    const svg = new Blob([data], { type: "image/svg+xml" });
    const url = DOMURL.createObjectURL(svg);

    img.onload = () => {
      ctx.save();
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      ctx.restore();
      DOMURL.revokeObjectURL(url);
      canvasRef.current.toBlob((imageBlob) => {
        triggerDownload(imageBlob, "avatar.png");
      });
    };
    img.src = url;
  };

  const onDownloadSVG = () => {
    const svgNode = ReactDOM.findDOMNode(avatarRef.current);
    const data = svgNode.outerHTML;
    const svg = new Blob([data], { type: "image/svg+xml" });
    triggerDownload(svg, "avatar.svg");
  };

  return (
    <Container>
      <StyledAvatar>
        <Avatar
          ref={avatarRef}
          style={{ width: "200px", height: "200px" }}
          {...props.value}
        />
      </StyledAvatar>
      <Tabs>
        {map(options, (option) => {
          return (
            <Tab
              selectedTab={selectedTab}
              type={option.type}
              onClick={() => setSelectedTab(option.type)}
            >
              {option.label}
            </Tab>
          );
        })}
      </Tabs>
      <Tabpanes>
        {options.map((option) => {
          return (
            <Tabpane selectedTab={selectedTab} type={option.type}>
              {option.values.map((val) => {
                var attr = {};
                attr[option.attribute] = val;
                if (option.transform) {
                  attr.style = { transform: option.transform };
                }
                return (
                  <Pieces onClick={() => pieceClicked(option.attribute, val)}>
                    {option.type === "avatarStyle" ? (
                      <span style={{ margin: "5px" }}>{val}</span>
                    ) : (
                      <Piece pieceSize="50" pieceType={option.type} {...attr} />
                    )}
                    {(val === "Blank" || val === "NoHair") && (
                      <None>(none)</None>
                    )}
                  </Pieces>
                );
              })}
              <ColorContainer>
                {option.colors &&
                  (option.type !== "top" ||
                    option.hats.indexOf(props.value.topType) === -1) &&
                  props.value.topType !== "Eyepatch" &&
                  props.value.topType !== "LongHairShavedSides" &&
                  props.value.topType !== "LongHairFrida" &&
                  map(option.colors, (color, colorName) => {
                    return (
                      <Color
                        style={{
                          backgroundColor: color,
                          border:
                            color === "#FFFFFF"
                              ? "1px solid #ccc"
                              : "1px solid " + color,
                        }}
                        onClick={() =>
                          pieceClicked(option.colorAttribute, colorName)
                        }
                      ></Color>
                    );
                  })}

                {option.hatColors &&
                  option.hats.indexOf(props.value.topType) !== -1 &&
                  props.value.topType !== "Hat" &&
                  map(option.hatColors, (color, colorName) => {
                    return (
                      <Color
                        style={{
                          backgroundColor: color,
                          border:
                            color === "#FFFFFF"
                              ? "1px solid #ccc"
                              : "1px solid " + color,
                        }}
                        onClick={() => pieceClicked("hatColor", colorName)}
                      ></Color>
                    );
                  })}
              </ColorContainer>
            </Tabpane>
          );
        })}
      </Tabpanes>
      <DownloadRow>
        <Button onClick={onDownloadSVG}>
          <DownloadIcon /> SVG
        </Button>{" "}
        <Button onClick={onDownloadPNG}>
          <DownloadIcon /> PNG
        </Button>{" "}
      </DownloadRow>

      <canvas
        style={{ display: "none" }}
        width="528"
        height="560"
        ref={canvasRef}
      />
    </Container>
  );
}
