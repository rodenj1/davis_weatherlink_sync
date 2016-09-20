#!/usr/bin/node

var Client = require('node-rest-client').Client;

client = new Client();

client.get("http://api.weatherlink.com/v1/NoaaExt.xml?user=&pass=", function(data, response){
                        var params = {
                          parameters: {
                            ID: '',
                            PASSWORD: '',
                            dateutc: 'now',
                            action: 'updateraw',
                            windspeedmph: data.current_observation.wind_mph[0],
                            winddir: data.current_observation.wind_degrees[0],
                            windgustmph: data.current_observation.davis_current_observation[0].wind_ten_min_gust_mph[0],
                            windgustmph_10m: data.current_observation.davis_current_observation[0].wind_ten_min_gust_mph[0],
                            humidity: data.current_observation.relative_humidity[0],
                            dewptf: data.current_observation.dewpoint_f[0],
                            tempf: data.current_observation.temp_f[0],
                            rainin: data.current_observation.davis_current_observation[0].rain_rate_in_per_hr[0],
                            dailyrainin: data.current_observation.davis_current_observation[0].rain_day_in[0],
                            baromin: data.current_observation.pressure_in[0],
                            soiltempf: data.current_observation.davis_current_observation[0].temp_soil_1[0],
                            solarradiation: data.current_observation.davis_current_observation[0].solar_radiation[0],
                            UV: data.current_observation.davis_current_observation[0].uv_index[0]
                          }
                        };
                        client.get("http://weatherstation.wunderground.com/weatherstation/updateweatherstation.php", params, function (data, response){ 
                  });
		});
