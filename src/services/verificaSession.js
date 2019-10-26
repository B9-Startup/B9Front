import api from './api';
import Cookie from 'js-cookie';

const verificaSession = function(){
    async function chamaApi() {
        const id = Cookie.get('id');
        const chave = Cookie.get('dBlock')
        const response = await api.get(`/usuarios/${id}`, {
        })
    
        if (response && response.data) {
         response.data.find(function(){
             if(response.data[0].chave === chave){
                Cookie.set('verificacao', true, {expires: 1});
             } else {
                 Cookie.remove('dBlock');
                 Cookie.remove('id');
             }
         })
        }
    }
    chamaApi();
}

export default verificaSession;