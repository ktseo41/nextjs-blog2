---
title : unknown 타입과 type guard
created : 2021-03-04 20:54:47 +0900
modified : 2021-03-04 21:07:24 +0900
tag : 
publish : true
---
## unknown 타입과 type guard

- SpreadSheet API를 이용해 반환 받은 응답데이터를 가공해서 정의해둔 interface에 맞는 객체로 반환하는 함수를 짜야했다.
- 그리고 최근 확실히 추론 불가능한 데이터에 Type Assertion을 하는 것이 옳지않다는 것을 알게됐다.
- 그래서 스프레드시트의 첫 열, 나머지 열들 각각에서 가공한 객체. 이 두가지에서 type guard를 시행해줬다.

- `unknown`은 `any`와 비슷하지만 다른 타입이다.
    - `unknown` 타입은 `any` 타입과 비슷하게 모든 타입의 값을 할당할 수 있다.
    - 하지만 `unknown` 타입은 다른 타입에 할당할 수 없고,
    - 프로퍼티 접근, 메소드 호출, 인스턴스 생성 등을 할 수 없다.

        ```javascript
        let value: unknown;

        let value1: unknown = value;   // OK
        let value2: any = value;       // OK
        let value3: boolean = value;   // Error

        let variable: unknown

        variable.foo.bar // Error: Object is of type 'unknown'.(2571)
        variable[0] // Error
        variable.trigger() // Error
        variable() // Error
        new variable() // Error
        ```

    - 프로퍼티 접근, 메소드 호출, 인스턴스 생성 등을 해주려면 type guard를 해줘야한다.

        ```javascript
        function isNumberArray(value: unknown): value is number[] {
          return (
            Array.isArray(value) &&
            value.every(element => typeof element === "number")
          );
        }

        const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

        if (isNumberArray(unknownValue)) {
          const max = Math.max(...unknownValue);
          console.log(max);
        }
        ```

    - 이런 `unknown` 타입의 특성들 때문에 type guard 함수들의 인자 타입으로 사용하기 적절해 보였다. `unknown` 타입으로 받은 인자가 어떤 타입에 해당하는지 명확히해서 반환하는 것은 네이밍적으로도 적절해보인다.
    - 참고
        - [https://jbee.io/typescript/TS-9-unknown/](https://jbee.io/typescript/TS-9-unknown/)
        - [https://mariusschulz.com/blog/the-unknown-type-in-typescript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)

- 실제 type guard 부분

    ```javascript
    function isArrayOfSpreadSheetShopKey(obj: unknown): obj is Array<StreetAddressShopKey> {
      return Array.isArray(obj) && obj.every(isSpreadSheetShopKey);
    }

    function isSpreadSheetShopKey(obj: unknown): obj is StreetAddressShopKey {
      return [...Object.keys(ColumnKeyMap), ''].includes(obj as StreetAddressShopKey);
    }
    ```

- `obj as StreetAddressShopKey`
    - 이 type assertion은 compile을 허용하기 위한 type assertion이고 함수가 반환하는 결과값(`obj is StreetAddressShopKey` (`type predicate`라고 부른다.))에는 영향을 주지 않기 때문에 허용되는 것 같다.
