---
title : Material-UI
created : 2021-03-03 02:24:15 +0900
modified : 2021-03-03 02:46:45 +0900
tag : 
publish : false
---
## Material-UI
### [Navigation Drawer](https://material.io/components/navigation-drawer)

  사이드바로 사용하고있는 컴포넌트의 정식 명칭은 Navigation Drawer이다.
  
#### 용도

  Navgation Drawer는 목적지나 계정 변경 등의 app 기능에 접근할 수 있도록 해준다. on-screen에 계속 존재하게 하거나, navigation menu icon을 통해 보여줄 수 있다.
  
  Navigation drawer는 아래와 같은 상황에서 권장한다.
  
  -  5개 이상의 top-level 목적지
  -  2개 이상의 navigation 계층
  -  연관성이 없는 목적지끼리 빠른 navgation

  또한, bottom navigation bar와 같은 주요 navigation 컴포넌트와 혼용하지 말 것을 권장한다.
  
#### 종류

-  Standard drawer : Standard drawer는 항상 보이게 하거나 navigation menu icon을 클릭해서 열고 닫을 수 있다. 이 drawer는 타블렛이나 데스크탑에서만 사용할 수 있다. 모바일에서는 modal drawer를 대신 사용해야한다.
-  Modal drawer : Modal navigation drawer는 앱의 나머지 부분과 상호작용을 막기 위해 scrim을 사용한다. 앱에서 가장 높은 elevation을 가져서 screen의 layout grid에 영향을 주지 않는다.
-  Bottom drawer : Bottom navgation drawer는 bottom app bar에서 사용하도록 특화된 modal drawer이다.
