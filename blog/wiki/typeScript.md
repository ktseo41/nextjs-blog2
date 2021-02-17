---
title : typeScript
created : 2020-09-19 12:02:13 +0900
modified : 2021-02-17 17:16:21 +0900
tag : 
---
### 타입스크립트 개론

-   변수나 함수 등에 명시적으로 타입을 추가할 수 있음
-   모듈화 기능 / 객체지향 프로그래밍 지원 / 도구 지원
-   정적 타입 언어
    -   동적 타입 언어 : 자바스크립트
-   대규모 애플리케이션 개발을 위한 특징을 가짐

    -   모듈 시스템 : ES6 모듈과 네임스페이스 지원
    -   클래스와 인터페이스 지원
    -   타입 시스템 지원

-   점진적 타입 검사
    -   컴파일 시간에 타입 검사를 수행하면서 필요에 따라 타입 선언의 생략을 허용한다.
    -   타입 선언을 생략하면 암시적 형변환이 일어난다.
    -   참고
        -   정적 타입 검사 : C++, Java
        -   동적 타입 검사 : JavaScript

#### 클래스와 인터페이스 지원

-   기존 언어와 다른 점
    -   ES6에 없는 인터페이스 선언과 인터페이스 구현을 지원한다.
    -   자바는 다중 생성자를 선언할 수 있지만, 타입스크립트는 단일 생성자만 선언할 수 있다.
    -   자바와 달리 디폴트 초기화 매개변수와 선택 매개변수를 선언할 수 있다.

#### 타입 시스템 지원

-   타입 어노테이션
    -   타입 검사를 통해 타입 안정성이 확보되면 타입 어노테이션을 제거하고 자바스크립트 코드를 생성한다.

#### 타입스크립트 컴파일러 (tsc)

-   transpiler라고도 부르는데 최신 ECMA 스크립트의 특징을 사용하면서 동작 시점에는 ES5로 변해주기 때문
    -   엄밀히는 트랜스파일러이지만 컴파일러라는 용어를 더 일반적으로 사용하므로 컴파일러 사용
-   컴파일링 : 한 언어의 소스코드를 다른 언어로 바꾸는 것
-   트랜스파일링 : 한 언어의 소스코드를 비슷한 추상화 수준의 다른 언어로 바꾸는 것

### 기본 사용법들

```bash
tsc hello.ts
# -> hello.js로 번환
node hello.js
```

-   별도의 명시가 없으면 ES3 코드로 변환한다.

#### 프로젝트 (-p)

-   위 처럼 파일을 지정하는 것이 아니라 디렉토리를 지정해서 프로젝트 단위로 컴파일 할 때는 tsconfig.json이 필요하다.

```bash
tsc -p ./
```

#### ECMA 버전 지정 (-t)

```bash
tsc hello.ts -t ES5
```

-   `-t ESNext`는 최신 버전 적용 (정확히는 [ES proposed features](https://github.com/tc39/proposals))

#### watch 옵션

```bash
tsc hello.ts - watch
```

### tsconfig.json

```bash
tsc
```

-   위처럼만 입력하면 tsconfig.json 파일의 설정을 읽어들여 컴파일한다.
-   만약 현재 디렉토리에 tsconfig.json이 없다면 상위로 이동하면서 찾는다.
-   tsconfig.json이 위치한 경로가 프로젝트의 루트 경로가 된다.

#### tsconfig

-   생성

```bash
tsc --init
```

-   noImplicitAny : 자료형을 설정하지 않으면 자동으로 any로 설정하지 못하도록 하는것, true로 해두자

-   sourceMap : true이면 타입스크립트 파일과 자바스크립트 파일 간의 연결 정보를 담는 map 파일을 생성한다. (디버깅할때 타입스크립트를 이용해 디버깅을 하는 등이 가능)

-   files : 컴파일링하기를 원하는 파일들

-   outFile : 컴파일한 파일 내보내는 경로, 하나의 파일로 내보내기 가능

-   outDir : 내보내려는 디렉토리

-   exclude : 제외할 디렉토리

#### 상속

-   extends를 이용해서 상속한 설정 파일 생성 가능

```json
{
    "extends": "./config/base.json",
    "compilerOptions": {
        "outFile": "./dist/extends/out.js",
        "target": "es5"
    }
}
```

#### ts-node

```bash
ts-node hello.ts
```

-   파일을 생성하지 않고 실행 결과를 빠르게 볼 수 있음

### 태스크러너

-   cmd shift B 로 빌드를 수행하기 위해 태스클 러너를 설정해야한다.
-   cmd shift P 로 `Configuring Task` -> tasks.json 파일 생성
-   `tsc --init` 으로 tsconfig.json 생성
    -   -> 타입스크립트 프로젝트로 인식해 tasks.json 작업을 자동으로 추가할 수 있게 작업 목록을 제공한다.
    -   `Configuring Task` 입력하면 추가적인 작업들이 표시된다. 이 중 `tsc 감시`, `tsc 빌드` 사용..
    -   둘 다 추가한 후 cmd shift B 하면 둘 중 어느 작업을 할 지 선택하라고 나온다.
    -   혹은 default 작업을 선택할 수도 있음. 그럼 CMD+SHIFT+B를 하면 기본 작업이 수행된다.

### 확장프로그램

-   마이크로소프트 확장프로그램

### TSLint

-   tslint.json을 기준으로 검사한다.

### ts-node + TSLint

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "ts-node와 tslint를 동시에 실행해 특정 TS 파일의 결과 보기",
            "type": "shell",
            "command": "ts-node ${file} '&' tslint ${file}",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                "reveal": "always",
                "panel": "new"
            }
        }
    ]
}
```

## 변수 선언과 기본 타입

### 타입스크립트 타입 계층도

![](https://i.imgur.com/y35Xh0c.png)

### 기본 타입 (primitive)

-   number
-   string
-   boolean
-   symbol
-   enum
    -   number에서 확장한 타입
    -   첫 번째 Enum 요소에는 숫자 0이 할당된다. 그 다음 특별히 초기화하지 않는 이상 1씩 증가
    ```typescript
    enum WeekDay {
        Mon,
        Tue,
        Wed,
        Thu,
    }
    let day: WeekDay = WeekdDay.Mon;
    ```
-   문자열 리터럴
    -   문자열 리터럴 타입은 string의 확장 타입
    -   사용자 정의 타입에 정의한 문자열만 할당받을 수 있음
    -   예시
    ```typescript
    type EnterType = 'keyup' | 'mouseover';
    ```

### 객체 타입

-   Array
    ```typescript
    let items: number[] = [1, 2, 3];
    ```
    -   여러 요소도 가능
    ```typescript
    let x: [string, number];
    x = ['tuple', 100];
    ```
-   Tuple
-   Function
-   constructor
-   Class
-   Interface

### 기타 타입

-   유니언 : 2개 이상의 타입을 하나의 타입으로 정의한 타입
    ```typescript
    var x: string | number;
    ```
-   인터섹션 : 두 타입을 합쳐 하나로 만들 수 있는 타입
    ```typescript
    interface Cat {
        leg: number;
    }
    interface Bird {
        wing: number;
    }
    let birdCat: Cat & Bird = { leg: 4, wing: 2 };
    ```
-   특수 타입

### 변수에 타입 지정

```text
var <변수 식별자>:<타입> = <값>;
```

### 타입스크립트 내장 타입

-   any

    -   어떤 타입의 값도 받아들일 수 있음
    -   any로 선언해두면 없는 메소드를 사용해도 컴파일시에는 오류가 안난다.

-   object

    -   any타입과 유사하지만 동작 방식이 다름
    -   **any 타입으로 선언한 변수는 속성의 유무를 런타임 시에 검사하지만, object 타입으로 선언한 변수는 컴파일 시간에 속성의 유무를 검사한다**

-   array

    ```ts
    let fruits: string[] = ['b', 'a', 'n'];
    ```

    -   타입이 지정돼있지 않다면 any 타입으로 지정하지만

    ```ts
    let fruits: any[] = ['any', 1, true];
    ```

    -   명확하지 않으므로 유니온으로 선언합니다.

    ```ts
    let myVar: (number | string | boolean)[] = [1, 'union', false];
    ```

-   제네릭 배열

    ```ts
    let num: Array<number> = [1, 2, 3];
    ```

    -   숫자나 문자열로 제약하려면 역시 유니온으로 선언

    ```ts
    let num: Array<number | string> = [1, 'hello'];
    ```

    -   타입을 참조할 수도 있습니다.

    ```ts
    let num: Array<number | string> = [1, 'hello'];
    let num2: typeof num = [1, 'hi'];
    ```

    -   제네릭 배열은 내장 타입 외에 객체 타입도 받을 수 있습니다. : 배열 요소로 익명 함수를 받으려면.

    ```ts
    let nums: Array<() => string> = [() => 'one', () => 'two'];
    console.log(nums[0]());
    ```

    -   선언 부분과 추가 부분을 분리하려면

    ```ts
    let num2: Array<number> = new Array<number>();
    num2.push(1);
    num2.push(2);
    ```

### 추가 내용들 (작성중..)

#### 내장 타입

-   튜플 타입
-   void, null, undefined

#### 제어문

-   if 문 사용 시 타입 제약
-   switch 문과 폴스루
-   for 문과 이터러블 객체
-   맵과 셋을 for of 문에 적용
-   [Symbol.iterator]() 메서드를 이용한 이터러블 객체 사용
-   while 문과 do-while 문

#### 연산자

-   산술 연산자
    -   `10/"2"` 등 허용하지 않음
-   비교 논리 조건 연산자
    -   `==` 연산자도 타입이 다르면 연산이 불가능함

#### 함수

-   타입 안정성을 갖춘 타입스크립트 함수

```ts
function max(x: number, y: number): number {}
```

-   선택 매개변수

```ts
function sum(a: number, b: number, c?: number): number {}
```

-   선택 매개변수는 초깃값 설정과 함께 사용할 수 없다.

```ts
function sum(a: number, b: number, c?: number = 3): number {}
```

#### 클래스

-   접근 제한자

| 접근 제한자 | 특징                                                                 | 상속 여부 | 외부 객체를 통한 접근 |
| ----------- | -------------------------------------------------------------------- | --------- | --------------------- |
| public      | public으로 설정한 멤버들은 자식 클래스에서 접근할 수 있음            | ⃝         | ⃝                     |
| protected   | 자식 클래스에서 접근 가능                                            | ⃝         | X                     |
| private     | 현재 클래스에서만 접근할 수 있고, 자식 클래스에서 접근 가능하지 않음 | X         | X                     |

-   생성자 매개변수에 접근제한자 추가

-   생성자 매개변수에 접근 제한자를 추가하면 멤버 변수가 되는 효과가 있다.

```ts
class Cube {
    constructor(
        public width: number,
        private length: number,
        protected height: number
    ) {}
}
```

> 위 코드에서 width, length, height는 this.width, this.length, this.height가 된다.

#### 추상 클래스

-   추상 클래스에서는 추상 메서드와 구현 메서드가 동시에 존재할 수 있음
-   추상 클래스는 단독으로 객체를 생성할 수 없고 추상 클래스를 상속하고 구현 내용을 추가하는 자식 클래스를 통해 객체를 생성해야 한다.
-   static이나 private와 함께 선언할 수 없음

#### 인터페이스

-   인터페이스는 타입이며 컴파일 후에는 사라진다.
-   추상클래스는 선언, 구현 vs 인터페이스는 선언
-   자식 인터페이스는 extends 키워드를 이용해 부모 인터페이스를 상속해 확장할 수 있다.

-   인터페이스에 함수 타입을 정의하기

```ts
interface sumFunc {
    (a: number, b: number): number;
}

let sum: sumFunc = (num1: number, num2: number){

}
```
