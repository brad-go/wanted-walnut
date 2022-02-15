import { Phrase } from 'components/common';
import { IMG_PATHS } from 'uitls/constants';
import styled from 'styled-components';

const LiveAccess = () => {
  return (
    <Container>
      <Wrapper>
        <Phrase
          title="실시간 방송 형태로 제공되는\n 신개념 책 읽기"
          content="방송 중이라면 언제든 접속하세요.\n
          수강신청, 수업예약 없이 편하게 수업참여가 가능해요."
          alignment={true}
        />
        <ImageWrapper>
          <Pad src={IMG_PATHS.ACCESS_PAD} alt="pad-img" />

          <Phone src={IMG_PATHS.ACCESS_PHONE} alt="phone-img" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1397px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 150px;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 97px;
`;

const Pad = styled.img`
  position: absolute;
  border-radius: 40px;
  box-shadow: 40px 40px 30px rgba(0, 0, 0, 0.2);
`;

const Phone = styled.img`
  position: absolute;
  top: 147px;
  left: 814px;
  border-radius: 40px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.2);
`;

export default LiveAccess;
