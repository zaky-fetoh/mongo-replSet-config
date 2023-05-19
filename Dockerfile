FROM ubuntu:focal

RUN apt update

RUN apt-get install wget curl gnupg2 software-properties-common apt-transport-https ca-certificates lsb-release -y

RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add -

RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $( lsb_release -cs)/mongodb-org/5.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list

RUN apt update 

RUN apt install mongodb-org

RUN apt systemctl start mongod.service

RUN systemctl status mongod


curl -fsSL https://www.mongodb.org/static/pgp/server-5.0.asc | gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb.gpg
