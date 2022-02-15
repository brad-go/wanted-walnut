import { Phrase } from 'components/common';
import { SLIDE_IMGS } from 'uitls/data';
import styled from 'styled-components';

const Challenge = () => {
  return (
    <Wrapper>
      <Phrase
        title="입학 전 1000권 읽기!\n
        땅콩스쿨로 도전해보세요."
        content="매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n
        독서를 통해 배움의 즐거움을 알아가 보세요."
        alignment={true}
      />
      <SlideWrapper>
        <SlideTrack>
          <Slide>
            {SLIDE_IMGS.map((path, idx) => {
              return <img key={idx} src={path} alt="slide-img" />;
            })}
          </Slide>
        </SlideTrack>
      </SlideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 868px;
  padding-top: 150px;
`;

const SlideWrapper = styled.div`
  overflow-x: hidden;
`;

const SlideTrack = styled.div``;

const Slide = styled.div`
  display: flex;
`;

export default Challenge;
