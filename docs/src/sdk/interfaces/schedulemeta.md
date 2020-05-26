# Interface: ScheduleMeta

## Hierarchy

↳ [PaginatedMeta](paginatedmeta.md)

↳ **ScheduleMeta**

## Index

### Properties

-   [cacheExpiresAt](schedulemeta.md#cacheexpiresat)
-   [count](schedulemeta.md#count)
-   [country](schedulemeta.md#country)
-   [dataType](schedulemeta.md#datatype)
-   [firstPage](schedulemeta.md#firstpage)
-   [fromCache](schedulemeta.md#fromcache)
-   [lastPage](schedulemeta.md#lastpage)
-   [nesting](schedulemeta.md#nesting)
-   [pageNumber](schedulemeta.md#pagenumber)
-   [pageSize](schedulemeta.md#pagesize)
-   [paginated](schedulemeta.md#paginated)
-   [rpuid](schedulemeta.md#rpuid)
-   [totalPages](schedulemeta.md#totalpages)

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

The subsets in this data array are organised into collections by station: this
is the country the station is part of

---

### dataType

• **dataType**: _"stations" | "onair" | "ondemand" | "schedule" |
"recommendations" | "categories"_

_Inherited from [BaseMeta](basemeta.md).[dataType](basemeta.md#datatype)_

Describes the data type returned

---

### firstPage

• **firstPage**: _boolean_

_Inherited from
[PaginatedMeta](paginatedmeta.md).[firstPage](paginatedmeta.md#firstpage)_

For paginated data - is this the first page of available information?

---

### fromCache

• **fromCache**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[fromCache](basemeta.md#fromcache)_

Have cached values been returned?

---

### lastPage

• **lastPage**: _boolean_

_Inherited from
[PaginatedMeta](paginatedmeta.md).[lastPage](paginatedmeta.md#lastpage)_

For paginated data - is this the last page of available information?

---

### nesting

• **nesting**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[nesting](basemeta.md#nesting)_

Indicates that data is nested into collections of items on a per-station basis

---

### pageNumber

• **pageNumber**: _number_

_Inherited from
[PaginatedMeta](paginatedmeta.md).[pageNumber](paginatedmeta.md#pagenumber)_

For paginated data - the current page of results. Starts at 0

---

### pageSize

• **pageSize**: _number_

_Inherited from
[PaginatedMeta](paginatedmeta.md).[pageSize](paginatedmeta.md#pagesize)_

For paginated data - how many items will be returned per page of results.

---

### paginated

• **paginated**: _boolean_

_Inherited from [BaseMeta](basemeta.md).[paginated](basemeta.md#paginated)_

Indicates whether the results in the corresponding data field are a paginated
subset of all possible results

---

### rpuid

• **rpuid**: _string_

The subsets in this data array are organised into collections by station: an
rpuid will be included for reference to indicate which station the corresponding
data array relates to

---

### totalPages

• **totalPages**: _number_

_Inherited from
[PaginatedMeta](paginatedmeta.md).[totalPages](paginatedmeta.md#totalpages)_

For paginated data - the total number of available pages of data.
