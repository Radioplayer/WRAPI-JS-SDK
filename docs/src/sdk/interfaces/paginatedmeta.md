# Interface: PaginatedMeta

## Hierarchy

-   [BaseMeta](basemeta.md)

    ↳ **PaginatedMeta**

    ↳ [ScheduleMeta](schedulemeta.md)

## Index

### Properties

-   [cacheExpiresAt](paginatedmeta.md#cacheexpiresat)
-   [count](paginatedmeta.md#count)
-   [dataType](paginatedmeta.md#datatype)
-   [firstPage](paginatedmeta.md#firstpage)
-   [fromCache](paginatedmeta.md#fromcache)
-   [lastPage](paginatedmeta.md#lastpage)
-   [nesting](paginatedmeta.md#nesting)
-   [pageNumber](paginatedmeta.md#pagenumber)
-   [pageSize](paginatedmeta.md#pagesize)
-   [paginated](paginatedmeta.md#paginated)
-   [totalPages](paginatedmeta.md#totalpages)

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

### dataType

• **dataType**: _"stations" | "onair" | "ondemand" | "schedule" |
"recommendations" | "categories"_

_Inherited from [BaseMeta](basemeta.md).[dataType](basemeta.md#datatype)_

Describes the data type returned

---

### firstPage

• **firstPage**: _boolean_

For paginated data - is this the first page of available information?

---

### fromCache

• **fromCache**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[fromCache](basemeta.md#fromcache)_

Have cached values been returned?

---

### lastPage

• **lastPage**: _boolean_

For paginated data - is this the last page of available information?

---

### nesting

• **nesting**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[nesting](basemeta.md#nesting)_

Indicates that data is nested into collections of items on a per-station basis

---

### pageNumber

• **pageNumber**: _number_

For paginated data - the current page of results. Starts at 0

---

### pageSize

• **pageSize**: _number_

For paginated data - how many items will be returned per page of results.

---

### paginated

• **paginated**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[paginated](basemeta.md#paginated)_

Indicates whether the results in the corresponding data field are a paginated
subset of all possible results

---

### totalPages

• **totalPages**: _number_

For paginated data - the total number of available pages of data.
