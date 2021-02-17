---
title : feconf2019
created : 2020-09-19 12:02:13 +0900
modified : 2021-02-17 17:15:25 +0900
tag : 
---
## react + typescript

-   time travel
-   좋은 테스트 환경 및 도구
-   함수형 컴포넌트
-   server side rendering에도 적용하기 쉽고, react native 지원

### why typescript?

-   js super set
-   예정 표준을 미리 지원해줌
-   정적 타입으로 안전성 보장
-   real OOP 가능
    -   private, interface, generic 지원
-   강력한 도구 지원
    -   vs code 와 궁합이 좋다.
    -   강력하고 성장하는 생태계
    -   server/ client 모두지원
    -   빠른 디버깅
    -   호이스팅, 형변환
-   troubleshooting
    -   styled component 적용 사례, 이유
        -   스택을 적어 놓지 않고, react와 typescript만
        -   inline style을 사용했으나, media 쿼리 pseudo 사용 어려움, 뷰 컴포넌트와 스타일을 격리할 필요가 있다고 느낌
        -   동적 스타일링의 필요성
    -   클래스 남발의 문제점 : dan abramov, class vs function component
        -   예제에서 3초 후 b라는 사람의 페이지로 이동한다면 b의 이름이 뜬다.
        -   props는 immutable, this는 mutable
        -   class는 this에 접근을 많이할 수 밖에 없다. 그게 문제가 될 수 있음, functional에서는 closure이므로 값들이 유지된다.
        -   외 몇가지 장점들 언급, state또한 immutable, useRef를 사용하면 최신 유지 가능
    -   성능
        -   항상 빠른 것은 아니고 충분히 빠른 것.. 개발자가 최적화를 해줘야 한다.
        -   reconciliation 이해하기
        -   props, state는 '얕은 비교'
        -   리렌더링을 원치 않는 경우가 있고 전역의 prop만 변경한 경우가.. shouldComponentUpdate 작성, 혹은 puercomponent 적용
    -   ts 적용 트러블
        -   단기 생산성은 떨어질 수 있다.대규모 프로젝트에서는 안전성, 탕비 추론 등으로 생산성 향상
        -   any 남발 x
        -   api값 하나만 바뀌어도 코드를 너무 많이 고쳐야할수도 있는데 interface, enum, type을 잘 활용하면 된다.
-   q&a
    -   상태관리
        -   redux 사용하다가 mobx?, typescript와 궁합은 다 좋다.
    -   CRA를 사용하지 않는 이유는?
        -   react에 대한 노하우가 없을 때를 말한 것

## es6+ 비동기 프로그래밍과 실전 에러 핸들링

-   image로부터 height 구하기
    -   image가 불러와 지지 않아서 height가 구해지지 않음
    -   img.onload로 구하면 됨
    -   onload를 외부에 전달, promise, resolve
    -   ... 계속 디버깅 async, await 남발, 그런데 img url이 잘못됐으면?
    -   img.onerror, reject에서 error 넘겨주기
    -   에러는 2번째에서 발생했는데 3, 4번째 이미지까지 get 요청을 날리는 큰 문제가 있다.
-   에러 핸들링
    -   generator yield 사용한 map 함수 작성
    -   map에서 동기 비동기를 나눠서 작성
-   에러 핸들링을 하지 않는 함수

    -   순수함수를 만들었는데, 이 안에서 에러 핸들링을 직접 해버리면 에러가 날 수 있는 Img주소를 전달하거나, 옳은 img 주소만 넘기는 개발 환경이 있을 수 있기 때문에, 안에서 직접 에러 핸들링을 만드는 것이 아니라. 개발자가 해당 함수를 가지고 (해당 함수가 error를 캐치해서 발생시키기만 하면 됨) 에러가 날 때 상황을 직접 다루도록 하는 것이 더 좋은 함수이다.
    -   에러가 터지게 만드는 것이 좋다.. 왜냐면 sentry 같은 .. 곳에서 감지해서 어찌고.. try catch를 애매하게 하고 에러를 터지지 않게 하면 가장 안좋다.

-   q&a
    -   에러 트래킹이 할 수 없어 보이는데 괜찮나?
        -   그렇지 않다. error는 스택에 쌓인다? 최신 node에서는 비동기도 error 스택에 쌓인다.
-   마무리
    -   코드는 유인동님 github에 올리도록
    -   MARPPLE

## angular + ionic 으로 멀티플랫폼 PWA 개발하기

### pwa

-   진보적인 웹앱
    -   google checklist 참고
    -   web app manifest : 홈화면에 추가
    -   servcie worker : 오프라인 가능
        -   service worker가 해주는 기능은 브라우저가 이미지 등을 저장하게..
-   pwa 부터 만들고 네이티브 앱으로 번들링 하자
    -   왜?
        -   네이티브는 배포 과정이 느리다.
        -   사용자가 업데이트를 안하면 그만
        -   pwa는 새로운 업데이트를 확인하면 바로 자동 업데이트, service worker가 물론 캐싱을 하긴 하지만.
-   ionic + PWA 이후 framework는?
    -   ionic 4 현재는 다 지원. vue, angular, react 등.. 원래는 angular의 ..
-   web component?

    -   custom element + shadow dom
        -   shadow DOM : 페이지에서 shadow DOM을 제어해줄 수 없다. shadow DOM이 API를 제공해줘야함
    -   web component의 장점
        -   iframe을 쓰지 않고 트윗을 가져가거나 할 수 있다. 예시)임
        -   ![f](/Users/bhseo/Desktop/ionic.png)

-   pwa

    -   구글이 pwa 지원을 해주기 때문에, 개발자 도구를 들어가면 pwa 관련 내용을 살필 수 있다. manifest, service workers

-   마무리

    -   문제? 혼자서 모바일 앱 개발
    -   왜 ionic? 모바일 UI에서 필요한 컴포넌트들 제공
    -   pwa? 로컬에 리소스 저장, 빠른 자동 업데이트
    -   angular? 장점. 규모가 커지면서 생길 문제들을 구글에서 고민하고 해결하고 있었음

-   q&a
    -   지금 기술을 선택한다면? flutter
    -   웹 컴포넌트 ssr이 안되는데 tab 등은 사용, 서버사이드 렌더링 관련은?

## microsercie architecture in front end

-   서비스의 개발 한계
    -   해결방안 생각 : 의존성을 최대한으로 없애자
-   의존성
    -   없애기 위한 핵심 : 각 요소들 간에 교환 체계 구축
    -   이 것이 마이크로 서비스의 핵심이라고 생각
-   프론트엔드 상에서 적용
    -   단 하나의 메세지 통로
        -   switch, case 떡칠
-   공용 message protocol

-   q&a
    -   protocol의 버전은 없어보였다.
        -   앞으로도 변경될 일이 없을 것이다.

## github start 3k scene.js, moveable.js

-   react -> vanilla
    -   middleware로 preact 추천

## 진정한 CI/CD를 위한 E2E test 시작하기

-   test, debug 차이
-   QA 팀 유무
-   write test, not too many mostly integratino
-   queryPie
-   E2E test 도구
    -   nightwatch js
    -   cypress
    -   testcafe
-   .net core

## angular

-   angular js가 아님

