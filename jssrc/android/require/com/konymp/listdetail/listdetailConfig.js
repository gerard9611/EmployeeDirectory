define(function() {
    return {
        "properties": [{
            "name": "flxDictionaryVisible",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "searchList",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "defaultProfile",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "defaultCover",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "defaultStatus",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "hideHeader",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["getData", "filterAndSetData"],
        "events": ["menuClick", "filterClick"]
    }
});