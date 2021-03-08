---
title : vue
created : 2021-03-06 20:25:20 +0900
modified : 2021-03-06 20:30:03 +0900
tag : 
publish : false
---
## vue
### The Vue Instance
#### Creating a Vue Instance
-  모든 vue application은 `Vue` function으로 새로운 vue instance를 만들면서 시작한다.
-  MVVM pattern을 정확히 따르고 있지는 않지만 일부 영향을 받았다. 그래서 Vue instance의 네이밍 컨벤션으로 vm 을 보통 사용한다.
-  Vue instance를 생성할 때 option 객체를 넘긴다.
-  Vue application은 `new Vue`로 생성한 root Vue instance를 가지고 있고, 추가적으로 nested, reusable 컴포넌트의 트리로 구성된다.

```
Root Instance
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```
