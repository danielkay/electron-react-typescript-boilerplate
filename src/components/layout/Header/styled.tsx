import styled from "styled-components";

export const TitleBar = styled.div`
  display: block;
  position: fixed;

  top: 0;
  height: 32px;
  width: calc(100% - 2px);
  padding: 4px;
`;

export const DragRegion = styled.div`
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
  display: grid;
  grid-template-columns: auto 138px;
`;

export const WindowTitleContainer = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  margin-left: 8px;
  overflow: hidden;
  font-size: 12px;
`;

export const WindowTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
`;

export const WindowControls = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 36px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  -webkit-app-region: no-drag;
`;

export const WindowButton = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }
  
  &:active {
    background: rgba(255,255,255,0.2);
  }
`;

export const CloseWindowButton = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }
  
  &:active {
    background: rgba(255,255,255,0.2);
  }
  
  transform: scale(1, 0.85);
`;