# Interface: Phonetics

## Hierarchy

-   **Phonetics**

## Index

### Properties

-   [exclude](phonetics.md#optional-exclude)
-   [id](phonetics.md#id)
-   [type](phonetics.md#optional-type)
-   [value](phonetics.md#optional-value)

## Properties

### `Optional` exclude

• **exclude**? : _string[]_

A list of any platforms that we know this phonetic record should be excluded
from. For example, we know that SSML inputs are not supported on the Amazon
Alexa, so any SSML inputs should include 'alexa' in this array

---

### id

• **id**: _string_

A unique ID for the phonetic record

---

### `Optional` type

• **type**? : _undefined | string_

Specifies whether the format of this phonetic spelling is SSML or a fuzzy,
pidgin-English type spelling. Values will be ssml or pidgin

---

### `Optional` value

• **value**? : _undefined | string_

The phonetic spelling/pronunciation of the station in question
