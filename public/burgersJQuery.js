//On change function for devouring burgers
$(function () {
  $(".devour-btn").on("click", function (event) {
    console.log("button clicked")
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevour");

    let newDevourState = {
      devour: newDevour,
    };

    // Send the PUT request.
    $.ajax("/api/update/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("burger changed to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/addburger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added new burger to the db");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
