---
title : vim
created : 2021-02-19 22:20:25 +0900
modified : 2021-03-03 01:20:04 +0900
tag : 
publish : false
---
### 공부

-  https://www.openvim.com/
-  https://medium.com/@jungseobshin/vim-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%B2%95-4%EC%A3%BC-%EA%B3%84%ED%9A%8D-77f3f7e263f7 (vimtutor)
-  https://vimhelp.org/autocmd.txt.html#autocmd-intro (vim help 문서가 포맷팅돼있어서 더 보기 편하다.)

### vimrc

#### 위치

```sh
   system vimrc file: "$VIM/vimrc"
     user vimrc file: "$HOME/.vimrc"
 2nd user vimrc file: "~/.vim/vimrc"
      user exrc file: "$HOME/.exrc"
       defaults file: "$VIMRUNTIME/defaults.vim"
  fall-back for $VIM: "/usr/share/vim"
```

#### 수정 방법

```vim
:e $MYVIMRC
```

#### 참고

-   https://stackoverflow.com/questions/10921441/where-is-my-vimrc-file

### formatOnSave

-   onSave format이 가능하다고 한다.
-   https://prettier.io/docs/en/vim.html

### 들여쓰기 설정

-  `set expandtab` : tab을 스페이스바 (공백)으로 대체할 수 있게 한다.
-  `set shiftwidth=4` : 4칸 공백으로 정함

#### 참고

-  https://vi.stackexchange.com/questions/7975/how-can-i-change-the-indent-size

### buffer, window, tab

#### 참고

-  https://bakyeono.net/post/2015-08-13-vim-tab-madness-translate.html#%EB%B2%84%ED%8D%BC

### 한글 매핑

-  https://www.reddit.com/r/vim/comments/as3irj/movement_keys_hjkl_and_alternate_keyboards/
