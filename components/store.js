import {createStore} from 'redux'

//reducer para controlar do contador
function contadorReducer(state = 0,action){

  console.log(action.type)

  switch(action.type){

      case 'INCREMENTO':
        return state + 1
      case 'DECREMENTO':
        return state - 1
      case 'ZERAR':
        return state = 0
      default:
        return state
  }
}

//reducer para controle de dados de login
function loginReducer(state = {
              userName: '',
              token: ''
          },action){

      console.log(action.type)
      console.log(action.text)

      switch(action.type){
        case 'CHANGE_USER':
          state.userName = action.text
          return state;
        case 'CHANGE_TOKEN':
          state.token = action.text
          return state
        case 'RESET':
          state.userName = ''
          state.token = ''
          return state
        default:
          return state
      }
}

//cria store baseado em um reducer
let contadorStore = createStore(contadorReducer)
let loginStore = createStore(loginReducer)

export{
  contadorStore,loginStore
}
