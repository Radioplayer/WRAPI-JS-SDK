# Interface: Stream

## Hierarchy

-   **Stream**

## Index

### Properties

-   [audioFormat](stream.md#audioformat)
-   [availableStart](stream.md#availablestart)
-   [availableStop](stream.md#availablestop)
-   [bitrate](stream.md#bitrate)
-   [streamRestriction](stream.md#streamrestriction)
-   [streamSource](stream.md#streamsource)

## Properties

### audioFormat

• **audioFormat**: _string_

---

### availableStart

• **availableStart**: _Date_

Only for ondemand items: the date from which the on demand item is available

---

### availableStop

• **availableStop**: _Date_

Only for ondemand items: the date until which the on demand item is available

---

### bitrate

• **bitrate**: _object_

Details about the stream bit rate

#### Type declaration:

-   **target**: _number_

-   **variable**: _boolean_

---

### streamRestriction

• **streamRestriction**: _object_

#### Type declaration:

-   **relationship**: _"allow" | "deny"_

-   **value**: _string_

---

### streamSource

• **streamSource**: _object_

#### Type declaration:

-   **mimeValue**: _string_

-   **url**: _string_
