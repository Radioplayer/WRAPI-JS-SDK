# Interface: BaseMeta

## Hierarchy

-   **BaseMeta**

    ↳ [PaginatedMeta](paginatedmeta.md)

    ↳ [OnAirMeta](onairmeta.md)

## Index

### Properties

-   [cacheExpiresAt](basemeta.md#cacheexpiresat)
-   [count](basemeta.md#count)
-   [dataType](basemeta.md#datatype)
-   [fromCache](basemeta.md#fromcache)
-   [nesting](basemeta.md#nesting)
-   [paginated](basemeta.md#paginated)

## Properties

### cacheExpiresAt

• **cacheExpiresAt**: _number | null_

When does the cache expire?

---

### count

• **count**: _number_

How many items are there in the overall result data set.

---

### dataType

• **dataType**: _"stations" | "onair" | "ondemand" | "schedule" |
"recommendations" | "categories"_

Describes the data type returned

---

### fromCache

• **fromCache**: _boolean_

Have cached values been returned?

---

### nesting

• **nesting**: _boolean_

Indicates that data is nested into collections of items on a per-station basis

---

### paginated

• **paginated**: _boolean_

Indicates whether the results in the corresponding data field are a paginated
subset of all possible results
