## 나만의 블로그 만들기 작업

### 원하는 게시 컨텐츠

-   TIL
-   기술 정리
-   에세이
-   서평
-   일상 기록 및 소통 (동물의 숲, 음악, 영화 취향)

### 기록 공간

#### 현재

-   velog : 기술적인 내용, TIL
-   github : TIL, 코드
-   twitter : 정보 얻는 용, 추후는 개인 생각들
-   facebook? : 동물의 숲 용, 정보 얻는 용
-   instagram : 개인 생각들 자랑할 거리들, 개인적인 것들 많이
-   왓챠 : 영화평, 별점
-   naver blog : 과거 기록들
-   (없지만)브런치 : 에세이, 서평
-   onenote : 서평, 에세이

#### 이상적인 형태

-   custom blog
    -   기술, TIL + 링크모음 (github, 왓챠, instagram)

## 기술 선택

-   vimwiki + nextjs + nodejs server

### 왜 굳이 다시 블로그를 만들까?

-   너무 분산돼있음
-   기록은 좋다. (개발자나 인간으로서 어필용도로도)
-   벨로그는 결국 남에게 종속
-   지속적으로 모든걸 기록할 공간이 필요하다

#### tistory 등을 이용하면 안되는 이유는?

-   자유로운 커스텀화가 필요하다고 생각한다.
-   tistory는 기본적인 환경은 좋으나 / 바꾸고 싶을 때 제약이 많다.
-   wordpress를 잘 익히면 자유로운 커스텀이 가능할 것 같다. 아마도 그 자체로도 내 쓸모가 올라갈 것 같기도 하고
-   그래도 개발자라면..? 그래 일단 간지가 난다. 못생겼어도
-   vim에 익숙해지는 것도 큰 덤일 것이다.
-   어렵겠지만 일단 시도해보자.

#### vimwiki

-   vim을 익히고 싶어서
-   markdown도 지원한다고 한다.
-   wiki형식은 블로그에 비하면 한정된 형식이지만 원하면 wiki를 wrapping하도록 하면 된다.
    -   javascript로 개인 위키를 만들어주는 라이브러리를 몇개 봤으나 너무 무거울 것 같았다.
-   존그립님 블로그를 보니 vimscript를 알아야할 것 같은 불길한 느낌이 든다.. 차라리 shellscript면 더 좋을텐데..

##### 꼭 vimwiki여야 할까?

-   https://www.reddit.com/r/vim/comments/8xzpkz/you_probably_dont_need_vimwiki/
-   https://joereynoldsaudio.com/2018/07/07/you-dont-need-vimwiki.html

##### vim을 익히자

-   https://medium.com/@jungseobshin/vim-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%B2%95-4%EC%A3%BC-%EA%B3%84%ED%9A%8D-77f3f7e263f7

#### ~~static generator (후보 gatsby, hugo)~~

-   jekyll은 제외했다. 최신을 좋아하므로 gem은 조금 구식처럼 느껴졌다.(실제로는 별 상관 없을테지만)
-   go를 넣은 이유는 트렌디할 것 같아서이다. 그리고 익힌다면 유용할 것 같다.
-   이런 심적인 이유들을 제외한다면 gatsby가 제일 나을 것 같다. 익숙한 언어이고 충분히 광범위하게 쓰이고 있어서
-   그렇지만 hugo로 결정! go 템플릿 언어로 간단히 쓰면 어렵지 않겠지, 가장 트렌디 하니까, 익혀야 하는 것이 그래서 go와 vim이 되었다.

#### aws server + (custom server)nextjs

-   static generator를 사용해서 블로그를 올리는 것이 제일 좋을 것이지만, 서버에서 직접 serving 하도록 해보고 싶었다. aws free tier로 ec2를 하나 개설하고, 해당 서버에서 nextjs를 이용한 서버를 실행시켰다.
-   백그라운드 작업을 하고 싶어서 custom server를 사용했다.
    -    https://nextjs.org/docs/advanced-features/custom-server

## 과정

-   vimwiki의 핵심은 vim 에디터를 이용 + 이를 통해 쉽고 간결하게 vimwiki를 작성하는 것이다.
-   그렇다면 문제는 vim 에디터를 이용하는 것이 쉽지 않을 것이라는 것이다. 최소 한달간은 vs code를 이용해서 공부내용을 정리하고 작성하는 것이 훠얼씬 빠를 것이다.
-   그러므로 병행을 하자. 시간분배를 해서 공부할 때는 vscode나 기타 등등으로 작성하고
-   vimwiki로 옮기는 작업 vim으로 작성해보기 등을 하자.

## 참고

-   https://johngrib.github.io/wiki/my-wiki/?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social
-   https://www.staticgen.com/

