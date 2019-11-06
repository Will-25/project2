$(document).ready(function() {
  // Get references to page elements
  var $pizzaName = $("#pizza-enter");
  var $submitBtn = $("#submit");
  var $favoriteList = $("#pizza-fav");

  var pizzaName = $("#pizza-enter");
  var submitBtn = $("#submit");
  var favoriteList = $("#pizza-fav");

 
  var API = {
    savePizza: function(index) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/favorites",
        data: JSON.stringify(index)
      });
    },
    getPizza: function() {
      return $.ajax({
        url: "api/favorites",
        type: "GET"
      });
    },
    deletePizza: function(id) {
      return $.ajax({
        url: "api/favorites/" + id,
        type: "DELETE"
      });
    }
  };

  // eslint-disable-next-line no-irregular-whitespace
  // refreshFavorites gets new examples from the db and repopulates the list

  API.getPizza().then(function(data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      var favoriteList = {
        name: data[i].pizzaName,
        toppings: data[i].toppings
      }

      console.log(favoriteList)
      // $("#pizza-fav").html("<div>" + favoriteList + "</div>");
      $(".favList").append(favoriteList.name + ", ");
    }
  });

  // eslint-disable-next-line no-irregular-whitespace
  // handleFormSubmit is called whenever we submit a new example
  // eslint-disable-next-line no-irregular-whitespace
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();
    var index = {
      text: = pizzaName.val().trim(),
    };

    if (!(index.text)) {
      alert("You must enter an Pizza name!");
      return;
    }

    API.savePizza(index).then(function() {
      refreshFavorites();
    });

    pizzaName.val("");
  };

  // eslint-disable-next-line no-irregular-whitespace
  // handleDeleteBtnClick is called when an example's delete button is clicked
  // eslint-disable-next-line no-irregular-whitespace
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deletePizza(idToDelete).then(function() {
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
  var count = 0;
  // for loop to create all toppings buttons to html
  for (var i = 0; i < toppings.length; i++) {
    count++;
    var button = $("<button>");
    button.addClass("buttonT");
    button.attr("id", count);
    button.text(toppings[i]);

    $(".pizza-buttons").append(button);
  };

  // $(".buttonT").on("click", function(){
  //   var bText= $(this).text();
  //   $(".userToppings").append(bText);

  // }
  $(".buttonT").on("click", function(event) {
    event.preventDefault();
    var bText = $(this).text();

    $(".userToppings").append(bText, ", ");
  });
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var index = {
      text: $pizzaName.val().trim()
    };

    if (!index.text) {
      alert("You must enter an Pizza name!");
      return;
    }
    var toppings = $(".userToppings").text();
    var pizzaInput = $("#pizza-enter").val();
    var userPizza = {
      name: pizzaInput,
      toppings: toppings
    };
    $.post("/api/favorites", userPizza).then();
    displayEmpty();
  });
  function displayEmpty() {
    userPizza.empty();
  }
});
