<h1>원티드 프리온보딩 코스 3주차 기업과제<br />
소개 페이지 📈</h1>

## 🚀 배포

🔗 **과제물**(netlify): https://park-is-best-walnut.netlify.app/ <br>

## 🧑‍🤝‍🧑 팀 소개

### 저희는 Team **박이최고** 입니다.

|  | 팀원 | 역할 |
| --- | --- | --- |
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) | 고동현 [@brad-go](https://github.com/brad-go) | (팀장) 애니메이션 이미지 슬라이더, 무한 캐러셀 구현, 전체 구현 |
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) | 이소진 [@krungy](https://github.com/krungy) | gif를 활용한 이미지 구현, header 구현 |
| ![](https://avatars.githubusercontent.com/u/57004991?s=25) | 최효정 [@hyo-choi](https://github.com/hyo-choi) | 북마크, footer 구현, 메모리 관리 |

<br>

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/OnBoarding-Park-is-best/week2-messenger.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn next dev
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📚 전체 구현사항

### 구현 목표

:exclamation: 여러 애니메이션이 추가된 학습 소개 페이지를 구현합니다. :exclamation:

### 요구사항

- [x] 피그마를 활용한 UI 구현
- [x] Next.js 사용
- [x] Typescript 사용
- [x] ESLint 룰 적용
- [ ] 3분 이내로 작동하는 E2E 테스트

### 팀내 결정사항

### 타입스크립트 사용: 컴포넌트 타입 지정 방식

```tsx
interface SampleComponentProps {
  onClick: React.MouseEventHandler;
  selected?: boolean;
}
const SampleComponent = ({ onClick, selected }: **SampleComponentProps**) => {
  return <div onClick={onClick}>{selected ? 'yes' : 'no'}</div>;
};
```

- React.FC 대신 Props용 interface를 사용합니다.
- 함수형 컴포넌트의 return type(JSX.Element)은 생략합니다.

### 팀원별 역할 분담

#### :bread:\_고동현

- 무한 캐러셀 구현
- 애니메이션 이미지 슬라이드 구현
- 전체 애니메이션 관리

#### :cherry_blossom:\_최효정

- Footer 구현
- 북마크 컴포넌트 구현
- memoization을 이용한 메모리 관리

#### :poop:\_이소진

- 헤더 구현
- gif를 활용한 이미지 로딩 방식 구현

## 📂 디렉토리 구조

```bash
.
├── assets
├── components
│   ├── Banner
│   ├── common
│   ├── Diary
│   ├── Feature
│   ├── Footer
│   ├── Header
│   ├── ImageSlider
│   ├── Intro
│   ├── LiveAccess
│   ├── LiveClass
│   ├── PostScript
│   ├── ReadingList
│   └── Ticket
├── hooks
├── Layout
├── pages
├── styles
├── types
└── utils
      └── constants
```
