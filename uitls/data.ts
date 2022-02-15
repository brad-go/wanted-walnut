import type { NavLinkType, ReadingBooksType } from 'types/data';

export const NAV_LINKS: NavLinkType[] = [
  {
    path: '/book',
    name: '도서구매',
  },
  {
    path: '/cart',
    name: '장바구니',
  },
  {
    path: '/user',
    name: '마이페이지',
  },
  {
    path: '/voucher',
    name: '이용권 관리',
  },
  {
    path: '/login',
    name: '로그인/회원가입',
  },
];

export const INTRO_PHRASE: string[] = [
  '책 읽는 재미,',
  '땅콩 스쿨이',
  '만들어줄게요!',
];

export const READING_BOOKS: ReadingBooksType[] = [
  {
    check: './images/4p_check1.gif',
    book: './images/4p_book_1.png',
  },
  {
    check: './images/4p_check2.gif',
    book: './images/4p_book_2.png',
  },
  {
    check: './images/4p_check3.gif',
    book: './images/4p_book_3.png',
  },
];

export const DIARY_IMGS: string[] = [
  './images/6p_img1.png',
  './images/6p_img2.png',
  './images/6p_img3.png',
  './images/6p_img4.png',
];
