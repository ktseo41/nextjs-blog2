## MySQL-docker

1. docker에서 mysql이 실행되도록 하기

-   mysql은 필요한 파일들은 거의 없었기 때문에 - root 비밀번호 설정 - 유저 추가 및 비밀번호 설정 - 초기 데이터 삽입 - 유저에게 데이터베이스 권한 주기

위 네가지만 필요 했다.

-   환경변수를 넘겨주는 것으로 쉽게 해결할 수 있다.

```yaml
environment:
    MYSQL_ROOT_PASSWORD: p@ssword
    MYSQL_USER: dbblo
    MYSQL_PASSWORD: db1004
    MYSQL_DATABASE: sanctuary
```

    - user, password를 설정해준뒤 database를 만들어주면 만들어준 유저는 해당 데이터베이스에 권한을 부여받는다.

2. 초기 데이터 삽입

-   .sql파일을 작성한 뒤 mysql.Dockerfile에 해당 파일을 `/docker-entrypoint-initdb.d/`에 이동시키도록 한다.
-   그럼 자동으로 초기에 데이터를 넣어준다.
-   참고 링크
    -   https://hub.docker.com/_/mysql
    -   [Customize your MySQL Database in Docker - Better Programming - Medium](https://medium.com/better-programming/customize-your-mysql-database-in-docker-723ffd59d8fb)

3. 한글화

-   cnf파일을 작성한 뒤 `/etc/mysql/conf.d/`디렉토리로 이동

```
[client]
default-character-set = utf8

[mysqld]
init_connect = SET collation_connection = utf8_general_ci
init_connect = SET NAMES utf8
character-set-server = utf8
collation-server = utf8_general_ci
# 아래 한줄을 넣지 않으니 한글이 깨지는 문제가 발생했다.
skip-character-set-client-handshake

[mysqldump]
default-character-set = utf8

[mysql]
default-character-set = utf8
```

-   위 cnf파일은 lucas의 MySQL 설치 항목에서 거의 그대로 가져왔다.
-   `skip-character-set-client-handshake` 한줄만 빼고
-   MySQL의 폰트 설정 확인법 - `show variables like ‘character%` - `mysql> status`

4. 암호 암호화

-   docker-compose의 secret 기능을 사용해줌
-   원하는 파일을 암호화해서 읽어오고 파일의 내용을 암호로 사용할 수 있다.
-   원래는 docker swarm 에서만 쓸 수 있던 기능인데 어느 시점 후부터 docker-compose에도 도입했다고 한다.
-   docker-compose에 “3”version이라고 명시하면 안되고 “3.5”로하니 된다.
-   문서를 뒤져봤지만 영어라서 어느 버전부터 사용할 수 있는지 명확히 표기된 부분을 찾지는 못했음

-   참고
    -   docker secret 확인 : [Build Enhancements for Docker | Docker Documentation](https://docs.docker.com/develop/develop-images/build_enhancements/)
    -   https://hub.docker.com/_/mysql
    -   https://mysqlrelease.com/2017/08/docker-secrets-and-mysql-password-management/
    -   [docker secret | Docker Documentation](https://docs.docker.com/engine/reference/commandline/secret/)
    -   [Manage sensitive data with Docker secrets | Docker Documentation](https://docs.docker.com/engine/swarm/secrets/)

5. (미구현) volume사용해서 지속적인 데이터 유지

-   volume을 이용하면 ncloud 로컬에 MySQL의 데이터를 유지하도록 할 수 있다.
-   현재는 일부러 해당 기능을 이용해주지 않고 있음
-   배포 전략 등 변경이 있기 때문에 지속적으로 초기화 해주고 있다.
-   인터넷에서 본 코드를 그대로 따라서 넣으면 될 것 같지만, 정확한 사용법을 알고, directory 위치 등도 좀 더 명확히 지정해주고 싶다.

#### TroubleShooting

1. Password 미설정시 mysql 자체가 실행되지 않음

-   랜덤패스워드, 패스워드 공백 허용 등의 옵션이라도 해주지 않으면 실행되지 않는다.

2. docker 쉘에 접속
   `docker exec -it docker_db /bin/bash`

-   `-it` 옵션이 중요하다.

3. volume사용 후 데이터가 유지돼서 비밀번호를 변경해도 유저비밀번호가 변경되지 않는 등의 문제

-   `docker-compose up -V`
-   -V 옵션을 해주면 볼륨을 초기화 한다.

