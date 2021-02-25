---
title : hugo
created : 2021-02-17 17:21:50 +0900
modified : 2021-02-25 22:11:46 +0900
tag : 
publish : true
---
# hugo

## content

-   quickstart manual에서는 content/<CATEGORY>/<FILE>.<FORMAT> 에 콘텐트 파일을 생성할 수 있다고 돼있다. you can이라고 돼있는걸 보니 다른 위치에도 당연히 있어도 될 것 같다.

## front matter

-   생성한 파일의 처음에는 다음과 같은 내용이 있었다.
-   아래와 같은 metadata를 hugo에서는 front matter라고 부른다.

```markdown
---
title: 'My First Post'
date: 2019-03-26T08:47:11+01:00
draft: true
---
```

-   위같은 양식을 이용해서 존그립님의 방식대로 modified등을 추가하거나 할 수 있을 것 같다.

## gh-pages로 deploy

-   https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch 참고함

## archetype

-   `hugo new posts/my-first-post.md`와 같은 명령어로 새로운 post 작성을 시작할 수 있는데, 이 때 위 front matter에 작성된 내용같은 것이 자동으로 입력된다. 작성할 포스트의 카테고리 등에 맞는 저런 내용을 archetypes라고 하는 것 같다.

-   content/dir1.md archetype을 작성해두면 `hugo new dir1/something.md`로 새 컨텐츠를 만들 때 적용된다.

## data

-   database이라고 보면 된다고 한다. (json 등)

## layout

-   header, body, footer등의 템플릿? 을 정하고
-   default layout도 정하고..

## static

-   css, js, image 등

## themes

-   layout, archetype, front matter 등이 미리 지정돼있는 묶음인 것 같다.

## 트러블슈팅

-  vscode template : https://stackoverflow.com/questions/57980680/hugo-template-formatting-in-vs-code 를 참고해서 html twig라는 것을 깔았다. php용이라는데.. hugo가 php 양식을 따르는건지 모르겠지만 어찌됐건 적용이되는 것 같다.

## 참고

-   https://zwbetz.com/make-a-hugo-blog-from-scratch/
-   https://gohugo.io/
-   https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3
