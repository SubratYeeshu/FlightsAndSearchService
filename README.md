# Welcome to Flights Service
## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project 
- Create `.env` file in the root diretory and add the following environment variable 
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize `db:create` and then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight Table
- Airport Table
- City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

## Tables 

- City -> id, name, created_at, updated_at
- `npx sequelize model:generate --name City --attributes name:String,cityId:integer`

- Airport -> id, name, address, city_id, created_at, updated_at, Relationship -> City has many airport and airport belongs to a city (1 to Many), city will not have info about Airports (1) instead (many airports) will have information about city
- `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`

- Airplane -> ModelNumber, Capacity
- `npx sequelize model:generate --name Airplane -- attributes modelNumber:integer,capacity:integer`

- Flights -> FlightNumber, AirplaneId, DepartureAirportId, ArrivalAirportId, ArrivalTime, DepartureTime, Price, BoardingGate, TotalSeats
- `npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer`

