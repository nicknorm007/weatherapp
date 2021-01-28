# weatherapp

Node express app to provide colorful, easy to read weather and alerts. 

Uses API found at [National Weather Service API](https://www.weather.gov/documentation/). 

Uses Geocoding found at [OpenCage](https://opencagedata.com/). 

Requires Node 14+. 

Requires License to convert places to coordinates (free option available for testing) at OpenCage references above. 


To run locally:  


1. Clone. 
2. npm install. 
3. create .env file with geocode license you obtained above:  
`OCD_API_KEY=<Your Key here>`. 
4. geocodes.js -> s/weather.nicksoddsandends.com/localhost:3000
5. npm run watch

-Also includes Dockerfile

Created by: Nick Norman




