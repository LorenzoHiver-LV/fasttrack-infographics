exports.success = success;
exports.error = error;
exports.formatString = formatString;

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

function formatString(string)
{
    if (typeof string == "string") {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase() ;
    }
};