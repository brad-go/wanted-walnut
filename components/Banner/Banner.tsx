import React from 'react';
import Img from 'next/image';
import { COLORS, FONT_WEIGHT, IMG_PATHS } from 'uitls/constants';
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <BannerLogo>
          <Img
            width="144"
            height="100"
            src={IMG_PATHS.BANNER_LOGO}
            alt="logo-animation"
          />
        </BannerLogo>
        <BannerTitle>땅콩스쿨이란?</BannerTitle>
        <BannerPhrase>
          실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
          <br /> 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
          서비스입니다.
        </BannerPhrase>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 573px;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 90px 0;
`;

const BannerLogo = styled.div``;

const BannerTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: ${FONT_WEIGHT.THIN}
  ling-height: 72px;
`;

const BannerPhrase = styled.p`
  font-size: 24px;
  font-weight: ${FONT_WEIGHT.NORMAL};
  text-align: center;
  line-height: 40px;
  white-space: pre-wrap;
`;

export default Banner;
