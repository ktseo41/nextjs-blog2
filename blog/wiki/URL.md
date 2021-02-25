---
title : URL
created : 2021-02-17 17:21:50 +0900
modified : 2021-02-25 22:14:36 +0900
tag : 
publish : true
---
## URL
-  URL은 가장 흔한 리소스 식별자다.
-  웹을 이용한다는건 결국 리소스를 요청하고 받는 과정이기 때문에 리소스를 정확히 식별하는 것은 중요하다.
-  리소스를 식별하는 방법으로는 리소스 고유한 이름을 부여하거나(URN) 리소스의 위치를 식별하는 방법(URL)이 있다.
    -  URN의 예로 민음사에서 2007년에 출간한 김승옥의 무진기행은 ISBN10으로 8937461498, ISBN13으로 9788937461491 이다. (ISBN은 국제표준도서번호)
    -  민음사 판 김승옥의 무진기행의 URN은 하나지만, 판매하는 인터넷 서점의 URL은 서점별로 다를 것이다.
    -  위처럼 URL과 URN의 목적은 다르다. URN은 리소스를 여기저기로 옮기더라도 문제없이 식별을 할 수 있게할 것이다.

## URN
-  Uniform Resource Name

## URI
-  Uniform Resource Identifier
-  URL, URN이 있음
---
> 그렇지만 현재 URN은 상대적으로 적게 활용되고 있어서, URI를 언급했을 때 자세한 설명이 없으면 일단 URL로 이해해도 될 것이다. (Http 완벽 가이드 에서는 특별한 언급이 없으면 URI와 URL을 같은 의미로 생각하라고 했음..)

## URL syntax
-  좀더 자세하게 들어가보자
-  URL은 일정한 규칙을 따를 것이다.

### `<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>`

-  URL syntax는 위와같은 형태를 가지지만, 간단하게 표현하면 아래와 같다.

###  `<scheme>://<location>/<path>`

예시를 가지고 설명해보자

> http://www.joes-hardware.com/seasonal/index-fall.html

-  `http` : 위에서 http는 \<scheme\>에 해당한다. 웹 클라이언트가 리소스에 어떻게 접근하는지를 알려준다. 여기서는 http 프로토콜을 따른다는 것을 의미한다. mailto, ftp, rtsp 등 여러 프로토콜을 사용할 수 있다.
-  `www.joes-hardware.com` : \<location\>에 해당한다. 서버의 위치이다. 리소스가 어디서 호스팅되고 있는지를 알려준다.
-  `/seasonal/index-fall.html` : \<path\>에 해당한다. 서버 내에 존재하는 리소스들 중 무엇인지를 알려준다.

어찌됐건

-  URL의 대부분은 `<scheme>://<location>/<path>`와 같은 구조로 이루어져있다.
-  하나씩 조금 더 살펴보자. 조금 더 깊은 내용은 따로 알아봐야할 것 같고 대략적인 내용 중 몇몇만 적어봤다.


## URL components

### host & port
-  리소스를 호스팅하고 있는 장비와 장비 내 서버의 위치를 나타낸다.
-  http의 기본 포트는 80이므로 예시의 호스트&포트는 아래와 같을 것이다. 
-  `http://www.joes-hardware.com:80/index.html`
-  `http://161.58.228.45:80/index.html`

### user & password
이하 내용은 http 완벽가이드의 내용 중 일부
-  FTP와 같이 사용자 이름과 비밀번호를 요구하는 URL 스킴을 사용한다면, 그 값들이 삽입되어 있지 않을 경우 기본 사용자 이름과 비밀번호 값을 넣을 것이다.
-  기본 사용자 이름 값으로 'anonymous', 비밀번호는 브라우저마다 기본값을 사용(IE는 'IEUser', 크롬은 'chrome@example.com')

### parameter
-  더 많은 정보를 제공할 필요가 있을 때
-  ; 문자로 구분해서 이름=값의 형태로 제공한다.
-  예시 : `ftp://prep.ai.mit.edu/pub/gnu;type=d`

### query
-  사용하면 안 되는 문자들을 제외하고는 질의 컴포넌트 포맷에 제약사항은 없다. 편의상 많은 게이트웨이가 '&'로 나뉜 '이름=값' 쌍 형식의 질의 문자열을 원한다.

### fragment
-  리소스 안에 있는 특정 절을 가리킬 수 있어야 한다.
-  일반적으로 http 서버는 객체 일부가 아닌 전체만 다루기 때문에, 클라이언트는 서버에 프래그먼트를 전달하지 않는다.

## 참고
-  O'Reilly http 완벽 가이드
-  https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
-  https://en.wikipedia.org/wiki/URL
