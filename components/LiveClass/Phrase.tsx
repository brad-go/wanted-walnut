import { COLORS, FONT_WEIGHT, IMG_PATHS } from 'uitls/constants';
import styled from 'styled-components';

interface PhrasePropsType {
  title: string;
  content: string;
}

export const Phrase = ({ title, content }: PhrasePropsType) => {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
        <ContentBox>
          <Content>{content}</Content>
        </ContentBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  color: ${COLORS.TEXT};
  word-break: keep-all;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TitleBox = styled.div`
  position: relative;
  height: 142px;
  padding-right: 30px;
`;

const Title = styled.h2`
  position: absolute;
  font-size: 50px;
  font-weight: ${FONT_WEIGHT.THICK};
  line-height: 70px;
`;

const ContentBox = styled.div`
  position: relative;
  height: 120px;
`;

const Content = styled.p`
  position: absolute;
  font-size: 24px;
  line-height: 40px;
  font-weight: ${FONT_WEIGHT.THIN};
  white-space: pre-wrap;
`;
