# Interface: RecommendationParams

## Hierarchy

-   **RecommendationParams**

## Index

### Properties

-   [artistPlayCounts](recommendationparams.md#optional-artistplaycounts)
-   [country](recommendationparams.md#optional-country)
-   [facebookArtists](recommendationparams.md#optional-facebookartists)
-   [factors](recommendationparams.md#factors)
-   [latitude](recommendationparams.md#optional-latitude)
-   [longitude](recommendationparams.md#optional-longitude)
-   [onDemand](recommendationparams.md#optional-ondemand)
-   [rpuid](recommendationparams.md#optional-rpuid)

## Properties

### `Optional` artistPlayCounts

• **artistPlayCounts**? : _[ArtistPlay](artistplay.md)[]_

An array of objects each containing an artistName string, and a corresponding
playCount integer. Used in conjunction with the MUSICMATCH parameter.

---

### `Optional` country

• **country**? : _undefined | string_

Three digit country ISO code used to specify from which Radioplayer region we
want to receive recommendations

---

### `Optional` facebookArtists

• **facebookArtists**? : _string[]_

An array of artist names that when used in conjunction with the MUSICMATCH
parameter can help tailor recommendations.

---

### factors

• **factors**: _[Factors](../globals.md#factors)[]_

What factors do you want to influence your recommendations? Multiple factors can
be used. Possible values are "GEO", "TRENDING", "AFFINITY", and "MUSICMATCH"

---

### `Optional` latitude

• **latitude**? : _undefined | number_

Recommendations can be tailored based on the user's location when the GEO factor
is included - an optional latitude and longitude can be included in the body

---

### `Optional` longitude

• **longitude**? : _undefined | number_

Recommendations can be tailored based on the user's location when the GEO factor
is included - an optional latitude and longitude can be included in the body

---

### `Optional` onDemand

• **onDemand**? : _undefined | false | true_

If true, on demand items will be included in the recommendations. Default is
false.

---

### `Optional` rpuid

• **rpuid**? : _undefined | string_

A station rpuid, typically the last listened or currently listened to station.
This influences recommendations when the AFFINITY factor is included
