export declare interface OdParams {
    /**
     * Required if using the search or category parameters. A 3 digit country ISO code.
     */
    country?: string;
    /**
     * Search for on demand items with a uri-encoded search term - essentially a text search on show titles and descriptions.
     * Requires an additional country parameter to be included.
     */
    search?: string;
    /**
     * search for ondemand items by category. The category identifiers can be found by querying the categories endpoint, and using the returned href values (uri-encoded).
     * Requires an additional country parameter to be included.
     */
    category?: string;
    /**
     * Search for ondemand items by a comma separated string of ondemand IDs. Maximum 5 odIds per request.
     */
    odIds?: string[];
}
