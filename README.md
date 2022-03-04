# [원티드X위코드 프리온보딩 코스] 3주차 기업과제<br /> :books: 온라인 교육 소개 페이지

<br />

## :speaking_head: 1. 프로젝트 소개

> Next.js와 TypeScript를 사용해 온라인 교육 소개 홈페이지의 메인 화면을 개발합니다.

- 팀 프로젝트 (3인)
- 제작기간: 2021.02.15 ~ 2021.02.17
- 팀 저장소: https://github.com/OnBoarding-Park-is-best/week3-walnut

<br />

## :rocket: 2. DEMO LINK

#### 🔗 **과제물**(netlify): https://park-is-best-walnut.netlify.app/ <br />

<br />

## :books: 3. 사용된 기술 스택

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- TypeScript - v4.5.4
- React.js - v17.0.2
- Next.js - v12.0.10
- Styled-Compoennts - v5.3.3

<br />

## :electric_plug: 4. 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/OnBoarding-Park-is-best/week3-walnut.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn next dev
   ```

<br />

## :gear: 5. 핵심 구현 기능

### 5-1. 도서 이미지가 무한히 흐르는 애니메이션

<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156712336-5feb2fae-42cd-4cc4-b7d5-18445704e33c.gif" alt="애니메이션 이미지 슬라이드" height="200px">
</div>

&nbsp;도서 목록을 만들어 **우에서 좌로 무한히 흐르는 애니메이션**을 적용시켰습니다. 애니메이션을 어떻게 끊이지 않고 무한히 흐를 수 있게 만들 수 있을까 고민했지만, **width**와 **left**값을 이용해서 해결할 수 있었습니다.

&nbsp;도서 목록이 담길 트랙과 두 개의 도서 목록 리스트를 생성했고, 트랙과 각 두 리스트의 `width`를 동일하게 주었습니다. 그리고 `left` 속성을 이용해 **첫번째 도서 목록 리스트의 width값만큼 두번째 도서 목록 리스트를 오른쪽에 위치**시켰고, `translateX`를 이용해 우에서 좌로 흐르는 동일한 애니메이션을 적용시킴으로 기능을 구현했습니다.

**[코드보기](https://github.com/brad-go/wanted-walnut/blob/d8cab95e310404f1e2025e91fa50cd3a7e12ba17/components/ImageSlider/Slide.tsx#L4)**

### 5-2. 좌, 우 버튼을 클릭해 이동하는 무한 반복 후기 페이지

<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156715665-0f96cbd8-6fba-48cd-ae2b-ea2f8a9c7be9.gif" alt="무한 로테이션 후기.gif" width="80%">
</div>

#### 1) 무한 로테이션 슬라이드

```tsx
// sliderRef는 슬라이드들을 담고 있는 트랙, current는 현재 슬라이드 번호

if (sliderRef.current) {
   sliderRef.current.style.transform = `translateX(-${
      SLIDE_WIDTH * current
   }px)`;
   }
}, [current]);
```

&nbsp;각 후기들을 하나의 슬라이드로 만들고, 양 옆의 버튼을 이용해 슬라이드를 이동할 수 있게 만들었습니다. 버튼을 클릭하면 현재 슬라이드를 가리키는 상태값이 증가하고 **(슬라이드의 넓이 x 슬라이드 번호) 만큼 후기들을 담고 있는 슬라이드 트랙을 이동시키는 방식**으로 구현했습니다.

&nbsp;후기 목록의 양 끝으로 일정 위치에 도달하면, `transtion`을 제거하고 **사용자 몰래 슬라이드를 중간 위치의 슬라이드로 바꿔**주고 다시 `transition`을 추가해줘서 무한히 반복되는 슬라이드를 구현했습니다.

**[코드 보기](https://github.com/brad-go/wanted-walnut/blob/d8cab95e310404f1e2025e91fa50cd3a7e12ba17/components/PostScript/PostScript.tsx#L22)**

#### 2) 버튼 클릭 시마다 유저 이미지 변경 및 이미지 회전 시키기

```tsx
// current는 현재 슬라이드를 가리키는 상태값

const RotateWrapper = styled.div<{ current: number }>`
   ...
   transform: ${(props) => `rotate(${(props.current % 5) * 45}deg)`};
`;
```

&nbsp;현재 슬라이드 번호와 `rotate`를 이용해 이미지를 회전 시키도록 만들었습니다.

```tsx
<User>
  <UserImg src={POSTSCRIPTS_DATA[current % 5].img} />
</User>
```

&nbsp;가져온 데이터의 idx넘버를 이용해서 버튼을 클릭할 때마다 유저의 이미지를 변경할 수 있었습니다. 배열의 idx에 버튼 클릭시마다 증감하는 현재 슬라이드 번호를 넣어줌으로 연결되게 만들었습니다.

#### 3) 슬라이드 하단 스크롤

```tsx
<Scroll current={current} />
...

const Scroll = styled.div<{ current: number }>`
  ...
  width: ${(props) => `${(props.current % 5) * 20 + 20}%`};
  ...
`;
```

&nbsp;슬라이드 하단에 위치한 스크롤도 같은 방식으로 버튼 클릭시마다 증감하는 현재 슬라이드 번호를 이용했습니다. 슬라이드 번호가 0 일때 넓이가 기본적으로 20%가 되도록 만들어서 5번째 슬라이드일 때 100%가 되게 만들었습니다.

### 5-3. 순서대로 그려지는 체크 이미지

<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156722719-4b998785-9b6e-42b6-8dab-3f9537fa1a5e.gif" alt="체크 이미지.gif" width="80%">
</div>

&nbsp;체크가 그려지는 gif이미지 데이터를 사용했기에 제가 그려지는 속도를 조절할 수 는 없었고, 순서대로 하나씩 렌더링 되게 만들어야 했습니다. `map()`을 통해서 체크 이미지를 화면에 렌더링했는데, 이 `map()`의 두번째 인자인 인덱스 번호를 이용했습니다.

```tsx
 <Check ... wait={(idx + 1) * 500} />
```

&nbsp;Check 컴포넌트에 `wait`이라는 props를 각 체크 컴포넌트마다 다를 수 있게 인덱스 번호 마다 값이 다르게 전달해줍니다. 그리고 이 값을 `setTimout()`에 delay 값으로 전달해서 화면에 렌더링 되게 만들어서 순서대로 렌더링 되게 만들었습니다.

**[코드 보기](https://github.com/brad-go/wanted-walnut/blob/d8cab95e310404f1e2025e91fa50cd3a7e12ba17/components/common/Check/Check.tsx#L10)**

<br />

## :boom: 6. 핵심 트러블 슈팅

### 6-1. 새로고침하지 않으면 다시 렌더링 되지 않는 문제

#### :exclamation: 문제

<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156722719-4b998785-9b6e-42b6-8dab-3f9537fa1a5e.gif" alt="체크 이미지.gif" width="80%">
</div>

```tsx
const [scrollY, setScrollY] = useState<number>(0);
const [checkAnimation, setCheckAnimation] = useState<boolean>(false);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 스크롤이 1680 이상이면 체크 이미지를 렌더링
useEffect(() => {
  scrollY > 1680 ? setCheckAnimation(true) : setCheckAnimation(false);
}, [scrollY]);
```

&nbsp;체크 이미지가 스크롤에 따라서 화면에 그려지게 코드를 작성했고, 첫 번째 스크롤 시에는 gif가 그려졌습니다. 그러나 한 번 순서대로 렌더링 되고 나면, 다시 위로 스크롤을 했다가 내릴 경우 다시 순서대로 렌더링 되야 하는데, **이미 렌더링된 상태로 멈춰있는 문제**가 발생했습니다.

#### :white_check_mark: 해결

```tsx
const Check = React.memo(({checkAnimation} : CheckProps) => {
   ...
})
```

&nbsp;**메모이제이션**을 통해서 이 문제를 해결할 수 있었습니다. `React.memo()`를 사용해 렌더링된 결과를 리액트가 메모이징 하게 만들어서 props로 전달하는 `checkAnimation` 값이 **스크롤에 의해서 변경될 때마다 리렌더링** 하게 만들 수 있었습니다.

```tsx
<img src={src + `?a=${Math.random()}`} />
```

&nbsp;작은 문제가 하나 더 있었는데, gif가 무한히 반복되지 않고 한번만 그려지는 gif 파일이었습니다. 이를 해결하기 위해서 **src 주소값의 쿼리 파라미터에 난수값을 발생시켜 적용**해줌으로 매번 gif를 새롭게 그려지게 만들 수 있었습니다.

**[코드 보기](https://github.com/brad-go/wanted-walnut/blob/d8cab95e310404f1e2025e91fa50cd3a7e12ba17/components/common/Check/Check.tsx#L10)**

### 6-2. SVG 사용

#### :exclamation: 문제

```tsx
import { ReactComponent as Reservation } from 'assets/mouse.svg';
```

&nbsp;CRA를 사용해서 프로젝트를 진행할 때는 svg 파일을 아주 쉽게 사용할 수 있었습니다. 위와 같은 코드로 svg 파일을 ReactComponent로 `import`해서 사용할 수 있었는데, Next.js에서는 svg를 컴포넌트로 가져올 수 없는 문제가 있었습니다.

#### :white_check_mark: 해결

```bash
yarn add @svgr/webpack
```

&nbsp;svg를 원활히 사용하기 위해서는 svg로더를 설치해줘야 했습니다. 그리고 `next.config.js` 파일의 간단한 수정을 통해 이 문제를 해결했습니다.

```js
const nextConfig = {
  ...
  webpack(config) {
    // svg 불러오기
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    ...
  },
  ...
};

module.exports = nextConfig;
```

### 6-3. 문단의 줄을 개행해주는 유틸 함수

#### :exclamation: 문제

화면에 보여줄 여러줄의 글들이 많았는데, 이 글들을 CSS만을 이용해서 원하는 위치에 개행을 할 수는 없었습니다.

#### :white_check_mark: 해결

```tsx
export const alignLine = (contents: string) => {
  const altered = contents.split('\\n').map((content: string, idx: number) => {
    return (
      <React.Fragment key={idx}>
        {content}
        <br />
      </React.Fragment>
    );
  });
  return altered;
};
```

&nbsp;**문자열을 넣어주면 개행문자가 있을때마다, 개행을 해주는 함수**를 만들어서 해결할 수 있었습니다.

<br />
## :open_file_folder: 7. 디렉토리 구조

```bash
.
├── assets
├── components
│   ├── common
│   ├── Header
│   ├── Intro
│   ├── Banner
│   ├── LiveClass
│   ├── ReadingList
│   ├── LiveAccess
│   ├── Diary
│   ├── ImageSlider
│   ├── Feature
│   ├── PostScript
│   ├── Ticket
│   └── Footer
├── Layout
├── hooks
├── pages
├── styles
├── types
└── utils
      └── constants
```

<br />

## :pray: 8. 회고 및 느낀점

&nbsp;처음으로 Next.js 프로젝트를 진행하게 되었는데, 초기 설정이 정말 어려웠던 것 같습니다. 폴더 구조를 어떻게 잡아야 할지, CRA에서는 당연히 되는게 왜 안되는지 등등 난관이 많았습니다. 하지만 이 프로젝트를 통해 기존 CRA의 문제와 **CSR**, **SSR** 그리고 **SEO**에 대해서 고민해 볼 수 있는 정말 좋은 경험이었던 것 같습니다.

&nbsp;아쉬운 것은 페이지 Next.js 프로젝트지만 페이지 이동이 없고, api를 받아오는 프로젝트도 아니여서 Next의 성능을 제대로 활용하지 못한 프로젝트였다고 생각합니다. CSR과 SSR을 적용해 볼 부분이 없었기에 다른 프로젝트 진행 시에 조금 더 실험해보고 싶습니다.
