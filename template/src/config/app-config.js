import API from './api';

const ENV = 'dev';
const protocolReg = /^(https?:)?\/\//i;
const APP = require(`./env/${ ENV }`);

const App = Object.assign({

    webServiceUrls: API,
    getWebServiceUrl: function(name, host){
        let APINAME = App.webServiceUrls[name];
        return protocolReg.test(APINAME) ? APINAME : App.getHosts((host || App.ServerHost) + APINAME + (App.apiSuffix || ''));
    },
    getHosts: function(page){
        if(protocolReg.test(page) || /^\.+\//.test(page)) return page;
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + (page ? '/' + page : '');
    }

}, APP);

export default App;
