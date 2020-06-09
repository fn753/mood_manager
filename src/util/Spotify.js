let accessToken;
const clientId = '3dbd2ad35ee14d828a66300875a42e8b';
const redirectUri = 'http://localhost:3000/';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }; 

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

    },

    searchPlaylists(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/browse/categories/${term}/playlists?limit=5`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.playlists) {
                return [];
            }
            return jsonResponse.playlists.items.map(playlist => ({
                id: playlist.id,
                name: playlist.name,
                uri: playlist.uri
            }))
        })
    },

   getCategoryList() {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/browse/categories?limit=50`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            let categories = [];
            jsonResponse.categories.items.map(category => categories.push(category.id, category.name));
            return console.log(categories);
        })
    }
};

export default Spotify;