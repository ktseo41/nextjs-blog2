# git

## 출처

-   https://www.inflearn.com/course/git-and-github/lecture/14171

## 변경사항 취소하기

-   마지막 저장으로 돌아가기
-   checkout으로 가능하다.

## git 브랜치 병합하기

-   현재 브랜치 : HEAD 브랜치
-   fast foward merge : master에 변경사항이 없음. version2에는 commit이 2번 있었음

```bash
$ git checkout master
$ git merget version2
```

-   여러 commit을 merge(conflict)
    ![](../resources/_gen/images/merge1.png)
    -   충돌해결 : 수동으로 해야한다. vscode에도 충돌내용이 보인다.
    -   충돌 해결 후 다시 스테이지에 올린다. commit 명령어도 해줄 필요는 없다. ? merge라서?
    -   version2는 필요 없으면 브랜치 삭제해도 된다.

## orphan option

- git checkout --orphan <branchname>으로 고아 브랜치를 만들 수 있다.
    - hugo quickstart를 보던 중 발견
    - 아주 직관적인 네이밍인 것 같다.

## tagging
### 태그 생성

```bash
$ git tag <tagname>
# git tag v1.0

$ git tag <tagname> <commitChecksum>
# git tag v1.0 35a3a6c8e025da8fc6be5058fe6bc4024fd76642
```

### 태그 푸시

```bash
$ git push origin <tagname>
# git push origin v1.0

$ git push origin --tags
# 모든 tag를 push
```

### 태그 삭제

#### local

```bash
$ git tag
v1.0
v2.0
v2.5
v3.0

$ git tag -d v2.5
Deleted tag 'v2.5' (was aea93f1727)

$ git tag
v1.0
v2.0
v3.0
```

#### remote

```bash
$ git push origin :refs/tags/v2.5
To git@github.com:gulabbisht/drupixels.git
 - [deleted]               v2.5
```

### 태그로 체크아웃

```bash
$ git checkout <tagname>

$ git checkout v1.0
Checking out files: 100% (1146/1146), done.
Note: checking out 'v1.0'.

You are in 'detached HEAD' state.
```

#### **detached HEAD** 라서 좋은 점은..

![detachedHead](../resources/_gen/images/tagHead.png)

### 참고

-   https://www.drupixels.com/blog/git-tags-guide-create-delete-push-tags-remote-and-much-more
-   https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%ED%83%9C%EA%B7%B8

