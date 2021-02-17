---
title : autocmd
created : 2020-09-19 12:02:13 +0900
modified : 2021-02-18 04:40:20 +0900
tag : 
---
## [autocmd](autocmd.md)

-   BufNewFile 새 파일을 만들어서 편집하기 시작함
-   BufWritePost 전체 버퍼를 파일에 쓴 후
-   FileWritePre 버퍼의 일부를 파일에 쓰기 시작함
    등등..
    
## autocmd-intro
1. Introduction

file을 읽고 쓸때, 버퍼나 윈도우에 진입하거나 빠져나올 때, vim을 종료할 때 특정 명령들을 자동적으로 실행하게 할 수 있다. 예를들어서 'cindent' autcommand를 만들어 '*.c'와 파일 형식이 일치할 때 작동하는 명령을 만들 수 있다. 또한 고급 기능들을 사용할 수도 있다. 이를테면 압축된 파일(gzip-example)을 편집하는 등의 작업. 일반적인 autocommands 작성은 .vimrc나 .exrc 파일에 넣는다.

### 참고

-  https://soooprmx.com/archives/3469
-  https://vimhelp.org/autocmd.txt.html#autocmd-intro
