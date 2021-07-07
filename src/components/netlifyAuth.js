import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    authenticate(callback) {
        this.isAuthenticated = true;
        netlifyIdentity.open();
        netlifyIdentity.on('login', user => {
            console.log('login', user)
            this.user = user;
            netlifyIdentity.refresh().then((jwt) => console.log(jwt))
            callback(user);
        });
    },
    signout(callback) {
        this.isAuthenticated = false;
        netlifyIdentity.logout();
        netlifyIdentity.on('logout', () => {
            this.user = null;
            callback();
        });
    }
};

export default netlifyAuth;