## installation
## ubuntu 서버에 docker 설치

### 필요 조건

#### OS

아래 버전 중 하나의 64-bit Ubuntu가 필요하다.

-   Disco 19.04
-   Cosmic 18.10
-   Bionic 18.04 (LTS)
-   Xenial 16.04 (LTS)

#### 기존 버전 삭제

-   `docker`, `docker.io`, `docker-engine` 등 이전 버전들이 있으면 삭제해야한다.

```shell
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### 설치

세 가지 방법이 있다고 한다.

1. (추천) Docker's repositories를 설정한 후 설치
2. package로부터 설치
3. automated script로 설치

#### 1번 설치법으로 설치

아래 command들을 따라서 입력하면 된다. command들만 따로 모아놨지만 공식 홈페이지에서 설명을 따라 읽으면서 설치하는 것을 추천

##### set up the repository

```shell
sudo apt-get update
```

```shell
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```shell
sudo apt-key fingerprint 0EBFCD88
```

```shell
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

##### install docker engine - community

```shell
sudo apt-get update
```

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io
# 최신 버전의 docker engine - community 설치 명령
```

-   혹은 특정 버전을 설치 할 수 있다.

```shell
sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```

-   버전 확인 방법

```shell
apt-cache madison docker-ce

  docker-ce | 5:18.09.1~3-0~ubuntu-xenial | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 5:18.09.0~3-0~ubuntu-xenial | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.1~ce~3-0~ubuntu       | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.0~ce~3-0~ubuntu       | https://download.docker.com/linux/ubuntu  xenial/stable amd64 Packages
  ...
```

```shell
sudo docker run hello-world
```

### 참고

-   공식 문서 : https://docs.docker.com/install/linux/docker-ce/ubuntu/
