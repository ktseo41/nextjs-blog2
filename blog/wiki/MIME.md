## MIME

-  인터넷은 수천 가지 데이터 타입을 다루기 때문에, HTTP는 웹에서 전송되는 객체 각각에 신중하게 MIME 타입이라는 데이터 포맷 라벨을 붙인다.
-  MIME(Multipurpose Internet Mail Extensions)은 원래 각기 다른 전자메일 시스템 사이에서 메세지가 오갈 때 겪는 문제점을 해결하기 위해 설계되었는데, 워낙 잘 동작했어서 http에서도 채택되었다.
-  웹서버는 모든 http 객체 데이터에 MIME 타입을 붙인다. 웹브라우저는 서버로부터 객체들을 돌려받을 때, 다룰 수 있는 객체인지 MIME 타입을 통해 확인한다.
-  주 타입(primary object type)/부타입(specific subtype)으로 나뉜다.
  -  HTML : text/html
  -  JPEG : image/jpeg
  -  마이크로소프트 파워포인트 프레젠테이션 : application/vnd.ms-powerpoint
