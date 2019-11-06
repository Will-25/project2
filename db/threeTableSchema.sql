CREATE TABLE toppings
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    topping_name VARCHAR(50) NOT NULL,
    topping_type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE favorites
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    pizza_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE pizzaWTopping
(
pizza_id INTEGER NOT NULL FOREIGN KEY REFERENCES toppings(id) NOT NULL,
topping_id INTEGER NOT NULL FOREIGN KEY REFERENCES faveorites(id) NOT NULL
)

SELECT t.name,
       f.name
FROM pizzaWTopping AS tf
INNER JOIN toppings AS t ON tf.toppingid = t.id
INNER JOIN faveorites AS f ON tf.faveoritesid = f.id;