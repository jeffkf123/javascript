import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const envFound = dotenv.config()

if (envFound.error){

    throw new Error('no .env');
}
export default {

port: parseInt(process.env.PORT),
logs: {
    morgan: process.env.MORGAN
}

}