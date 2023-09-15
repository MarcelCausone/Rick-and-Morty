// se inicia la store , esta configuracion es siempre la misma
import {applyMiddleware, createStore,compose} from "redux"
import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"

const composeEnhancer = window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// esta linea sirve para conectar nuestra app con la 
//extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//esta linea sirva
    //para que podamos hacer peticiones a una api/servidor
    );

export default store;