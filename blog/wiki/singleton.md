## 자바스크립트 디자인 패턴 - PACKT

### 싱글톤

-   생성 패턴 중 하나
    -   생성 패턴 : 클래스의 인스턴스를 생성하는 방법
-   가장 많이 쓰이는 패턴 중 하나
-   최근 몇년간 선호도가 떨어진 패턴이기도 함

### 싱글톤이란

-   전역 변수가 필요할 때 사용한다.
-   실수로 복잡한 객체의 사본이 여러 개 생성되는 것을 방지해준다.
-   객체의 인스턴스가 처음 사용될 때까지 객체의 인스턴스 생성을 연기하게 해준다.
-   참고
    -   C#과 자바의 경우 서로 다른 스레드가 동시에 인스턴스에 접근하려고 시도할 때 발생하는 경합 조건을 회피하기 위해 이 함수에 복잡한 로직이 추가로 필요한데, 자바스크립트에서는 이에 대해 걱정할 필요가 없다.

### 어떤 활용 예들이 있을까?

-   리액트의 상태관리와도 비슷해보였다. 생성한 인스턴스를 여기저기 공유하면 될 것 같은데..? 그럼 상위로 갔다가 즉, sibling으로 가는 길은 너무 복잡해진다.
-   이럴 때 그냥 import 해서 useSingleton() 어쩌고 하면..?? 아주 편하다. 그게 바로..
-   redux!

    -   three principles

        -   **single source of truth**
        -   state is read only
        -   changes are made with pure functions

    -   참고
        -   [https://jobs.zalando.com/en/tech/blog/design-patterns-redux?gh_src=4n3gxh1](https://jobs.zalando.com/en/tech/blog/design-patterns-redux?gh_src=4n3gxh1)
        -   [https://redux.js.org/introduction/three-principles/](https://redux.js.org/introduction/three-principles/)

### UML 다이어그램

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8029cb4-8661-43a5-a42b-43fd5b1bff2b/singleton_(1).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8029cb4-8661-43a5-a42b-43fd5b1bff2b/singleton_(1).png>)

### 단점

-   전역 변수 사용을 미화(?)하고 있음
-   인스턴스 생성을 쉽게 재정의할 수 없어 unit test가 어렵다.
-   단일체가 너무 많은 권한을 가지고 있다.
    -   그들 자신 + 인스턴스까지 제어할 수 있음 (SOLID 중 S의 위반)
-   자바스크립트에서는 생성자에 대한 제한 때문에 단일체 패턴을 깔끔하게 구현할 수 없다.

## 자바스크립트 패턴과 테스트 (예시 위주)

### 이전 상황

-   서드파티 api의 사용을 줄이기 위해서 메모이제이션 패턴을 적용 시켰다.

    -   메모이제이션 패턴을 적용하기 위해서 AOP를 적용했다.
    -   restaurantApi.getRestaurantsWithinRadius 를 호출할때 메모이제이션 기능을 애스펙트에 담아서 캡슐화했다.

```javascript
Aop.around(
    'getRestaurantsWithinRadius',
    Aspects.returnValueCache().advice,
    api
);
```

### 문제 상황

-   restaurantApi 인스턴스가 여러개라면?
    -   1번 인스턴스의 캐시 결과를 2번 인스턴스가 공유하지 않는다.

### 해결 방안

-   의존성 주입을 활용한다. returnValueCache가 공유 캐시를 주입받도록 한다.

```javascript
returnValueCache(sharedCache);
```

-   sharedCache를 생성하는 과정에서 싱글톤 패턴으로 하나의 인스턴스만 생성되도록 한다. (하나의 캐시만 공유하게 됨)

**싱글톤 구현 1 - 객체 리터럴**

-   returnValueCache에 의존성 주입하기

```javascript
import Aop from '../aop';

const Aspects = Aspects || {};

Aspects.returnValueCache = function(sharedCache) {
    //
    const cache = sharedCache || {};

    // 원래
    /*
... = function(){

const cache = {};

...
*/
    //
    return {
        advice(targetInfo) {
            const cacheKey = JSON.stringify(targetInfo.args);

            if (cache.hasOwnProperty(cacheKey)) {
                return cache[cacheKey];
            }

            const returnValue = Aop.next(targetInfo);
            cache[cacheKey] = returnValue;
            return returnValue;
        },
    };
};

export default Aspects;
```

-   실제 사용

```javascript
it('주입된 캐시를 인스턴스 간에 공유할 수 있다.', function() {
    // sharedCache를 객체 리터럴로 생성하면서 싱글톤 패턴 사용
    const sharedCache = {};
    //
    const object1 = createATestObject();
    const object2 = createATestObject();

    Aop.around(
        'testFunction',
        new Aspects.returnValueCache(sharedCache).advice,
        object1
    );

    Aop.around(
        'testFunction',
        new Aspects.returnValueCache(sharedCache).advice,
        object2
    );

    object1.testFunction(args);

    expect(object2.testFunction(args)).toBe(testValue);

    expect(object2.spyReference.calls.count()).toBe(0);
});
```

**싱글톤 구현 1 - 모듈로 구현**

-   캐시의 추가적인 기능이 필요할 수도 있다.
    -   최저 사용 빈도
    -   일정 시간만 캐시를 저장

simpleCache

```javascript
Conference.simpleCache = function() {
    const privateCache = {};

    return {
        hashKey: function(key) {},
        setValue: function(key, value) {},
        getValue: function(key) {},
    };
};

// 위와같이 인터페이스를 만들었다.
// 인터페이스를 공유하면서 LRU, 캐시 타임아웃 등 기능을 추가할 수 있게 됐다.
/*
       simpleCache 자체는 싱글톤으로 구현한게 아니며 뒤에 나올 simpleCache를 활용하는 코드에서
       싱글톤 패턴을 활용하게 된다.
    */

Conference.caches.getRestaurantsWithinRadius;

Conference.caches.RestaurantsWithinRadiusCache = (function() {
    let instance = null;

    return {
        getInstance: function() {
            if (!instance) {
                instance = Conference.simpleCache();
            }
            return instance;
        },
    };
})();

// simpleCache instance 생성을 한번만 한다.
```

## 다른 사이트들 참고

### [https://dev.to/tomekbuszewski/singleton-in-javascript-1d5i](https://dev.to/tomekbuszewski/singleton-in-javascript-1d5i)

-   원하는대로의 extend가 안된다.
-   class는 사용하고 싶으나 자유롭게 사용하게 하고 싶지 않을 때
    -   logger
    -   cache storage

### [https://dev.to/carlillo/understanding-design-patterns-singleton-using-hero-examples-batman-and-spiderman-are-inside-2pm5](https://dev.to/carlillo/understanding-design-patterns-singleton-using-hero-examples-batman-and-spiderman-are-inside-2pm5)

### [https://en.wikipedia.org/wiki/Singleton_pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

-   class가 오직 하나의 인스턴스만 생성할 수 있게 제한하는 디자인 패턴
-   시스템 전체에서 작업을 조정하는데 하나의 객체만 필요한 경우 유용하다.

-   singleton패턴으로 다음과 같은 문제들을 해결할 수 있게 된다.

    -   class가 정말 하나의 instance만 가지는 것이 확실한가?
    -   그 하나의 instance에 쉽게 접근할 수 있나?
    -   class가 그 하나의 instance를 어떻게 컨트롤하나?
    -   어떻게 instance의 숫자를 제한할 수 있나?

-   아래와 같은 방법으로 문제를 해결한다.
    -   class의 constructor를 감춘다.
    -   getInstance()라는 static operation을 정의한다. 이 operation은 class의 유일한 인스턴스를 반환한다.

### [https://www.youtube.com/watch?v=bgU7FeiWKzc](https://www.youtube.com/watch?v=bgU7FeiWKzc)

-   use a singleton as the source of config settings for web app or on client side API etc.
-   shared namespace를 제공해서 함수에 접근할 수 있는 유일한 point 를 제공한다.
    -   jQuery가 singleton. ( \$로 접근 )

