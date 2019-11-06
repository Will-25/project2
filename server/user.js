var bcrypt = require("bcrypt");

module.exports = sequelize, DataTypes,
    function () {
        var User = sequelize.define("User", {
            email: {
                type: DataTypes.STRING,
                allowNUll: false
            },
            username: {
                type: DataTypes.STRING,
                allowNUll: false
            },
            password: {
                type: DataTypes.STRING,
                allowNUll: false

            }
        });
        User.associate = function () {
            User.hasMany(AuthToken);

        };
        User.authenticate - async function (username, password) {
            var user = await User.findOne({
                where: {
                    username
                }
            });
            if (bcrypt.compareSync(password, user.password)) {
                return user.authorize();
            }
            throw new Error("the password and email combination don't match");
        }
        User.prototype.authorize = async function () {
            var {
                AuthToken
            } = sequelize.models;
            var user = this;

            var authToken = await AuthToken.generate(this.id);

            await user.addAuthToken(authToken);

            return {
                user,
                authToken
            }
        };

        User.prototype.logout = async function (token) {
            sequelize.models.AuthToken.destroy({
                where: {
                    token
                }
            });
        };
        return User;
    }