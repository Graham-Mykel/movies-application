/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */


const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

// add page load animation
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("650");
});

$(document).ready(function(){
    // Add table row and data
    $(".add-row").click(function(){
        var title = $("#title").val();
        var rating = $("#rating").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + title + "</td><td>" + rating + "</td></tr>";
        $("table tbody").append(markup);
    });

    // Find and remove selected table rows
    $(".delete-row").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});


