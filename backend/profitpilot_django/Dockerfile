FROM python:3.10-alpine
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN apk add --no-cache postgresql-dev gcc python3-dev musl-dev
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn
COPY . .
ENV PYTHONUNBUFFERED 1
#ENV DJANGO_SETTINGS_MODULE profitpilot_django.settings.production
ENV POSTGRES_HOST postgres

# Configura la base de datos (si es necesario)
# ENV DATABASE_URL ...

# Expone el puerto en el que corre tu aplicación Django
EXPOSE 8001