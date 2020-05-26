# Interface: StationEntry

## Hierarchy

-   **StationEntry**

    ↳ [RecommendedStation](recommendedstation.md)

## Index

### Properties

-   [alphanumericKey](stationentry.md#alphanumerickey)
-   [bearers](stationentry.md#bearers)
-   [country](stationentry.md#country)
-   [description](stationentry.md#description)
-   [liveStreams](stationentry.md#livestreams)
-   [multimedia](stationentry.md#multimedia)
-   [name](stationentry.md#name)
-   [phoneticInputs](stationentry.md#phoneticinputs)
-   [phoneticOutputs](stationentry.md#phoneticoutputs)
-   [rpuid](stationentry.md#rpuid)
-   [socialIds](stationentry.md#socialids)

## Properties

### alphanumericKey

• **alphanumericKey**: _string_

The letter/number to indicate where in an alphabetic list this station should be
placed

---

### bearers

• **bearers**: _Array‹object›_

An array of bearer IDs and information.

---

### country

• **country**: _string_

ISO number code of the station's country.

---

### description

• **description**: _string_

Station description.

---

### liveStreams

• **liveStreams**: _[Stream](stream.md)[]_

Stream urls and information for this station.

---

### multimedia

• **multimedia**: _[MultiMedia](multimedia.md)[]_

Station assets, typically logo images.

---

### name

• **name**: _string_

Station name

---

### phoneticInputs

• **phoneticInputs**: _[Phonetics](phonetics.md)[]_

Any phonetic SSML tags or spellings that can be used to help voice controlled
devices recognise a station name as said by an end user

---

### phoneticOutputs

• **phoneticOutputs**: _[Phonetics](phonetics.md)[]_

Any phonetic SSML tags or spellings that can be used to help voice controlled
devices speak/pronounce a station name if required

---

### rpuid

• **rpuid**: _string_

Unique identifier representing a specific station. Unique across all countries.

---

### socialIds

• **socialIds**: _string[]_

The ids of any linked social media accounts this station has.
