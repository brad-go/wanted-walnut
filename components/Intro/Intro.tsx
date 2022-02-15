import MouseSVG from 'assets/mouse.svg';
import { INTRO_PHRASE } from 'utils/data';
import { FONT_WEIGHT, IMG_PATHS } from 'utils/constants';
import styled, { keyframes } from 'styled-components';

const Intro = () => {
  return (
    <Cotainer>
      <Wrapper>
        <PhraseContainer>
          {INTRO_PHRASE.map((phrase, idx) => {
            return (
              <PhraseWrapper key={idx}>
                {idx === 1 && (
                  <Star>
                    <img src={IMG_PATHS.INTRO_STAR} alt="star"></img>
                  </Star>
                )}
                {idx === 1 ? (
                  <Phrase>
                    {phrase}
                    <UnderLine />
                  </Phrase>
                ) : (
                  <Phrase>{phrase}</Phrase>
                )}
              </PhraseWrapper>
            );
          })}
        </PhraseContainer>
        <StyledSVGWrapper>
          <MouseSVG />
        </StyledSVGWrapper>
      </Wrapper>
    </Cotainer>
  );
};

const Cotainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${IMG_PATHS.INTRO_BACKGROUND});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  user-select: none;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${IMG_PATHS.INTRO_KIDS});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: saturate(200%) grayscale(20%) brightness(90%);
  box-shadow: inset 60px 60px 500px rgba(120, 75, 0, 0.6);
  user-select: none;
`;

const PhraseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 230px;
  padding: 0 380px;
`;

const PhraseWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 80px;
`;
const Phrase = styled.h2`
  display: inline-block;
  color: white;
  font-size: 60px;
  font-weight: ${FONT_WEIGHT.THICK};
  line-height: 80px;
`;

const UnderLine = styled.div`
  position: absolute;
  top: 70px;
  width: 220px;
  height: 11px;
  background-image: url(${IMG_PATHS.INTRO_LINE});
  background: no-repeat cover center;
`;

const Star = styled.div`
  position: absolute;
  top: -24px;
  left: -20px;
  display: inline-block;
  width: 51.42px;
  height: 52.18px;
  z-index: 10;
`;

const runningMotion = keyframes`
  0% {
    padding-bottom: 120px;
  }
  100% {
    padding-bottom: 50px;
  }
`;

const StyledSVGWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: 0.7s ease-in 0s infinite alternate none ${runningMotion};
`;

export default Intro;
