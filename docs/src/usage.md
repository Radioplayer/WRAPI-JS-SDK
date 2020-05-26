# How to use the Radioplayer WRAPI JAVASCRIPT SDK .

The following WRAPI endpoints can be used with the SDK:

`/stations`  
`/stations/{rpuids}`  
`/stations/{rpuids}/onair`  
`/stations/{rpuids}/schedule`  
`/ondemand`  
`/ondemand/{odids}`  
`/recommendations`  
`/categories`

The endpoints must be called with the correct request parameters as described in
[Request Param Types](requesttypes.md)). Note that some parameter combinations are required, for instance to 
perform a search for stations by a search term, you must also provide a country code. See the [Radioplayer WRAPI API docs](http://docs.api.radioplayer.org/) for more details.

```javascript
const params = { ... };

const stations = await wp.getStations(params);
const stationsOnAir = await wp.getOnAir(params);
const stationsSchedule = await wp.getSchedule(params);
const stationOndemand = await wp.getStationOndemand(params);
const ondemand = await wp.getOnDemand(params);
const recommendations = await wp.getRecommendations(params);
const categories = await wp.getCategories(params);
```

The expected data return types can be found here: [Return types](returntypes.md)

### Next:

[Wrapi - Class description](./sdk/classes/wrapi.md)
