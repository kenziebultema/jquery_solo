/**
 * Created by ulaeulaeulae on 1/4/16.
 */

console.log("blahblah");

$.ajax("package.json").then(function(response){

    console.log("I'm working");
    for(var i = 0; i < response.length; i++){
        var $content = '';

        var id = response[i].id;
        console.log("yay");
        var gender = response[i].gender;
        console.log('yay?');
        var firstName = response[i].first_name;
        var lastName = response[i].last_name;
        var email = response[i].email;

        $content = "<p>ID: " + id + " Gender: " + gender + " First Name: "  + firstName + " Last Name: " + lastName + " E-mail: " + email + "</p>";

        $('.content').append($content);


    }

});