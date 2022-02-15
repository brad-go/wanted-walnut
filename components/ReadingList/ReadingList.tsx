import { Phrase } from 'components/LiveClass/Phrase';
import useScroll from 'hooks/useScroll';
import { READING_BOOKS } from 'uitls/data';
import { COLORS } from 'uitls/constants';
import styled from 'styled-components';

const ReadingList = () => {
  const { checkAnimation } = useScroll();

  return (
    <Container>
      <Wrapper>
        <PhraseWrapper>
          <Phrase
            title="교육 전문가들이 선정한 도서"
            content="호두랩스의 교육 전문가들이    
            교과 수록, 초등 필독 도서 등    
            아동 교육에 적합한 도서를         
            직접 선정해요!"
          />
        </PhraseWrapper>
        <BooksContainer>
          {READING_BOOKS.map((book, idx) => (
            <BooksWrapper key={idx}>
              <CheckWrapper>
                {/* 하나씩 렌더링 어떻게? */}
                {checkAnimation && <Check src={book.check} />}
              </CheckWrapper>
              <Book src={book.book} />
            </BooksWrapper>
          ))}
        </BooksContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 647px;
  background-color: ${COLORS.GREY};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const PhraseWrapper = styled.div`
  width: 334px;
`;

const BooksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 140px;
`;

const BooksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  &:nth-of-type(3) {
    margin-right: 0;
  }
`;

const CheckWrapper = styled.div`
  width: 184px;
  height: 134px;
  padding-right: 20px;
`;

const Check = styled.img`
  width: 100%;
  hegiht: 100%;
`;

const Book = styled.img`
  width: 170px;
  margin-top: 26px;
`;

export default ReadingList;
