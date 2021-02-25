---
title : vimscript
created : 2021-02-17 17:21:50 +0900
modified : 2021-02-25 22:11:08 +0900
tag : 
publish : true
---
## vimscript
### function에서 search하는 방법

`:help function-search-undo`에 따르면 search pattern은 function에 의해 바뀌지 않는다는 숨겨진 feature가 있다고 하는데, 또 하나의 숨겨진 feature로 `@/`를 직접 override 해서 이를 바꿀 수 있다.

```vimscript
function! Test()
  let @/ = 'textToSearch'
  execute "normal! vnnd"
endfunction
```

그래서 textToSearch를 찾은 후 어떤 normal명령어를 수행하려한다면 위와 같은 과정을 통해서 할 수 있다. 

#### 참고

-  https://vi.stackexchange.com/questions/3655/how-can-i-make-a-search-in-vimscript-let-n-and-n-look-for-more
