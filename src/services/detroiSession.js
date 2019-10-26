import Cookie from 'js-cookie';

const destroiSession = function(){
    Cookie.remove('dBlock');
    Cookie.remove('id');
    Cookie.remove('verificacao');
    window.location.href = '/login';
}

export default destroiSession