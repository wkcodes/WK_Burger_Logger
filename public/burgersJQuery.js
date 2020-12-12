//On change function for devouring burgers
console.log("jquery reached")
$(function () {
  $(".devour-btn").on("click", function (event) {
    /* let id = $(this).data("id");
    let newDevour = $(this).data("newDevour");

    let newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("burger changed to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  }); */

    $(".create-burger").on("submit", function (event) {
      console.log("clicked");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      let newBurger = {
        burger_name: $("#burgerName").val().trim(),
        devoured: false,
      };

      console.log(newBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("added new burger to the db");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
});
