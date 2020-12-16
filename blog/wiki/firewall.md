## [firewall](firewall)
### 방화벽이란?

- 방화벽

    미리 정의된 보안 **규칙에 기반**해서 들어오고 나가는 네트워크 트래픽을 모니터링하고 제어하는 네트워크 보안 시스템이다.

    일반적으로 신뢰할 수 있는 내부 네트워크, 신뢰할 수 없는 외부 네트워크 간의 장벽을 구성한다.

    서로 다른 네트워크를 지나는 "데이터"를 허용하거나 거부하거나 검열, 수정하는 하드웨어나 소프트웨어 장치이다.

    신뢰 수준이 **낮은** 네트워크로부터 오는 해로운 트래픽이 신뢰 수준이 **높은** 네트워크로 오지 못하게 막는 것

    - 네트워크 트래픽

        특정 시점에 네트워크를 통해 이동하는 데이터의 양

        컴퓨터 네트워크의 네트워크 데이터는 대부분 네트워크 패킷으로 캡슐화 된다.

    - 네트워크 패킷

        패킷 교환 네트워크에서 "이동?"하는 형식화된 데이터 단위입니다.

### 네트워크 패킷

- 패킷 방식의 컴퓨터 네트워크가 전달하는 데이터의 형식화된 블록이다.
- 헤더(머리) + 페이로드 + 트레일러(꼬리) 로 구성
    - 헤더 : 패킷의 송수신 주소(ip:port 형태, [https://linuxstory1.tistory.com/entry/iptables-기본-명령어-및-옵션-명령어](https://linuxstory1.tistory.com/entry/iptables-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%B0%8F-%EC%98%B5%EC%85%98-%EB%AA%85%EB%A0%B9%EC%96%B4)), 순서 등 주요 제어 정보들이 포함됨
    - 트레일러 : 없는 경우도 많음. 에러 검출 등에 사용
- OSI 7 Layer 중 3 계층인 Network Layer에서의 단위. ( Frame은 Data Link 계층에서 전송되는 단위이다. )

    IP 패킷 예제 ) [http://www.ktword.co.kr/abbr_view.php?nav=&m_temp1=5185&id=424](http://www.ktword.co.kr/abbr_view.php?nav=&m_temp1=5185&id=424)

- 통신망을 통해 노드에서 노드로 전해짐으로써 전송된다.
    - 통상적으로 매 경유지마다 축적교환 방식으로 전달된다.
    - ([http://www.ktword.co.kr/abbr_view.php?m_temp1=421](http://www.ktword.co.kr/abbr_view.php?m_temp1=421))

### 방화벽

패킷필터

- 방화벽 종류 중 하나
- 패킷을 검사해서 미리 설정된 정책에 맞지 않을 경우 통과시키지 않도록 하는 형태
- 패킷을 다루므로 TCP/IP의 네트워크 계층에서 동작한다.
- 패킷 모두에 정책을 검사하지 않고, 세션을 관리하는 스테이트풀 방화벽도 있다.

프록시

- 세션에 포함된 유해성을 검사하기 위해 세션을 방화벽에서 종료시킨 뒤에 새로운 세션을 형성하는 방식.
- 출발지에서 목적지로 가는 세션을 명시적으로 혹은 암시적으로 가로채어서 출발지 → 방화벽 / 방화벽 → 목적지 두 세션으로 만든 후 넘겨주기 전에 검사를 수행하는 형태

네트워크 주소 변환 (NAT)

- 예시 ) 출발지 : 172.16.0.0 / 12, 목적지 : any ⇒ 출발지 : aaa.bbb.ccc.d1, 목적지 : any

### iptables

- 리눅스상에서 방화벽을 설정하는 도구
- 패킷필터링 기능을 사용자 공간에서 제어하는 수준으로 사용할 수 있다.
- 명령어 구조

`iptables -A INPUT -s [발신지] —sport [발신지 포트] -d [목적지] —dport [목적지 포트] -j [정책]`

- 예시
    1. `iptables -A INPUT -s 200.200.200.1 -j DROP`

        200.200.200.1 이라는 ip에서 오는 모든 패킷을 drop한다는 규칙

    2. `iptables -A INPUT -p tcp —-dport 20:30 -j DROP`

        프로토콜(-p)이 tcp이고, 목적지 port가 20~30인 패킷이 오는 것을 drop 한다

    3. `iptables -A OUTPUT -p tcp -d [www.facebook.com](http://www.facebook.com) -j DROP`

        `iptables -A OUTPUT -p tcp -d 69.171.224.0/19 -j DROP`

        facebook으로 가는 access를 막는다.

    4. `iptables -A OUTPUT -d 75.126.153.206 -j DROP`

    block all outgoing traffic to 75.126.153.206

    5. `iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000`

    80 포트로 들어오는 모든 요청을 3000으로 redirect

iptables 출처

[https://linuxstory1.tistory.com/entry/iptables-기본-명령어-및-옵션-명령어](https://linuxstory1.tistory.com/entry/iptables-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%B0%8F-%EC%98%B5%EC%85%98-%EB%AA%85%EB%A0%B9%EC%96%B4)

[https://xenostudy.tistory.com/245](https://xenostudy.tistory.com/245)

[https://www.cyberciti.biz/tips/linux-iptables-examples.html](https://www.cyberciti.biz/tips/linux-iptables-examples.html)

### OSI 7 Layer

컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것 ([https://ko.wikipedia.org/wiki/OSI_모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95))

- application layer ( http, ftp, smtp )
- present layer
- session layer
- transport layer ( tcp, udp )
- network layer ( == ip 계층)
    - 네트워크의 주소를 정의하고
    - IP 패킷의 전달 및 라우팅을 담당한다.

        ([http://www.ktword.co.kr/abbr_view.php?m_temp1=2171](http://www.ktword.co.kr/abbr_view.php?m_temp1=2171))

- data link layer
- physical layer

- 각 계층을 통과하면서 header들이 붙어서 전체적인 패킷이 만들어진다. ([https://blockdmask.tistory.com/193](https://blockdmask.tistory.com/193))

### 참고

- [https://m.blog.naver.com/PostView.nhn?blogId=blogpyh&logNo=220731762459&proxyReferer=https:%2F%2Fwww.google.com%2F](https://m.blog.naver.com/PostView.nhn?blogId=blogpyh&logNo=220731762459&proxyReferer=https:%2F%2Fwww.google.com%2F)
- [**http://wiki.hash.kr/index.php/패킷**](http://wiki.hash.kr/index.php/%ED%8C%A8%ED%82%B7)
- [http://www.ktword.co.kr/abbr_view.php?m_temp1=722&m_search=방화벽](http://www.ktword.co.kr/abbr_view.php?m_temp1=722&m_search=%EB%B0%A9%ED%99%94%EB%B2%BD)
- [https://ko.wikipedia.org/wiki/방화벽_(네트워킹)](https://ko.wikipedia.org/wiki/%EB%B0%A9%ED%99%94%EB%B2%BD_(%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9))
- [https://en.wikipedia.org/wiki/Network_packet](https://en.wikipedia.org/wiki/Network_packet)
- [http://www.ktword.co.kr/abbr_view.php?m_temp1=421](http://www.ktword.co.kr/abbr_view.php?m_temp1=421)
- [https://ko.wikipedia.org/wiki/인터넷_프로토콜_스위트](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C_%EC%8A%A4%EC%9C%84%ED%8A%B8)
