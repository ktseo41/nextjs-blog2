---
title : vimwiki, nextjs로 블로그를 만들어보자
created : 2021-02-25 22:23:05 +0900
modified : 2021-02-25 22:28:04 +0900
tag : 
publish : true
---
## 블로그

  vimwiki + next.js + material-ui 로 블로그를 만들고 있다.
  
### 디자인   

#### figma

![](https://user-images.githubusercontent.com/6429885/108632608-36a9d580-74b3-11eb-9c2d-28d1da7f2c18.png)

![](https://user-images.githubusercontent.com/6429885/108632607-36113f00-74b3-11eb-91c2-bfb50fe13121.png)

  사이드 프로젝트를 하면서 figma를 사용해봤는데 좋았다. figma는 (아마도 대부분의 프로토타이핑 툴들은) 디자인한 내용을 그대로 개발하기 쉽게 여러 수치들을 제공해준다. 그래서 editor와 웹페이지를 왔다갔다하며 이것저것 고쳐보는 수고를 덜 수 있어서 좋다. 컴포넌트 기능도 제공해서 어떤걸 컴포넌트화 하는게 좋은지 공부도 된다. zeplin, sketch, xd 등 여러 프로토타이핑 툴들이 있는데 다 좋은 것 같다.

#### Material UI

![](https://user-images.githubusercontent.com/6429885/108633303-ed5b8500-74b6-11eb-8c91-d7037d1708a1.png)

  창의성을 발휘하기보다 믿을만한 가이드를 따르고 싶었다. Material Design에서는 디자인 철학이나, 권장하는 규칙들, 색 테마를 정하는 법들 등을 잘 정리해놨다. UI Framework로 Material-UI를 선택한 것도 Material Design의 시스템을 가장 잘 적용했을 것이기 때문이다.

![](https://user-images.githubusercontent.com/6429885/108663465-fa5a9180-7513-11eb-8f66-573b65b4e57f.png)
<p class="caption">컴포넌트들의 기본 elevation</p>

<p style="display: flex; justify-content: space-around; ">
<img width="45%" src="https://user-images.githubusercontent.com/6429885/108623666-82448b00-7483-11eb-9f70-48ab1e78a460.png" />
<img width="45%" src="https://user-images.githubusercontent.com/6429885/108623694-aef8a280-7483-11eb-9ca1-0f3c20f330da.png" />
</p>

  실제로 가장 많이 참고한건 구글 서비스 화면들이었다. Material Design을 따라서 완성도 높게 만들었을 것이고 자주 이용하고 있는데 가독성도 좋고 편했다. 그런데 화면을 잘 뜯어보니 어떤 규칙을 따라서 만든건지 찾을 수 없는 요소들도 있었다. 그래도 실제 서비스이니 맘에 들면 참고했다. 

### 공개용 글
  
 공부를 하거나 일상을 보내다가 뭔가 인상이 깊으면 대충이나마 기록을 남기려고 하는 습관이 있는데, 이 중에서 기술적인 공부같은 것들이나 공개하고 싶은 것들이 있다. 공개용 글을 쓸 장소로 네이버 블로그도 있고, 인스타그램도 있고, 페이스북도 있지만 한데 모으고 싶었다. 
  
![](https://user-images.githubusercontent.com/6429885/108596375-f7eb2100-73c7-11eb-9245-d2cecc00511d.png)
  
<figcaption>차례대로 roamresearch, onenote, notion. 최근에는 roamresearch도 써보고 있다</figcaption> 

### vim
  
 vim과 cli에 대한 로망이 있는데 johngrib님의 wiki를 보니([Vimwiki + Jekyll + Github.io로 나만의 위키를 만들자](https://johngrib.github.io/wiki/my-wiki/)) 뽕이 많이 왔다. vimwiki로 블로그를 만들면 vim도 익히고 블로그도 만들고 1석2조.. 개인적으로 기대가 많이 되는 일이다. 궁극적으로는 vscode대신 모든 editing 작업들을 vim으로 하는 것이 목표다.

#### vimscript

-  Header 작성 함수

##### 꼭 vimwiki여야 할까?

-   https://www.reddit.com/r/vim/comments/8xzpkz/you_probably_dont_need_vimwiki/
-   https://joereynoldsaudio.com/2018/07/07/you-dont-need-vimwiki.html

### next.js
  

작성중..

-   https://joereynoldsaudio.com/2018/07/07/you-dont-need-vimwiki.html
