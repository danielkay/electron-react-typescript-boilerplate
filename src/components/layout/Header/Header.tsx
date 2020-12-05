import * as Styled from "./styled";

type HeaderProps = {
  windowTitle: string;
}

const Header = (props: HeaderProps) => {
  return (
    <Styled.TitleBar>
      <Styled.DragRegion>
        <Styled.WindowTitleContainer>
          <Styled.WindowTitle>{props.windowTitle}</Styled.WindowTitle>
        </Styled.WindowTitleContainer>
      </Styled.DragRegion>
      <Styled.WindowControls>
        <Styled.CloseWindowButton onClick={window.close}>x</Styled.CloseWindowButton>
      </Styled.WindowControls>
    </Styled.TitleBar>
  );
}

export default Header;