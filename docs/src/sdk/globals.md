# radioplayer-wrapi-sdk

## Index

### Classes

-   [Wrapi](classes/wrapi.md)

### Interfaces

-   [ArtistPlay](interfaces/artistplay.md)
-   [BaseMeta](interfaces/basemeta.md)
-   [BaseResponse](interfaces/baseresponse.md)
-   [Bearer](interfaces/bearer.md)
-   [CategoriesParams](interfaces/categoriesparams.md)
-   [CategoryData](interfaces/categorydata.md)
-   [CategoryResponse](interfaces/categoryresponse.md)
-   [Collection](interfaces/collection.md)
-   [GetStationsByRpUidsParams](interfaces/getstationsbyrpuidsparams.md)
-   [KeyAndId](interfaces/keyandid.md)
-   [MakeSignedRequestParams](interfaces/makesignedrequestparams.md)
-   [MultiMedia](interfaces/multimedia.md)
-   [NestedData](interfaces/nesteddata.md)
-   [ODData](interfaces/oddata.md)
-   [OdParams](interfaces/odparams.md)
-   [OnAirMeta](interfaces/onairmeta.md)
-   [OnAirParams](interfaces/onairparams.md)
-   [OnAirResponse](interfaces/onairresponse.md)
-   [PaginatedMeta](interfaces/paginatedmeta.md)
-   [Phonetics](interfaces/phonetics.md)
-   [RecommendationData](interfaces/recommendationdata.md)
-   [RecommendationParams](interfaces/recommendationparams.md)
-   [RecommendationResponse](interfaces/recommendationresponse.md)
-   [RecommendedOD](interfaces/recommendedod.md)
-   [RecommendedStation](interfaces/recommendedstation.md)
-   [ScheduleMeta](interfaces/schedulemeta.md)
-   [ScheduleResponse](interfaces/scheduleresponse.md)
-   [StationEntry](interfaces/stationentry.md)
-   [StationOnDemandResponse](interfaces/stationondemandresponse.md)
-   [StationOndemandParams](interfaces/stationondemandparams.md)
-   [StationParams](interfaces/stationparams.md)
-   [StationResponse](interfaces/stationresponse.md)
-   [StationScheduleParams](interfaces/stationscheduleparams.md)
-   [Stream](interfaces/stream.md)
-   [WrapiConstructor](interfaces/wrapiconstructor.md)

### Type aliases

-   [Factors](globals.md#factors)
-   [StationIncludes](globals.md#stationincludes)

### Variables

-   [categoriesEndpoint](globals.md#const-categoriesendpoint)
-   [onDemandEndPoint](globals.md#const-ondemandendpoint)
-   [recommendationEndpoint](globals.md#const-recommendationendpoint)
-   [stationsEndpoint](globals.md#const-stationsendpoint)

### Functions

-   [getCategoriesUrl](globals.md#const-getcategoriesurl)
-   [getOnDemandUrl](globals.md#const-getondemandurl)
-   [getRecommendationUrl](globals.md#const-getrecommendationurl)
-   [getStationOnDemandUrl](globals.md#const-getstationondemandurl)
-   [getStationsByRpUidsRequestUrl](globals.md#const-getstationsbyrpuidsrequesturl)
-   [getStationsOnAirUrl](globals.md#const-getstationsonairurl)
-   [getStationsRequestUrl](globals.md#const-getstationsrequesturl)
-   [getStationsScheduleUrl](globals.md#const-getstationsscheduleurl)
-   [makeSignedRequest](globals.md#const-makesignedrequest)

## Type aliases

### Factors

Ƭ **Factors**: _"GEO" | "TRENDING" | "AFFINITY" | "MUSICMATCH"_

---

### StationIncludes

Ƭ **StationIncludes**: _"ids" | "detail" | "bearers" | "social" | "phonetics" |
"streams" | "images"_

An array of possible values for includes

## Variables

### `Const` categoriesEndpoint

• **categoriesEndpoint**: _"/categories"_ = "/categories"

---

### `Const` onDemandEndPoint

• **onDemandEndPoint**: _"/ondemand"_ = "/ondemand"

---

### `Const` recommendationEndpoint

• **recommendationEndpoint**: _"/recommendations"_ = "/recommendations"

---

### `Const` stationsEndpoint

• **stationsEndpoint**: _"/stations"_ = "/stations"

## Functions

### `Const` getCategoriesUrl

▸ **getCategoriesUrl**(`params`:
[CategoriesParams](interfaces/categoriesparams.md), `baseUrl`: string | URL):
_string_

**Parameters:**

| Name      | Type                                               |
| --------- | -------------------------------------------------- |
| `params`  | [CategoriesParams](interfaces/categoriesparams.md) |
| `baseUrl` | string &#124; URL                                  |

**Returns:** _string_

---

### `Const` getOnDemandUrl

▸ **getOnDemandUrl**(`params`: [OdParams](interfaces/odparams.md), `baseUrl`:
string | URL): _string_

**Parameters:**

| Name      | Type                               |
| --------- | ---------------------------------- |
| `params`  | [OdParams](interfaces/odparams.md) |
| `baseUrl` | string &#124; URL                  |

**Returns:** _string_

---

### `Const` getRecommendationUrl

▸ **getRecommendationUrl**(`params`:
[RecommendationParams](interfaces/recommendationparams.md), `baseUrl`: string |
URL): _string_

**Parameters:**

| Name      | Type                                                       |
| --------- | ---------------------------------------------------------- |
| `params`  | [RecommendationParams](interfaces/recommendationparams.md) |
| `baseUrl` | string &#124; URL                                          |

**Returns:** _string_

---

### `Const` getStationOnDemandUrl

▸ **getStationOnDemandUrl**(`params`:
[StationOndemandParams](interfaces/stationondemandparams.md), `baseUrl`: string
| URL): _string_

**Parameters:**

| Name      | Type                                                         |
| --------- | ------------------------------------------------------------ |
| `params`  | [StationOndemandParams](interfaces/stationondemandparams.md) |
| `baseUrl` | string &#124; URL                                            |

**Returns:** _string_

---

### `Const` getStationsByRpUidsRequestUrl

▸ **getStationsByRpUidsRequestUrl**(`params`:
[GetStationsByRpUidsParams](interfaces/getstationsbyrpuidsparams.md), `baseUrl`:
string | URL): _string_

**Parameters:**

| Name      | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| `params`  | [GetStationsByRpUidsParams](interfaces/getstationsbyrpuidsparams.md) |
| `baseUrl` | string &#124; URL                                                    |

**Returns:** _string_

---

### `Const` getStationsOnAirUrl

▸ **getStationsOnAirUrl**(`params`: [OnAirParams](interfaces/onairparams.md),
`baseUrl`: string | URL): _string_

**Parameters:**

| Name      | Type                                     |
| --------- | ---------------------------------------- |
| `params`  | [OnAirParams](interfaces/onairparams.md) |
| `baseUrl` | string &#124; URL                        |

**Returns:** _string_

---

### `Const` getStationsRequestUrl

▸ **getStationsRequestUrl**(`params`:
[StationParams](interfaces/stationparams.md), `baseUrl`: string | URL): _string_

**Parameters:**

| Name      | Type                                         |
| --------- | -------------------------------------------- |
| `params`  | [StationParams](interfaces/stationparams.md) |
| `baseUrl` | string &#124; URL                            |

**Returns:** _string_

---

### `Const` getStationsScheduleUrl

▸ **getStationsScheduleUrl**(`params`:
[StationScheduleParams](interfaces/stationscheduleparams.md), `baseUrl`: string
| URL): _string_

**Parameters:**

| Name      | Type                                                         |
| --------- | ------------------------------------------------------------ |
| `params`  | [StationScheduleParams](interfaces/stationscheduleparams.md) |
| `baseUrl` | string &#124; URL                                            |

**Returns:** _string_

---

### `Const` makeSignedRequest

▸ **makeSignedRequest**<**T**>(`__namedParameters`: object): _Promise‹T›_

**Type parameters:**

▪ **T**: _[BaseResponse](interfaces/baseresponse.md)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name          | Type                               | Default |
| ------------- | ---------------------------------- | ------- |
| `keys`        | [KeyAndId](interfaces/keyandid.md) | -       |
| `method`      | "GET" &#124; "POST"                | "GET"   |
| `requestBody` | string                             | ""      |
| `url`         | string &#124; URL                  | -       |

**Returns:** _Promise‹T›_
