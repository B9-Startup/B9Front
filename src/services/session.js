import Cookie from 'js-cookie';

const session = function(){
    if(!Cookie.get('dBlock') && Cookie.get('verificacao') !== true){
       window.location.href = '/login';
    }
}

export default session;