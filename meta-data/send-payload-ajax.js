var jsonData = {
            'dataSet': dataSetID,
            'period': period,
            'orgUnit': orgUnitID,
            'cache': false,
            'dataValues': [
                { "dataElement": "uObBj4fjxPQ", "categoryOptionCombo": "HllvX50cXC0", "value": Total1.value },
                { "dataElement": "zdKHRB4fX1U", "categoryOptionCombo": "HllvX50cXC0", "value": Total2.value },
                { "dataElement": "c6D5RhkZZzN", "categoryOptionCombo": "HllvX50cXC0", "value": Total3.value },
                { "dataElement": "ty0UwahCu8Q", "categoryOptionCombo": "HllvX50cXC0", "value": Total4.value },
                { "dataElement": "rgzCNWwfgIY", "categoryOptionCombo": "HllvX50cXC0", "value": Total5.value },
                { "dataElement": "JzNPJcgSOHp", "categoryOptionCombo": "HllvX50cXC0", "value": Total6.value },
                { "dataElement": "fernp9sTz3e", "categoryOptionCombo": "HllvX50cXC0", "value": Total7.value },
                { "dataElement": "HQgTjhjg7Yt", "categoryOptionCombo": "HllvX50cXC0", "value": Total8.value },

            ]
        }
        var requestURL = 'https://owod.dhis2.rti-ghd.org/api/dataValueSets/';
        $.ajax({
            type: "POST",
            url: requestURL,
            data: JSON.stringify(jsonData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
                "Authorization": "Basic " + btoa("abdou" + ":" + "DHIS24ever$")
            },
            success: function (data) { console.log('dataElementValue saved with success'); },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            }
        });