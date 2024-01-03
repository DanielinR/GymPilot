FROM python:3.10
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV PYTHONUNBUFFERED 1
#ENV DJANGO_SETTINGS_MODULE profitpilot_django.settings.production
ENV POSTGRES_HOST postgres

# Configura la base de datos (si es necesario)
# ENV DATABASE_URL ...

# Expone el puerto en el que corre tu aplicación Django
EXPOSE 8000