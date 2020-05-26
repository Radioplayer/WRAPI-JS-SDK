# Interface: StationParams

## Hierarchy

-   **StationParams**

## Index

### Properties

-   [bearerId](stationparams.md#optional-bearerid)
-   [country](stationparams.md#optional-country)
-   [geo](stationparams.md#optional-geo)
-   [include](stationparams.md#optional-include)
-   [search](stationparams.md#optional-search)
-   [sort](stationparams.md#optional-sort)

## Properties

### `Optional` bearerId

• **bearerId**? : _undefined | string_

Search for a station based on a bearerId.

---

### `Optional` country

• **country**? : _undefined | string_

Required if searching by geo, term or bearerId parameters. Otherwise an optional
3 digit country ISO code to limit the size and speed of requests. Recommended.

---

### `Optional` geo

• **geo**? : _number[]_

Search for a station with a comma-separated array of latitude and longitude (eg
\[101,-97]).

---

### `Optional` include

• **include**? : _[StationIncludes](../globals.md#stationincludes)[]_

Limit the fields that are returned in each station object. An array of possible
values

---

### `Optional` search

• **search**? : _undefined | string_

Search for a station with a uri-encoded search term.

---

### `Optional` sort

• **sort**? : _undefined | "alphanumericKey"_

At the moment, the only supported sort order is 'alphanumericKey'
