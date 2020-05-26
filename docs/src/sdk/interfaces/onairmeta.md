# Interface: OnAirMeta

## Hierarchy

-   [BaseMeta](basemeta.md)

    ↳ **OnAirMeta**

## Index

### Properties

-   [cacheExpiresAt](onairmeta.md#cacheexpiresat)
-   [count](onairmeta.md#count)
-   [country](onairmeta.md#country)
-   [dataType](onairmeta.md#datatype)
-   [fromCache](onairmeta.md#fromcache)
-   [nesting](onairmeta.md#nesting)
-   [paginated](onairmeta.md#paginated)
-   [rpuid](onairmeta.md#rpuid)

## Properties

### cacheExpiresAt

• **cacheExpiresAt**: _number | null_

_Inherited from
[BaseMeta](basemeta.md).[cacheExpiresAt](basemeta.md#cacheexpiresat)_

When does the cache expire?

---

### count

• **count**: _number_

_Inherited from [BaseMeta](basemeta.md).[count](basemeta.md#count)_

How many items are there in the overall result data set.

---

### country

• **country**: _string_

---

### dataType

• **dataType**: _"stations" | "onair" | "ondemand" | "schedule" |
"recommendations" | "categories"_

_Inherited from [BaseMeta](basemeta.md).[dataType](basemeta.md#datatype)_

Describes the data type returned

---

### fromCache

• **fromCache**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[fromCache](basemeta.md#fromcache)_

Have cached values been returned?

---

### nesting

• **nesting**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[nesting](basemeta.md#nesting)_

Indicates that data is nested into collections of items on a per-station basis

---

### paginated

• **paginated**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[paginated](basemeta.md#paginated)_

Indicates whether the results in the corresponding data field are a paginated
subset of all possible results

---

### rpuid

• **rpuid**: _string_
