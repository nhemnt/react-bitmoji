import styled, { css } from "styled-components";

export const GithuFork = styled.a(
  () => css`
    width: 12.1em;
    height: 12.1em;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    font-size: 13px;
    text-decoration: none;
    text-indent: -999999px;
    @media (max-width: 550px) {
      font-size: 11px;
    }
    :before {
      content: "";
      padding: 0.38em 0;
      background-color: #423c34;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0)),
        to(rgba(0, 0, 0, 0.15))
      );
      background-image: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
      );
      background-image: -moz-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
      );
      background-image: -ms-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
      );
      background-image: -o-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
      );
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
      );
      -webkit-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
      box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
      pointer-events: auto;
    }
    :after {
      content: attr(data-ribbon);
      color: #fff;
      font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
      line-height: 1.54em;
      text-decoration: none;
      text-shadow: 0 -0.08em rgba(0, 0, 0, 0.5);
      text-align: center;
      text-indent: 0;

      padding: 0.15em 0;
      margin: 0.15em 0;

      border-width: 0.08em 0;
      border-style: dotted;
      border-color: #fff;
      border-color: rgba(255, 255, 255, 0.7);
    }

    :before,
    :after {
      position: absolute;
      display: block;
      width: 15.38em;
      height: 1.54em;
      top: 3.23em;
      right: -3.23em;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `
);

export const Container = styled.div(
  () => css`
    position: relative;
    border-radius: 8px;
    width: 400px;
    margin: auto;
    background: #f3f3f3;
    margin-top: 20px;
    padding: 20px 0;
    box-shadow: 1px 1px 0px #f7f7f7, 2px 2px 0px #999, 3px 3px 0px #999, 4px 4px 0px #d4d4d4, 5px 5px 0px #999, 6px 6px 0px #999;
  `
);

export const Pieces = styled.div(
  () => css`
    display: inline-block;
    position: relative;
    overflow: hidden;

    :hover {
      background-color: #cce5ff;
      cursor: pointer;
    }
  `
);

export const Color = styled.div(
  () => css`
    display: inline-block;
    height: 26px;
    width: 23px;
    cursor: pointer;

    [color="#FFFFFF"] {
      border: 1px solid #ccc;
    }
  `
);

export const None = styled.div(
  () => css`
    opacity: 0.2;
    font-size: 11px;
    position: absolute;
    top: 20px;
    left: 9px;
  `
);

export const StyledAvatar = styled.div(
  () => css`
    display: block;
    width: 315px;
    height: 235px;
    padding-left: 20px;
  `
);

export const Tab = styled.div(
  () => css`
    font-size: 12px;
    text-align: center;
    border: 1px solid transparent;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    color: #007bff;

    ${({ selectedTab, type }) =>
      selectedTab === type &&
      css`
        background: #007bff;
        color: white;
      `}
  `
);

export const Tabpane = styled.div(
  () => css`
    box-sizing: border-box;
    display: none;
    width: 400px;
    padding: 0 10px 10px;
    ${({ selectedTab, type }) =>
      selectedTab === type &&
      css`
        display: flex;
        align-items: center;
        justify-items: center;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
      `}
  `
);
export const DownloadRow = styled.div(
  () => css`
    text-align: center;
  `
);

export const Tabs = styled.div(
  () => css`
    box-sizing: border-box;
    display: block;
    position: absolute;
    right: 50px;
    top: 8px;
    width: 100px;
  `
);
export const ColorContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  `
);

export const Tabpanes = styled.div(
  () => css`
    box-sizing: border-box;
    display: inline-block;
    width: 400px;
  `
);

export const Button = styled.button(
  () => css`
    border-radius: 7px;
    color: #e6e6ee;
    background-color: #001f3f;
    border: 1px solid transparent;
    padding: 5px 7px;
    font-size: 20px;
    letter-spacing: 0.6px;
    margin: 0 5px;
    cursor: s-resize;
    :active {
      cursor: progress;
    }
    :hover {
      text-decoration: none;
      color: #fff;
    }
    > svg {
      fill: #e6e6ee;
      height: 20px;
    }
    > svg:hover {
      color: #fff;
    }
  `
);
