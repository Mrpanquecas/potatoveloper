import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { blockSizes } from "../utils/common/system";
import Cutout from "../utils/Cutout/Cutout";

const Wrapper = styled(Cutout)`
  display: inline-block;
  width: ${props => props.width}%;
  height: ${blockSizes.md};
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
`;

const WhiteBar = styled.div`
  width: calc(100% - 4px);
  line-height: ${blockSizes.md};
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme }) => theme.text};
`;

const BlueBarContainer = styled.div`
  width: ${props => props.percent}%;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 2px;
  margin-top: -2px;
  overflow: hidden;
  background: ${({ theme }) => theme.progress};
`;

const BlueBar = styled.div`
  width: 100%;
  height: 100%;
  line-height: ${blockSizes.md};
  color: ${({ theme }) => theme.textInvert};
  position: relative;
  left: 50%;
`;

const ProgressBar = ({ width, percent, shadow }) => (
  <Wrapper width={width} shadow={shadow}>
    <WhiteBar width={width}>{percent}%</WhiteBar>
    <BlueBarContainer percent={percent}>
      <BlueBar width={width}>{percent}%</BlueBar>
    </BlueBarContainer>
  </Wrapper>
);

ProgressBar.defaultProps = {
  width: 250,
  percent: 0,
  shadow: true
};
ProgressBar.propTypes = {
  width: propTypes.number,
  percent: propTypes.number,
  shadow: propTypes.bool
};

export default ProgressBar;
