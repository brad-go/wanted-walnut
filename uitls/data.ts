import type { NavLinkType, ReadingBooksType } from 'types/data';
import { IMG_PATHS } from './constants';

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
    check: IMG_PATHS.READING_CHECK1,
    book: IMG_PATHS.READING_BOOK1,
  },
  {
    check: IMG_PATHS.READING_CHECK2,
    book: IMG_PATHS.READING_BOOK2,
  },
  {
    check: IMG_PATHS.READING_CHECK3,
    book: IMG_PATHS.READING_BOOK3,
  },
];
