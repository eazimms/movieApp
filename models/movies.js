module.exports = function(sequelize, DataTypes) {
    let Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }, 
        category: {
            type: DataTypes. STRING,
            defaultValue: "Fall2023"
        }
    });
    return Post; 
}; 