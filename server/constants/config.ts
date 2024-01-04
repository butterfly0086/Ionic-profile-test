import { configTypes } from "../types/profileType";

export default <configTypes>{
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/profile',
};
