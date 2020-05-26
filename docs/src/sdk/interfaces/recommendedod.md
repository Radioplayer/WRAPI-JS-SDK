# Interface: RecommendedOD

## Hierarchy

-   [RecommendationData](recommendationdata.md)

-   [ODData](oddata.md)

    ↳ **RecommendedOD**

## Index

### Properties

-   [country](recommendedod.md#country)
-   [description](recommendedod.md#description)
-   [factors](recommendedod.md#factors)
-   [id](recommendedod.md#id)
-   [liveStreams](recommendedod.md#livestreams)
-   [multimedia](recommendedod.md#multimedia)
-   [name](recommendedod.md#name)
-   [rpuid](recommendedod.md#rpuid)
-   [series](recommendedod.md#series)
-   [type](recommendedod.md#type)

## Properties

### country

• **country**: _string_

_Inherited from [ODData](oddata.md).[country](oddata.md#country)_

The country this show's station is in

---

### description

• **description**: _string_

_Inherited from [ODData](oddata.md).[description](oddata.md#description)_

The description of the on demand item.

---

### factors

• **factors**: _[Factors](../globals.md#factors)[]_

_Inherited from
[RecommendationData](recommendationdata.md).[factors](recommendationdata.md#factors)_

---

### id

• **id**: _string_

_Inherited from [ODData](oddata.md).[id](oddata.md#id)_

A unique ID for the on demand item

---

### liveStreams

• **liveStreams**: _[Stream](stream.md)[]_

_Inherited from [ODData](oddata.md).[liveStreams](oddata.md#livestreams)_

Stream urls and information for item.

---

### multimedia

• **multimedia**: _[MultiMedia](multimedia.md)[]_

_Inherited from [ODData](oddata.md).[multimedia](oddata.md#multimedia)_

Assets, typically show/album art images.

---

### name

• **name**: _string_

_Inherited from [ODData](oddata.md).[name](oddata.md#name)_

The name of the on demand item.

---

### rpuid

• **rpuid**: _string_

_Inherited from [ODData](oddata.md).[rpuid](oddata.md#rpuid)_

The station this show belongs to.

---

### series

• **series**: _object_

_Inherited from [ODData](oddata.md).[series](oddata.md#series)_

The series this item is part of, if at all

#### Type declaration:

-   **id**: _string_

---

### type

• **type**: _"STATION" | "ONDEMAND"_

_Inherited from
[RecommendationData](recommendationdata.md).[type](recommendationdata.md#type)_
