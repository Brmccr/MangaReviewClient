let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        // local host name of API 
        APIURL = 'http://localhost:3000';
        break;
        // deployed version of react app
        case 'bfm-mangareview-client.herokuapp.com':
            // full URL from heroku will be from the server settings
            APIURL ="https://bfm-mangareview-server.herokuapp.com"
}

export default APIURL;