# Interface: StationOndemandParams

## Hierarchy

-   **StationOndemandParams**

## Index

### Properties

-   [page](stationondemandparams.md#optional-page)
-   [rpuid](stationondemandparams.md#rpuid)
-   [seriesId](stationondemandparams.md#optional-seriesid)
-   [size](stationondemandparams.md#optional-size)

## Properties

### `Optional` page

• **page**? : _undefined | number_

To specify a particular page of results, add this parameter to your query

---

### rpuid

• **rpuid**: _string_

Required. Specify the station you would like on demand items to be returned for.
Currently only one rpuid per request

---

### `Optional` seriesId

• **seriesId**? : _undefined | string_

Required. Specify the series you would like on demand items to be returned for.
Currently only one seriesId per request

---

### `Optional` size

• **size**? : _undefined | number_

The number of results to return (per page)
