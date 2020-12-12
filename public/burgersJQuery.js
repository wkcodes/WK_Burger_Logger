

//On change function for devouring burgers
$(function() {
    $(".devour-btn").on("click", function(event) {
      let id = $(this).data("id");
      let newDevour = $(this).data("newdevour");
  
      let newDevourState = {
        devour: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/update/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });