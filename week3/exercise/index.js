/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    for (var i = 0; i < operations.length; i++) {
        var operation = operations[i];
        var next = function (function callback(err, data) {
            next(err, data);
        })


        operation(function callback(err, data) {
            if (err !== null) {
                callback(err);
            } else {
                callback(err, data)
            }
        });
    }
    callback(err, data)
};