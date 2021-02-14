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
onoremap ih :<c-u>execute "normal! ?^--\\\|^==\\+$\r:nohlsearch\rkvg_"<cr>

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

function! WriteHeader()
  if &modified && IsHeaderExist() == 0 && IsVimWiki()
    let b:saveWithHeader = input("make header? (y/n): ")
    if b:saveWithHeader != "n"
      call append(0, "---")
      call append(1, "title : " . substitute(expand('%:t'), "\.md", "", ""))
      call append(2, "created : ")
      call append(3, "modified : " . strftime('%Y-%m-%d %H:%M:%S +0900'))
      call append(4, "tag : ")
      call append(5, "---")
    endif
  elseif &modified && IsHeaderExist() == 1
    let lineNumber = 1
    for line in getline(1, 6)
      if match(line, "modified : ") != "-1"
        call setline(lineNumber, substitute(line, "modified : .\\+", "modified : " . strftime('%Y-%m-%d %H:%M:%S +0900'), ""))
      endif
      let lineNumber = lineNumber + 1
    endfor
  endif
endfunction

autocmd BufWritePre *.md :call WriteHeader()
