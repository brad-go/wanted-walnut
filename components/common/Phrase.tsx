import { COLORS, FONT_WEIGHT } from 'uitls/constants';
import { alignLine } from 'uitls';
import styled, { css } from 'styled-components';

interface PhrasePropsType {
  title: string;
  content?: string;
  alignment?: boolean;
}

const Phrase = ({ title, content, alignment = false }: PhrasePropsType) => {
  return (
    <Container alignment={alignment}>
      <Wrapper>
        <TitleBox alignment={alignment}>
          <Title>{alignLine(title)}</Title>
        </TitleBox>
        {content && (
          <ContentBox alignment={alignment}>
            <Content>{alignLine(content)}</Content>
          </ContentBox>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<{ alignment: boolean }>`
  width: 100%;
  margin-bottom: 40px;
  color: ${COLORS.TEXT};
  text-align: ${(props) => props.alignment && `center`};
  word-break: keep-all;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TitleBox = styled.div<{ alignment: boolean }>`
  position: relative;
  height: 142px;
  padding-right: 30px;
  ${(props) =>
    props.alignment &&
    css`
      display: flex;
      justify-content: center;
      padding-right: 0;
    `}
`;

const Title = styled.h2`
  position: absolute;
  font-size: 50px;
  font-weight: ${FONT_WEIGHT.THICK};
  line-height: 70px;
  word-break: keep all;
`;

const ContentBox = styled.div<{ alignment: boolean }>`
  position: relative;
  height: 120px;
  ${(props) =>
    props.alignment &&
    css`
      display: flex;
      justify-content: center;
      padding-right: 0;
    `}
`;

const Content = styled.p`
  position: absolute;
  font-size: 24px;
  line-height: 40px;
  font-weight: ${FONT_WEIGHT.THIN};
  white-space: pre-wrap;
`;

export default Phrase;
