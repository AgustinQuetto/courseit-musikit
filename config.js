const self = {
    client_id: "27cff9ed5a2d459d9c4cfbec446d1358",
    redirect_uri: "http%3A%2F%2Flocalhost%3A3000%2F",
    spotify_url: "https://api.spotify.com/v1"
};

self.spotifyAuth = `https://accounts.spotify.com/authorize?client_id=${self.client_id}&response_type=code&redirect_uri=${self.redirect_uri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`;

module.exports = self;
