
module.exports = function(app) {
    var everyauth = require('everyauth')
      , users = {};

    everyauth.debug = true;
    everyauth.github
        .appId(app.set('oauth.appId'))
        .appSecret(app.set('oauth.appSecret'))
        .entryPath('/auth/github')
        .callbackPath('/auth/github/callback')
        .scope('repo')
        .findOrCreateUser( function (sess, accessToken, accessTokenExtra, user) {
            if(!users[user.id]) {
                user.token = accessToken;
                users[user.id] = user;
            }
            return users[user.id];
        })
        .redirectPath('/');

    everyauth.everymodule.findUserById(function(userId, cb) {
        return cb(undefined, users[userId]);
    });

    return everyauth;
};
