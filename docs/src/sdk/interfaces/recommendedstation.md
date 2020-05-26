# Interface: RecommendedStation

## Hierarchy

-   [RecommendationData](recommendationdata.md)

-   [StationEntry](stationentry.md)

    ↳ **RecommendedStation**

## Index

### Properties

-   [alphanumericKey](recommendedstation.md#alphanumerickey)
-   [bearers](recommendedstation.md#bearers)
-   [country](recommendedstation.md#country)
-   [description](recommendedstation.md#description)
-   [factors](recommendedstation.md#factors)
-   [liveStreams](recommendedstation.md#livestreams)
-   [multimedia](recommendedstation.md#multimedia)
-   [name](recommendedstation.md#name)
-   [phoneticInputs](recommendedstation.md#phoneticinputs)
-   [phoneticOutputs](recommendedstation.md#phoneticoutputs)
-   [rpuid](recommendedstation.md#rpuid)
-   [socialIds](recommendedstation.md#socialids)
-   [type](recommendedstation.md#type)

## Properties

### alphanumericKey

• **alphanumericKey**: _string_

_Inherited from
[StationEntry](stationentry.md).[alphanumericKey](stationentry.md#alphanumerickey)_

The letter/number to indicate where in an alphabetic list this station should be
placed

---

### bearers

• **bearers**: _Array‹object›_

_Inherited from
[StationEntry](stationentry.md).[bearers](stationentry.md#bearers)_

An array of bearer IDs and information.

---

### country

• **country**: _string_

_Inherited from
[StationEntry](stationentry.md).[country](stationentry.md#country)_

ISO number code of the station's country.

---

### description

• **description**: _string_

_Inherited from
[StationEntry](stationentry.md).[description](stationentry.md#description)_

Station description.

---

### factors

• **factors**: _[Factors](../globals.md#factors)[]_

_Inherited from
[RecommendationData](recommendationdata.md).[factors](recommendationdata.md#factors)_

---

### liveStreams

• **liveStreams**: _[Stream](stream.md)[]_

_Inherited from
[StationEntry](stationentry.md).[liveStreams](stationentry.md#livestreams)_

Stream urls and information for this station.

---

### multimedia

• **multimedia**: _[MultiMedia](multimedia.md)[]_

_Inherited from
[StationEntry](stationentry.md).[multimedia](stationentry.md#multimedia)_

Station assets, typically logo images.

---

### name

• **name**: _string_

_Inherited from [StationEntry](stationentry.md).[name](stationentry.md#name)_

Station name

---

### phoneticInputs

• **phoneticInputs**: _[Phonetics](phonetics.md)[]_

_Inherited from
[StationEntry](stationentry.md).[phoneticInputs](stationentry.md#phoneticinputs)_

Any phonetic SSML tags or spellings that can be used to help voice controlled
devices recognise a station name as said by an end user

---

### phoneticOutputs

• **phoneticOutputs**: _[Phonetics](phonetics.md)[]_

_Inherited from
[StationEntry](stationentry.md).[phoneticOutputs](stationentry.md#phoneticoutputs)_

Any phonetic SSML tags or spellings that can be used to help voice controlled
devices speak/pronounce a station name if required

---

### rpuid

• **rpuid**: _string_

_Inherited from [StationEntry](stationentry.md).[rpuid](stationentry.md#rpuid)_

Unique identifier representing a specific station. Unique across all countries.

---

### socialIds

• **socialIds**: _string[]_

_Inherited from
[StationEntry](stationentry.md).[socialIds](stationentry.md#socialids)_

The ids of any linked social media accounts this station has.

---

### type

• **type**: _"STATION" | "ONDEMAND"_

_Inherited from
[RecommendationData](recommendationdata.md).[type](recommendationdata.md#type)_
