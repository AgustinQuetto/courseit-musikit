const self = {
    client_id: "27cff9ed5a2d459d9c4cfbec446d1358",
    client_secret: "614cf8ddda704b2ca110ba42fdfa6d08",
    redirect_uri: "http%3A%2F%2Flocalhost%3A3000%2F"
};

self.spotifyAuth = `https://accounts.spotify.com/authorize?client_id=${self.client_id}&response_type=code&redirect_uri=${self.redirect_uri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`;

module.exports = self;
