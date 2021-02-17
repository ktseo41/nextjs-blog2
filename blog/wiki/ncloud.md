---
title : ncloud
created : 2020-09-19 12:02:13 +0900
modified : 2021-02-18 04:20:32 +0900
tag : 
---
## 기본 server-setting

### 서버 신청

-   micro는 결제 정보 입력하면 무료. 1년

### public IP 신청

-   월 4000원
-   서비스로 서버를 제공하려면 공인 IP를 신청해야 한다. 고 한다.

#### public IP 없이 접속

-   public IP 없이 접속하는 방법도 있는데, 포트포워딩해주고 어쩌고 해야하는데 까먹었음 public IP 있이 하는 방법이 일단 편함

### 서버 비밀번호 재설정

-   서버 관리 및 설정 변경에 `관리자 비밀번호 확인`
-   해당 서버 root 계정 비밀번호 확인 가능 초기 비밀번호 설정돼있음, 원하는 패스워드로 변경

```bash
ssh root@공인IP
# 초기 비밀번호 입력

passwd root
# 변경할 비밀번호 2번 입력
```

### acg 설정

-   서비스를 제공하기 위해 포트를 열고, 원하는 IP주소에만 해당 포트를 열려면 그렇게 하면 됨

### 업데이트 등

```bash
apt-get update
apt-get upgrade
```

### docker 설치

-   https://docs.docker.com/install/linux/docker-ce/ubuntu
-   설치 중 참고

    -   ```bash
        $ sudo apt-get install docker-ce=5:18.09.1~3-0~ubuntu-xenial docker-ce-cli=5:18.09.1~3-0~ubuntu-xenial containerd.io
        ```

        문서 중 'Install a specific version using the version string from the second column, for example'에서는 위와같이 입력해주면 된다.

    -   OS requirements 중 `Disco 19.04, Cosmic 18.10, Bionic 18.04 (LTS), Xenial 16.04 (LTS)`들은 ubuntu version 들의 별칭이다.
