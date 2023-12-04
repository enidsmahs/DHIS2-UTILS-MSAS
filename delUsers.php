<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
<script>
    var tab = [];
    const _url = 'https://pev.hispwca.org/senegal/api';

    function deleteAllUsers2() {
        //console.log(tab);

        for (let index = 0; index < tab.length; index++) {
            const element = tab[index];

            console.log(element);

            let requestURL = _url + '/users/' + element;
            $.ajax({
                type: "DELETE",
                url: requestURL,
                cache: false,
                headers: {
                    "Authorization": "Basic " + btoa("shamsdine" + ":" + "S783724110@")
                },
                success: function(data) {

                    console.log(data);

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Status: " + textStatus);
                    console.log("Error: " + errorThrown);
                }
            });

        }
        /* */
    }

    $(function() {

        deleteAllUsers2();
    })
</script>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DELETE ALL USERS</title>
</head>

<body>


</body>

</html>
