## ATTENTION - Node.js and MongoDb MUST BE PREINSTALLED!!! (No Docker)
```
https://nodejs.org/en/download/
https://www.mongodb.com/
```

### Switch to App Root dir (src):
```
cd src
```
### Config file src/config.js
```
DATABASE_URL - MongoDb connection link
ROOT_URL - link for http adress, uses only for fitting index.pug (Navigation page)
```

### Install requirements(optional), run from src:
```
npm -i
```
### Run app (from root dir) on <b>localhost:3000</b>. Note: MongoDb must be run before app.js :
```
npm start app.js
```

### Routers:
```
"/" - "Navigation and Documentation page"
"/locations" - Provides with all locations in Database
"/temperatures" - Provides with all temperatures in Database
"/temperatures/debug" - Provides with temperarures by filter
```
### Json output formats:
#### Locations:
```
{
      "gps": [
         59.9347212,
         30.3506727
      ],
      "_id": "5e6bcf3955d0ee36c0cb8684",
      "address": "Ligovsky prospekt, 26",
      "name": "Du Nord 1834",
      "description": "French cuisine restaurant",
      "image": "//////"
}
```
#### Temperatures:
```
{
      "_id": "5e6ceb171abd894fdd2742c5",
      "temperature": 87.5,
      "date": "2020-03-14T14:32:55.131Z",
      "date_week": 6
}
```
 
