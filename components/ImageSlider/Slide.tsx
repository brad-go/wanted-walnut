import { SLIDE_IMGS } from 'utils/data';
import styled, { keyframes } from 'styled-components';

export const Slide = () => {
  return (
    <SlideTrack>
      <SlideList>
        {SLIDE_IMGS.map((path, idx) => {
          return <SlideImg key={idx} src={path} alt="slide-img" />;
        })}
      </SlideList>
      <SlideListSecond>
        {SLIDE_IMGS.map((path, idx) => {
          return <SlideImg key={idx} src={path} alt="slide-img" />;
        })}
      </SlideListSecond>
    </SlideTrack>
  );
};

const SlideTrack = styled.div`
  position: relative;
  width: 4360px;
  height: 240px;
`;

const rolling = keyframes`
0% {
  transform: translateX(0px);
}
100% {
  transform: translateX(-4360px);
}
`;

const SlideList = styled.div`
  position: absolute;
  width: 4360px;
  animation: 24s linear 0s infinite normal none running ${rolling};
`;

const SlideListSecond = styled.div`
  position: absolute;
  width: 4360px;
  left: 4360px;
  animation: 24s linear 0s infinite normal none running ${rolling};
`;

const SlideImg = styled.img`
  width: 188px !important;
  height: 240px;
  margin-left: 30px;
`;
