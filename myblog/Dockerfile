FROM python:3
MAINTAINER chengyu0316@gmail.com
RUN apt-get update && apt-get install -y postgresql-client
ENV PYTHONUNBUFFERED 1
ADD ./myblog/ /code/
WORKDIR /code
RUN pip install -r requirements.txt
USER 1000:1000
EXPOSE 8000
