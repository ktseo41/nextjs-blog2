---
title : Linux
created : 2021-02-17 17:21:50 +0900
modified : 2021-02-25 22:18:11 +0900
tag : 
publish : true
---
## Linux
### commands
#### grep
grep filter는 파일에서 특정 패턴을 검색하고, 패턴에 맞는 모든 줄을 출력한다. 여기서 패턴은 정규표현식을 말한다

`grep [options] pattern [files]`

#### Options
```
-i, --ignore-case : 대소문자 무시
-l, --files-with-matches : 정상 출력을 숨깁니다. 대신 기존 정상 출력 중 파일 이름만 출력합니다.
-r, --recursive : 각 디렉토리의 모든 파일들을 재귀적으로 읽어갑니다. 커맨드라인에 있을때만 symbolic link를 따라갑니다. 파일 피연산자가 제공되지 않으면 grep은 현재 디렉토리를 검색합니다. 이는 -d recurse 옵션과 같습니다.
```

### xargs
-  standard input으로부터 command line을 빌드하고 실행합니다.
-  추가 설명 : standard input으로부터 execution pipeline을 빌드하는 커맨드입니다. `grep`과 같은 툴들은 standard input을 parameter로 받아들일 수 있지만, 다른 툴들은 그렇지 않습니다. `xargs`를 사용해서 `echo`나 `rm`, `mkdir`이 standard input을 인자로 받을 수 있게 합니다.

#### 예시
```
echo 'one two three' | xargs mkdir
ls
one two three
```

#### 참고
-  https://shapeshed.com/unix-xargs/

### sed
-  텍스트를 필터링하고 변경하는 stream editor입니다.
-  input stream으로부터 기본적인 text transformation을 하기 위해 사용합니다.

#### options
```

-i : 그 자리에서 파일을 수정합니다.
```

## 예시
### `grep -lr "static" . | xargs sed -i '' 's/\.\/static/\.\.\/static/g`
