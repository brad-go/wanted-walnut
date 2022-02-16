import React, { useState, useEffect, useRef } from 'react';
import { POSTSCRIPTS_DATA, SLIDER_DATA_LIST, SLIDE_WIDTH } from 'utils/data';
import { COLORS, IMG_PATHS } from 'utils/constants';
import styled from 'styled-components';

const PostScript = () => {
  const [current, setCurrent] = useState(0);
  const [motion, setMotion] = useState(true);

  const userRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const moveNext = () => {
    setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    if (current === 2) {
      setTimeout(() => {
        setCurrent(12);
        setMotion(false);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }
    if (current === 13) {
      setTimeout(() => {
        setCurrent(3);
        setMotion(false);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        SLIDE_WIDTH * current
      }px)`;
    }
  }, [current]);

  return (
    <Container>
      <Wrapper>
        <Carousel>
          <Frame>
            <RotateWrapper current={current}>
              <Rotate>
                <RotateImg
                  src={IMG_PATHS.POSTSCRIPTS_ROTATE}
                  alt="rotate-img"
                />
              </Rotate>
            </RotateWrapper>
            <User>
              <UserImg src={POSTSCRIPTS_DATA[current % 5].img} ref={userRef} />
            </User>
          </Frame>
          <BtnPrev onClick={movePrev}>
            <BtnImg src={IMG_PATHS.POSTSCRIPTS_BTN_PREV} alt="btn-prev" />
          </BtnPrev>
          <SwiperWrapper>
            <Swiper>
              <SlideWrapper ref={sliderRef} motion={motion}>
                {SLIDER_DATA_LIST.map((postscript, idx) => {
                  return (
                    <Slide key={idx} motion={motion}>
                      <Id>{postscript.id}</Id>
                      <Content>{postscript.content}</Content>
                    </Slide>
                  );
                })}
              </SlideWrapper>
            </Swiper>
          </SwiperWrapper>
          <BtnNext onClick={moveNext}>
            <BtnImg src={IMG_PATHS.POSTSCRIPTS_BTN_NEXT} alt="btn-next" />
          </BtnNext>
        </Carousel>
        <Scroll current={current} />
        <Background />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 703px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 667px;
  margin: 0 auto;
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

const Frame = styled.div`
  position: absolute;
  top: 150px;
  width: 120px;
  height: 120px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${COLORS.PRIMARY};
`;

const RotateWrapper = styled.div<{ current: number }>`
  position: absolute;
  transition: all 1s ease 0s;
  top: 10px;
  left: 50%;
  margin: -19px 0px 0px -138px;
  padding: 8px;
  transform-origin: right center;
  transform: ${(props) => `rotate(${(props.current % 5) * 45}deg)`};
  z-index: 4;
`;

const Rotate = styled.div`
  width: 122px;
  height: 122px;
`;

const RotateImg = styled.img`
  width: 190px;
  height: 122px;
`;

const User = styled.div`
  position: relative;
  top: -12px;
  left: -12px;
  width: 120px;
  height: 120px;
  z-index: 4;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const Scroll = styled.div<{ current: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${(props) => `${(props.current % 5) * 20 + 20}%`};
  height: 10px;
  background-color: rgb(255, 177, 0);
  transition: all 1s ease 0s;
`;

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url(${IMG_PATHS.POSTSCRIPTS_BG}) center center / cover no-repeat;
  filter: brightness(40%);
`;

const BtnPrev = styled.button`
  position: absolute;
  cursor: pointer;
  top: 306px;
  left: 124px;
  z-index: 4;
`;

const BtnNext = styled.button`
  position: absolute;
  top: 306px;
  right: 124px;
  cursor: pointer;
  z-index: 4;
`;

const BtnImg = styled.img`
  width: 44px;
  height: 40px;
`;

const SwiperWrapper = styled.div`
  position: relative;
  width: 820px;
  height: 250px;
  margin: 0 auto;
  margin-top: 290px;
  padding: 0;
  list-style: none;
  overflow: hidden;
  z-index: 1;
`;

const Swiper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  transition-property: transform, height;
  box-sizing: content-box;
`;

const SlideWrapper = styled.div<{ motion: boolean }>`
  position: relative;
  flex-shrink: 0;
  display: flex;
  width: 500%;
  height: 100%;
  transition: ${(props) => (props.motion ? 'transform 0.7s' : 'none')};
`;

const Slide = styled.div<{ motion: boolean }>`
  flex: 1;
  flex-shrink: 0;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  box-sizing: border-box;
  border-radius: 24px;
  color: ${COLORS.WHITE};
  transition: ${(props) =>
    props.motion ? 'opacity 0.2s ease-in-out' : 'none'};
`;

const Id = styled.span`
  font-size: 16px;
  line-height: 2.5;
  opacity: 0.8;
`;

const Content = styled.span`
  font-size: 20px;
  line-height: 1.8;
`;

export default PostScript;
