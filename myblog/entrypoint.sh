#!/bin/bash

set -e

until PGPASSWORD=$POSTGRES_PASSWORD psql -h db -U $POSTGRES_USER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

if [[ $DEBUG = "True" ]]
then
    python3 manage.py runserver 0.0.0.0:8000
else
    gunicorn -w $GUNICORN_WORKER_NUM -k $GUNICORN_WORKER_CLASS -b 0.0.0.0:8000 myblog.wsgi
fi
