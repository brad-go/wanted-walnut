import styled from 'styled-components';
import { IMG_PATHS } from 'uitls/constants';

const Footer = () => {
  return (
    <Container>
      <Info>
        <h6>(주)호두랩스</h6>
        <p>
          대표 : 김민우 | 사업자등록번호 : 431-88-01287{' '}
          <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4318801287">
            사업자 정보 조회
          </a>
          <br />
          서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
          <br />
          제주특별시 서귀포시 중정로 86, 304
          <br />
          통신판매업 신고번호 : 2019-서울강남-00301호
        </p>
        <p>© Hodoo Labs. ALL RIGHTS RESERVED</p>
      </Info>
      <LinkContainer>
        <div>
          <p>
            <a href="/#">고객센터</a>
            <a href="/#">채팅상담</a>
          </p>
          <p>
            <a href="/#">이용약관</a>
            <a href="/#" className="privacyPolicy">
              개인정보 처리방침
            </a>
            <a href="/#">환불정책</a>
          </p>
        </div>
        <div>
          <a href="/#">
            <img
              src={IMG_PATHS.FOOTER_INSTAGRAM}
              alt="instagram"
              width="42.9px"
            />
          </a>
          <a href="/#">
            <img src={IMG_PATHS.FOOTER_CAFE} alt="naver cafe" width="42.9px" />
          </a>
        </div>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 479px;
  padding: 60px;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  h6 {
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    a {
      text-decoration: underline;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  font-size: 16px;
  line-height: 28px;

  a {
    margin-right: 20px;
    &.privacyPolicy {
      font-weight: 700;
    }
  }
`;

export default Footer;
