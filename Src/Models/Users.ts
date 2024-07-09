    import { DataTypes } from "sequelize";
    import sequelize from "../Database/ConexionDatabase";
    import { v4 as uuidv4 } from "uuid";

    const Users = sequelize.define('Users', {
        username: DataTypes.STRING(20),
        password: DataTypes.STRING(30),
        email: DataTypes.STRING(50),

        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true
        }
    });

    Users.sync({ alter: true })
        .then(() => {
            console.log('users table created successfully');
        })

        .catch((error) => {
            console.error(`An error has occurred ${error}`);
        })

    export default Users;
