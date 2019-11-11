const Axios = require("axios");
const querystring = require("querystring");

class SpotifyController {
    constructor(clientId, secretId) {
        this.clientId = clientId;
        this.secretId = secretId;
    }

    async login(code) {
        const spotifyUrl = "https://accounts.spotify.com/api/token";

        const params = {
            headers: {
                Authorization:
                    "Basic " +
                    new Buffer(`${this.clientId}:${this.secretId}`).toString(
                        "base64"
                    ),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        try {
            const login = await Axios.post(
                spotifyUrl,
                querystring.stringify({
                    grant_type: "authorization_code",
                    redirect_uri: "http://localhost:3000/app",
                    code: code
                }),
                params
            );
            return login.data;
        } catch (e) {
            console.log(e);
            return { error: "spotify login error" };
        }
    }
}

module.exports = SpotifyController;
