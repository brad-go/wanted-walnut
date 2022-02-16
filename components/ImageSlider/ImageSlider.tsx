import { Phrase } from 'components/common';
import { Slide } from './Slide';
import { COLORS } from 'utils/constants';
import styled from 'styled-components';

const ImageSlider = () => {
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
        <Slide />
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
  background-color: ${COLORS.WHITE};
`;

const SlideWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 110px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default ImageSlider;
