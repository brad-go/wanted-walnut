import React from 'react';
import { Phrase } from 'components/common';
import useScroll from 'hooks/useScroll';
import { alignLine, FEATURE_ICONS } from 'utils';
import { COLORS, IMG_PATHS } from 'utils/constants';
import styled, { css } from 'styled-components';

interface PositionType {
  img: string;
  title: string;
  content: string;
}

const BOOKMARKS: PositionType[] = [
  {
    img: IMG_PATHS.FEATURE_FIRST,
    title: '화상수업',
    content:
      '휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.',
  },
  {
    img: IMG_PATHS.FEATURE_SECOND,
    title: '양방향',
    content:
      '화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.',
  },
  {
    img: IMG_PATHS.FEATURE_THIRD,
    title: '화상수업',
    content: '친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.',
  },
];

const Feature = () => {
  const { bookmarkActive } = useScroll();
  console.log(bookmarkActive);

  return (
    <Container>
      <Phrase title="땅콩스쿨만의 특징" alignment nit={true} />
      <Wrapper>
        {BOOKMARKS.map(({ img, title, content }, idx) => (
          <Bookmark
            key={idx}
            style={{ backgroundImage: `url(${img})` }}
            bookmarkActive={bookmarkActive}
            idx={idx}
          >
            <img src={FEATURE_ICONS[idx]} alt={title} width="80" height="80" />
            <Title>{title}</Title>
            <Content>{alignLine(content)}</Content>
          </Bookmark>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 945px;
  padding-top: 150px;
  background-color: ${COLORS.GREY};
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 0;
  margin-left: 70px;
  width: 1380px;
`;

const Bookmark = styled.div<{
  bookmarkActive: boolean;
  key: number;
  idx: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -70px;
  padding-top: 200px;
  width: 460px;
  height: 643px;
  background-size: 460px 700px;
  background-position: top center;
  background-repeat: no-repeat;
  opacity: 0;
  ${(props) =>
    props.bookmarkActive
      ? css`
          transition: all ${(props.idx + 1) * 2}s;
          margin-top: 0px;

          opacity: 1;
        `
      : css`
          transition: none;
          margin-top: 80px;

          opacity: 0;
        `}
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  margin-top: 50px;
  margin-bottom: 1em;
`;

const Content = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  white-space: pre-wrap;
`;

export default Feature;
