import { Phrase } from 'components/common';
import { DIARY_IMGS } from 'utils/data';
import { COLORS, IMG_PATHS } from 'utils/constants';
import styled from 'styled-components';

const Diary = () => {
  return (
    <Container>
      <Wrapper>
        <Phrase
          title="매일 매일\n알아서 기록하는 독서 일기"
          content="오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n
          읽기만 해도 자동으로 기록되고, 공유도 가능해요."
          alignment={true}
        />
        <ImageWrapper>
          {DIARY_IMGS.map((img, idx) => {
            return <DiaryImg key={idx} src={img} />;
          })}
          <Phone src={IMG_PATHS.DIARY_PHONE} alt="phone" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1267px;
  background-color: ${COLORS.GREY};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 150px;
`;
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
`;
const DiaryImg = styled.img`
  margin: 0 40px;
  padding: 25px;
  &:nth-of-type(odd) {
    margin-right: 300px;
  }
`;
const Phone = styled.img`
  position: absolute;
  top: -40px;
`;

export default Diary;
