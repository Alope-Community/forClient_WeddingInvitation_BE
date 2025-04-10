function successResponse(res, message, data = null, statusCode = 200) {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        code: statusCode,
    });
}

function errorResponse(res, message, error = null, statusCode = 500) {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
        code: statusCode
    });
}

module.exports = {
    successResponse,
    errorResponse,
};