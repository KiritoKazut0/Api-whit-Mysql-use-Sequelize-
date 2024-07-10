import sequelize from "../Database/ConexionDatabase";
import { DataTypes } from "sequelize"
import {v4 as uuidv4} from "uuid"

const Products = sequelize.define('products', {
    name: DataTypes.STRING(25),
    brand: DataTypes.STRING(25),
    url: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    amount: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
    
    id: {
        type: DataTypes.UUID,
        defaultValue:uuidv4,
        primaryKey: true
    }
})

Products.sync({ alter: true })
    .then(() => {
        console.log('Products table created successfully');
    })
    .catch((error) => {
        console.error('An error has occurred in Products', error);
    })