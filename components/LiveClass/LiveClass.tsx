import ReactPlayer from 'react-player';
import Img from 'next/image';
import { Phrase } from './Phrase';
import { COLORS, IMG_PATHS } from 'uitls/constants';
import useScroll from 'hooks/useScroll';
import styled from 'styled-components';

const LiveClass = () => {
  const { autoPlay } = useScroll();

  return (
    <Container>
      <Wrapper>
        <PhraseWrapper>
          <Phrase
            title="랜선 라이브 북클래스"
            content="친구들과 함께                    
            그림 그리기, 퀴즈 풀기. 
            선생님과 대화하며 경험해요!"
          ></Phrase>
        </PhraseWrapper>
        <PadWrapper>
          <Img width="746" height="574" src={IMG_PATHS.LIVE_PAD}></Img>
          <PadVideo>
            <ReactPlayer
              loop
              muted={autoPlay}
              playing={autoPlay}
              url={IMG_PATHS.LIVE_VIDEO}
              width="100%"
              height="100%"
            />
          </PadVideo>
        </PadWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 938px;
  margin: -5px 0;
  background-image: url(${IMG_PATHS.LIVE_BACKGROUND});
  background-postion: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${COLORS.WHITE};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const PhraseWrapper = styled.div`
  width: 290px;
`;

const PadWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1060px;
  height: 868px;
`;

const PadVideo = styled.div`
  position: absolute;
  width: 700px;
  height: 526px;
  z-index: 10;
`;

export default LiveClass;
