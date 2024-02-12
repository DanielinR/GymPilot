# GymPilot
App for managing your trainings. [Test it now!](https://gympilot.danielin.xyz)

![mobileScreenshot](https://github.com/DanielinR/GymPilot/assets/60990208/61f46aca-eace-4108-81d4-a79487beb66c)


## Front-end developed on Next.js
This server call the back API hosted on "API_URL" environment variable.

run the server with:
```
npm install
npm run dev
```

## Back-end developed on Django rest framework
A PostgreSQL database hosted on the port that the .env file indicates is needed.

run the server with:
```
pip install -r requirements.txt
python manage.py runserver
```

## Mobile app developed in Apache cordova
This app is a web browser that opens my web app url.
