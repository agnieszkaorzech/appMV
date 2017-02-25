/**
 * Created by Agnieszka on 23.02.2017.
 */
module.exports = function (app) {
    app.factory('bandList', function () {
        return [
            {name: 'Cinderella', formed: 1983},
            {name: 'Bon Jovi', formed: 1983}
        ]
    })
};
