 FROM python:3
 RUN apt-get update && apt-get install -y postgresql-client
 ENV PYTHONUNBUFFERED 1
 RUN mkdir /code
 WORKDIR /code
 ADD requirements.txt /code/
 RUN pip install -r requirements.txt
 USER 1000:1000
 EXPOSE 8000
 ADD . /code/
