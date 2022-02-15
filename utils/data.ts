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

export const SLIDE_IMGS: string[] = [
  '/images/slideImages/img_book_1.png',
  '/images/slideImages/img_book_2.png',
  '/images/slideImages/img_book_3.png',
  '/images/slideImages/img_book_4.png',
  '/images/slideImages/img_book_5.png',
  '/images/slideImages/img_book_6.png',
  '/images/slideImages/img_book_7.png',
  '/images/slideImages/img_book_8.png',
  '/images/slideImages/img_book_9.png',
  '/images/slideImages/img_book_10.png',
  '/images/slideImages/img_book_11.png',
  '/images/slideImages/img_book_12.png',
  '/images/slideImages/img_book_13.png',
  '/images/slideImages/img_book_14.png',
  '/images/slideImages/img_book_15.png',
  '/images/slideImages/img_book_16.png',
  '/images/slideImages/img_book_17.png',
  '/images/slideImages/img_book_18.png',
  '/images/slideImages/img_book_19.png',
  '/images/slideImages/img_book_20.png',
];

export const FEATURE_ICONS: string[] = [
  '/images/8p_videoclass.png',
  '/images/8p_bidirectional.png',
  '/images/8p_character.png',
];
