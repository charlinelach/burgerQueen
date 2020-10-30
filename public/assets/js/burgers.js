// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    let id = $(this).data("id");
    let newEat = $(this).data("neweat");

    let newEatState = {
      devoured: newEat
    };

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed eatery to", newEat);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Automatically reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    // If a user hit the unnecessary DELETE button, then it would remove the item off the table
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Automatically reload the page to get the updated list
        location.reload();
      }
    );
  });
});
