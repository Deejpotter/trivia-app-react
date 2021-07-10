import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    authenticate(callback) {
        netlifyIdentity.open();
        netlifyIdentity.on('login', user => {
            console.log('login', user)
            this.isAuthenticated = true;
            this.user = user;
            netlifyIdentity.refresh().then((jwt) => console.log(jwt))
            callback(user);
        });
    },
    signout(callback) {
        netlifyIdentity.logout();
        netlifyIdentity.on('logout', () => {
            this.isAuthenticated = false;
            this.user = null;
            callback();
        });
    }
};

export default netlifyAuth;