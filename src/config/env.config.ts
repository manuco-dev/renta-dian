export const EnvConfiguration =()=>{
    return {
        enviroment: process.env.NODE_ENV || 'dev',
        mongodb: process.env.MONGODB,
        port: process.env.PORT || 3302,
    }
}