set nocompatible
filetype plugin on
syntax on

let wiki = {}
let wiki.path = '~/Playground/nextjs-blog2/blog/wiki'
let wiki.syntax = 'markdown'
let wiki.ext = 'md'

let g:vimwiki_list = [wiki]
let g:vimwiki_conceallevel = 0

:set expandtab
:set shiftwidth=2
:set softtabstop=0

let mapleader = ","
let maplocalleader = "\\"

nnoremap <leader>ev :vsplit $MYVIMRC<cr>
nnoremap <leader>eV :e $MYVIMRC<cr>
onoremap ih :<c-u>execute "normal! ?^--\\\|^==\\+$\r:nohlsearch\rkvg_"<cr>
nnoremap <leader>tp :call TogglePublish()<cr>
nnoremap <leader>wh :call WriteHeader()<cr> 

function! TogglePublish()
  let @/ = 'publish'
  execute "normal! gg^nww"
  let l:currentWord = expand("<cword>")
  if l:currentWord == "true"
    execute "normal! cwfalse"
  else
    execute "normal! cwtrue"
  endif
endfunction

function! IsHeaderExist()
  if match(getline(1), "^-\\+$") != "-1"
    return 1
  endif
endfunction

function! IsVimWiki()
  if match(expand('%:p'), "blog/wiki") != "-1" && &filetype == "vimwiki"
    return 1
  endif
endfunction

function! IsValidHeader()
 if match(getline(1), "^-\\+$") != "-1" && match(getline(7), "^-\\+$") != "-1"
   return 1
 endif
endfunction

function! IsIndex()
  if expand('%:t') == "index.md"
    return 1
  endif
endfunction

function! GetCreatedTime()
  let l:fileName = expand('%:t')
  let l:currentAbsolutePath = expand('%:h')
  let l:createdTime = substitute(system('cd ' . currentAbsolutePath . ' && git log --pretty=format:"%cd" --date=format:"%Y-%m-%d %H:%M:%S %z" -- ' . l:fileName, 'getline("$")'), '\%x00.\+', "", "")
  if l:createdTime == ""
    return strftime('%Y-%m-%d %H:%M:%S +0900')
  endif
  return l:createdTime
endfunction 

function! ActualWriteHeader()
  call append(0, "---")
  call append(1, "title : " . substitute(expand('%:t'), "\\.md", "", ""))
  call append(2, "created : " . GetCreatedTime())
  call append(3, "modified : " . strftime('%Y-%m-%d %H:%M:%S +0900'))
  call append(4, "tag : ")
  call append(5, "publish : false")
  call append(6, "---")
endfunction

function! WriteHeader()
  if &modified && IsHeaderExist() == 0 && IsVimWiki() && IsIndex() == 0 
    let b:saveWithHeader = input("make header? (y/n): ")
    if b:saveWithHeader != "n"
      call ActualWriteHeader()
    endif
  elseif &modified && IsHeaderExist() == 1 && IsValidHeader() == 1
    let lineNumber = 1
    for line in getline(1, 7)
      if match(line, "modified : ") != "-1"
        call setline(lineNumber, substitute(line, "modified : .\\+", "modified : " . strftime('%Y-%m-%d %H:%M:%S +0900'), ""))
      endif
      let lineNumber = lineNumber + 1
    endfor
  elseif &modified && IsHeaderExist() == 1 && IsValidHeader() == 0
     execute "let @/ = '---'"
     execute "normal! gg^vn$d"
     call ActualWriteHeader()
  endif
endfunction

autocmd BufWritePre *.md :call WriteHeader()
