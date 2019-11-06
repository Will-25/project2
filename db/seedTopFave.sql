 INSERT INTO toppings (topping_name, topping_type)
    VALUES("Pepperoni", "Meat"),
          ("Mushroom", "Non-Meat"),
          ("Sausage", "Meat"),
          ("Bacon", "Meat"),
          ("Onion", "Non-Meat"),
          ("Garlic", "Non-Meat"),
          ("Crushed Red Pepper"),
          ("Pineapple", "Non-Meat"),
          ("Basil", "Non-Meat"),
          ("Ham", "Meat"),
          ("Olives", "Non-Meat"),
          ("Oregano", "Non-Meat"),
          ("Chicken", "Meat"),
          ("Beef", "Non-Meat"),
          ("Jalapeno", "Non-Meat"),
          ("Green Pepper", "Non-Meat"),
          ("Salami", "Meat"),
          ("Spinach", "Non-Meat"),
          ("Buffalo Chicken", "Meat"),
          ("BBQ Sauce", "Non-Meat"),
          ("Feta Cheese", "Non-Meat");

INSERT INTO favorites (pizza_name)
    VALUES("meat lover"),
          ("bbq chicken pizza"),
          ("buffalo chicken pizza"),
          ("hawaiian pizza");

INSERT INTO pizzaWTopping (pizza_id, topping_id)
    VALUES(1, 1),
          (1, 3),
          (1, 4),
          (1, 10),
          (2, 13),
          (2, 20),
          (3, 19),
          (3, 16),
          (3, 5),
          (4, 1),
          (4, 3),
          (4, 8),
          (4, 10);