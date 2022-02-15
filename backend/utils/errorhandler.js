//! Error is default class in node

class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor);
        //? Error.captureStackTrace(target object, constructor) 
    }
}

module.exports = ErrorHandler;