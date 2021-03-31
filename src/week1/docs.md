# Week1

## 설정

https://github.com/microsoft/TypeScript-Babel-Starter

## 타입

### 종류

- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null / Undefined
- Never
- Object
- Type Assertions

#### Enum

- 시작 값을 설정할 수 있음

```js
enum Color {
  Red = 1,
  Green,
  Blue,
}
```

- 모든 값을 설정할 수 있음

```js
enum Color {
  Red = 1,
  Green = 10,
  Blue = 100,
}
```

#### Any

- 타입을 알지 못하는 경우 사용
- AnyTypeScript가 되지 않도록 주의할것

#### Void

- 주로 리턴값이 없는 함수에 사용
- undefined 할당 가능

#### Never

- undefined를 포함해서 어떠한 반환값도 없는 경우
- intersction type에서 값이 나올 수 없는 경우
- type guard에 의해 어떤 타입도 얻지 못한 경우(?)
