# Interface: StationScheduleParams

## Hierarchy

-   **StationScheduleParams**

## Index

### Properties

-   [from](stationscheduleparams.md#optional-from)
-   [page](stationscheduleparams.md#optional-page)
-   [rpuids](stationscheduleparams.md#rpuids)
-   [size](stationscheduleparams.md#optional-size)
-   [to](stationscheduleparams.md#optional-to)

## Properties

### `Optional` from

• **from**? : _string | Date_

The start time of the schedule in ISO8601 format. If from and to parameters are
omitted, then the API returns the station’s schedule for the next 24 hours
starting from the nearest hour before the current time.

---

### `Optional` page

• **page**? : _undefined | number_

To specify a particular page of results, add this parameter to your query

---

### rpuids

• **rpuids**: _string[]_

Required. Specify the stations you would like schedule information for, in a
comma separated list of rpuids. Maximum 5 rpuids per request.

---

### `Optional` size

• **size**? : _undefined | number_

The number of results to return

---

### `Optional` to

• **to**? : _string | Date_

The start time of the schedule in ISO8601 format. If from and to parameters are
omitted, then the API returns the station’s schedule for the next 24 hours
starting from the nearest hour before the current time.
