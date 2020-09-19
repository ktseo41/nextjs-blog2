# vimscript
## function
```vimscript
function! AddNumbersLoudly(x, y)
    echo 'Adding'  .. a:x ..  'and'  .. a:y
    return a:x + a:y
endfunction
```

-  unscoped function은 capital letter로 시작해야한다.

```vimscript
function! s:addNumbersloudly(x, y)
    echo 'Adding'  .. a:x .. 'and'  .. a:y
    return a:x + a:y
endfunction
```

-  scoped function은 소문자로 시작해야한다.


## 참고
-  https://learnxinyminutes.com/docs/vimscript/
