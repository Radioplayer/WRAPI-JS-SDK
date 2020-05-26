# Interface: ScheduleResponse

## Hierarchy

-   [BaseResponse](baseresponse.md)

    ↳ **ScheduleResponse**

## Index

### Properties

-   [data](scheduleresponse.md#data)
-   [error](scheduleresponse.md#optional-error)
-   [meta](scheduleresponse.md#meta)

## Properties

### data

• **data**: _[NestedData](nesteddata.md)[]_

_Overrides [BaseResponse](baseresponse.md).[data](baseresponse.md#data)_

A collection of station's schedules. Even if only one station is requested,
results will still be organised into an array of objects, each object containing
an array of results for said station's schedule information.

---

### `Optional` error

• **error**? : _undefined | object_

_Inherited from
[BaseResponse](baseresponse.md).[error](baseresponse.md#optional-error)_

---

### meta

• **meta**: _[BaseMeta](basemeta.md)_

_Overrides [BaseResponse](baseresponse.md).[meta](baseresponse.md#meta)_
