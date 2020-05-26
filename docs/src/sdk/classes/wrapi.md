# Class: Wrapi

## Hierarchy

-   **Wrapi**

## Index

### Constructors

-   [constructor](wrapi.md#constructor)

### Properties

-   [baseURL](wrapi.md#private-baseurl)
-   [keys](wrapi.md#private-keys)

### Methods

-   [createRequest](wrapi.md#private-createrequest)
-   [getCategories](wrapi.md#getcategories)
-   [getOnAir](wrapi.md#getonair)
-   [getOnDemand](wrapi.md#getondemand)
-   [getRecommendation](wrapi.md#getrecommendation)
-   [getSchedule](wrapi.md#getschedule)
-   [getStationOndemand](wrapi.md#getstationondemand)
-   [getStations](wrapi.md#getstations)

## Constructors

### constructor

\+ **new Wrapi**(`__namedParameters`: object): _[Wrapi](wrapi.md)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name      | Type              | Default                          |
| --------- | ----------------- | -------------------------------- |
| `baseURL` | string &#124; URL | "https://api.radioplayer.org/v2" |
| `key`     | string            | -                                |
| `keyId`   | string            | -                                |

**Returns:** _[Wrapi](wrapi.md)_

## Properties

### `Private` baseURL

• **baseURL**: _string | URL_

---

### `Private` keys

• **keys**: _object_

The keys (a pem file and a corresponding key ID) can be obtained from
Radioplayer by emailing `contact@radioplayer.co.uk`

#### Type declaration:

-   **key**: _string_

-   **keyId**: _string_

## Methods

### `Private` createRequest

▸ **createRequest**(`requestUrl`: string): _object_

**Parameters:**

| Name         | Type   |
| ------------ | ------ |
| `requestUrl` | string |

**Returns:** _object_

-   **keys**(): _object_

    -   **key**: _string_

    -   **keyId**: _string_

-   **url**: _string_ = requestUrl

---

### getCategories

▸ **getCategories**(`params`:
[CategoriesParams](../interfaces/categoriesparams.md)):
_Promise‹[CategoryResponse](../interfaces/categoryresponse.md)›_

Returns a list of category names and hrefs for ondemand or live data.

**Parameters:**

| Name     | Type                                                  |
| -------- | ----------------------------------------------------- |
| `params` | [CategoriesParams](../interfaces/categoriesparams.md) |

**Returns:** _Promise‹[CategoryResponse](../interfaces/categoryresponse.md)›_

---

### getOnAir

▸ **getOnAir**(`params`: [OnAirParams](../interfaces/onairparams.md)):
_Promise‹[OnAirResponse](../interfaces/onairresponse.md)›_

Retrieve on air, now-playing events, such as programs or songs. You can specify
one or multiple stations to request information from, and can optionally
retrieve any events that are playing next.

**Parameters:**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `params` | [OnAirParams](../interfaces/onairparams.md) |

**Returns:** _Promise‹[OnAirResponse](../interfaces/onairresponse.md)›_

---

### getOnDemand

▸ **getOnDemand**(`params`: [OdParams](../interfaces/odparams.md)):
_Promise‹[StationOnDemandResponse](../interfaces/stationondemandresponse.md)›_

Retrieves ondemand items. These can be as a result of a text search, a
search-by-country, or a search-by-category. Also retrieves information about
particular, specified ondemand items, indicated by the odIds parameter.

**Parameters:**

| Name     | Type                                  |
| -------- | ------------------------------------- |
| `params` | [OdParams](../interfaces/odparams.md) |

**Returns:**
_Promise‹[StationOnDemandResponse](../interfaces/stationondemandresponse.md)›_

---

### getRecommendation

▸ **getRecommendation**(`params`:
[RecommendationParams](../interfaces/recommendationparams.md)):
_Promise‹[RecommendationResponse](../interfaces/recommendationresponse.md)›_

Retrieve recommendations of stations and (optionally) ondemand items. A default
request will just return recommended stations; an optional onDemand paramter can
be included in the body to include onDemand items in the response.

**Parameters:**

| Name     | Type                                                          |
| -------- | ------------------------------------------------------------- |
| `params` | [RecommendationParams](../interfaces/recommendationparams.md) |

**Returns:**
_Promise‹[RecommendationResponse](../interfaces/recommendationresponse.md)›_

---

### getSchedule

▸ **getSchedule**(`params`:
[StationScheduleParams](../interfaces/stationscheduleparams.md)):
_Promise‹[ScheduleResponse](../interfaces/scheduleresponse.md)›_

Retrieve station schedules. You can specify one or multiple stations to request
information from, up to a maximum of five rpuids per request. Results will be
organised by station, and each station's results will be paginated.

**Parameters:**

| Name     | Type                                                            |
| -------- | --------------------------------------------------------------- |
| `params` | [StationScheduleParams](../interfaces/stationscheduleparams.md) |

**Returns:** _Promise‹[ScheduleResponse](../interfaces/scheduleresponse.md)›_

---

### getStationOndemand

▸ **getStationOndemand**(`params`:
[StationOndemandParams](../interfaces/stationondemandparams.md)):
_Promise‹[StationOnDemandResponse](../interfaces/stationondemandresponse.md)›_

Returns a paginated subset of on demand items for a given station. Results are
returned in chronological order, the most recent first. You may also provide the
station rpuid for the series you are requesting.

**Parameters:**

| Name     | Type                                                            |
| -------- | --------------------------------------------------------------- |
| `params` | [StationOndemandParams](../interfaces/stationondemandparams.md) |

**Returns:**
_Promise‹[StationOnDemandResponse](../interfaces/stationondemandresponse.md)›_

---

### getStations

▸ **getStations**(`params`: [StationParams](../interfaces/stationparams.md) |
[GetStationsByRpUidsParams](../interfaces/getstationsbyrpuidsparams.md)):
_Promise‹[StationResponse](../interfaces/stationresponse.md)›_

Retrieve information about stations. An entire list of stations can be returned,
or query parameters can be added to filter the results. You may also use the
same endpoint to retrieve station information for one or more stations.

**Parameters:**

| Name     | Type                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `params` | [StationParams](../interfaces/stationparams.md) &#124; [GetStationsByRpUidsParams](../interfaces/getstationsbyrpuidsparams.md) |

**Returns:** _Promise‹[StationResponse](../interfaces/stationresponse.md)›_
