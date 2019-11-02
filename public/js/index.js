$(document).ready(function () {
  // Get references to page elements
  var $pizzaName = $("#pizza-enter");
  var $submitBtn = $("#submit");
  var $favoriteList = $("#pizza-fav");

  // The API object contains methods for each kind of request we'll make
  var API = {
    savePizza: function (index) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/favorites",
        data: JSON.stringify(index)
      });
    },
    getPizza: function () {
      return $.ajax({
        url: "api/index",
        type: "GET"
      });
    },
    deletePizza: function (id) {
      return $.ajax({
        url: "api/favorites/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshFavorites gets new examples from the db and repopulates the list
  var refreshFavorites = function () {
    API.getPizza().then(function (data) {
      var $index = data.map(function (index) {
        var $a = $("<a>")
          .text(index.text)
          .attr("href", "/index/" + index.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": index.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $favoriteList.empty();
      $favoriteList.append($index);
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function (event) {
    event.preventDefault();

    var index = {
      text: $pizzaName.val().trim(),
    };

    if (!(index.text)) {
      alert("You must enter an Pizza name!");
      return;
    }

    API.savePizza(index).then(function () {
      refreshFavorites();
    });

    $pizzaName.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function () {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deletePizza(idToDelete).then(function () {
      refreshFavorites();
    });
  };

  var toppings = [
    "Pepperoni",
    "Mushroom",
    "Sausage",
    "Bacon",
    "Onion",
    "Garlic",
    "Crushed Red Pepper",
    "Pineapple",
    "Basil",
    "Ham",
    "Olives",
    "Oregano",
    "Chicken",
    "Beef",
    "Jalapeno",
    "Green Pepper",
    "Salami",
    "Spinach",
    "Buffilo Chicken",
    "BBQ Sause",
    "Feta Cheese"
  ];

  // for loop to create all toppings buttons to html
  for (var i = 0; i < toppings.length; i++) {
    var count = 1;
    // var button = $("<button>");
    button.addClass("buttonT");
    button.attr('id', toppings[i]);
    button.text(toppings[i]);
    // count++;
    $(".pizza-buttons").append(button);
  };
  $(".buttonT").on("click", function(){
    var bText= $(this).text();
    $(".userToppings").append(bText);
  });

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $favoriteList.on("click", ".delete", handleDeleteBtnClick);
});