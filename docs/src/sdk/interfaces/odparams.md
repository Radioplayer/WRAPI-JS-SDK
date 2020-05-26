# Interface: OdParams

## Hierarchy

-   **OdParams**

## Index

### Properties

-   [category](odparams.md#optional-category)
-   [country](odparams.md#optional-country)
-   [odIds](odparams.md#optional-odids)
-   [search](odparams.md#optional-search)

## Properties

### `Optional` category

• **category**? : _undefined | string_

search for ondemand items by category. The category identifiers can be found by
querying the categories endpoint, and using the returned href values
(uri-encoded). Requires an additional country parameter to be included.

---

### `Optional` country

• **country**? : _undefined | string_

Required if using the search or category parameters. A 3 digit country ISO code.

---

### `Optional` odIds

• **odIds**? : _string[]_

Search for ondemand items by a comma separated string of ondemand IDs. Maximum 5
odIds per request.

---

### `Optional` search

• **search**? : _undefined | string_

Search for on demand items with a uri-encoded search term - essentially a text
search on show titles and descriptions. Requires an additional country parameter
to be included.
