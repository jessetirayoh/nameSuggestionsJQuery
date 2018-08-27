
// Tests if jquery script is working
// $(document).ready(function()  {
//     $("button").click(function() {
//         $.get("test.txt", function(data, status) {
//             $("#test").html(data);
//             alert(status);
//         })
//     });
// });

$(document).ready(function() {
    $("input").keyup(function() {
        var name = $("input").val();
        $.post("suggestions.php", {
            suggestion: name
        }, function(data, status)   {
            $("#test").html(data);
        });
    });
});