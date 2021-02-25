---
title : rust
created : 2021-02-17 17:21:50 +0900
modified : 2021-02-25 22:20:31 +0900
tag : 
publish : true
---
## Rust
[https://learning-rust.github.io/](https://learning-rust.github.io/)

### Installation

Rustup을 통해 설치하는 것이 공식적인 방법

### Hello, World!

```
fn main() {
    println!("Hello, world!");
}
```

`fn` means function. The `main` function is the beginning of every Rust program.

println!() prints text to the console and its ! indicates that it’s a **macro** rather than a function.

compile

- Save the above code in `file.rs` , but it can be any name with `.rs` extension.
- Compile it with `rustc file.rs`
- Execute it with `./file` on Linux and Mac or `file.exe` on Windows

### The difference Between macros and functions

- macro가 더 기능이 확장돼있다.
- 예를들어 `try!` macro는 함수에서 조건부로 반환된다. 함수는 불가능하다.

참고

- [https://users.rust-lang.org/t/conventions-macro-vs-function/1914](https://users.rust-lang.org/t/conventions-macro-vs-function/1914)
- [https://users.rust-lang.org/t/newbie-why-macros-vs-functions/1012/4](https://users.rust-lang.org/t/newbie-why-macros-vs-functions/1012/4)

### Cargo

Cargo 는 Rust의 패키지 매니저이며 빌드시스템이다

- Create a new project: `cargo new`
- Create a new project in an existing directory: `cargo init`
- Build the project: `cargo build`
- Run the project: `cargo run`
- Update project dependencies: `cargo update`
- Run tests: `cargo test`
- Run benchmarks: `cargo bench`
- Generate the project documentation via [rustdoc](https://doc.rust-lang.org/stable/rustdoc/): `cargo doc`
- Analyze the project to see it has any errors, without building it: `cargo check`

[https://learning-rust.github.io/docs/a4.cargo,crates_and_basic_project_structure.html](https://learning-rust.github.io/docs/a4.cargo,crates_and_basic_project_structure.html)

여기까지 보다 말음
