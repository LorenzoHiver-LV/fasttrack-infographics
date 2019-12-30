exports.success = success;
exports.error = error;

function success(result) {
    return {
        'status': 'success',
        'data': result
    }
};

function error(result) {
    return {
        'status': 'error',
        'message': result
    }
};