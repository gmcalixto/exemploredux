import React,{Component,useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


//importação da store criada
import {contadorStore,loginStore} from './components/store';

//função que encapsula ação de troca de usuário
function changeUserDispatch(text){
  const action = {
    type: 'CHANGE_USER',
    text
  }
  loginStore.dispatch(action)
}

//fuunção que encapsula ação de troca de token
function changeTokenDispatch(text){
  const action = {
    type: 'CHANGE_TOKEN',
    text
  }
  loginStore.dispatch(action)
}

//função que dispara a ação de reset no login
function resetLogin(){
  loginStore.dispatch({type: 'RESET'})
}

function simulaLogin(){
  changeUserDispatch('calixto@fiap.com.br')
  changeTokenDispatch('meutoken1234')
}


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      contador: 0,
      username: '',
      token: ''
    }
  }

  render(){

      contadorStore.subscribe(() => this.setState({contador: contadorStore.getState()}))
      loginStore.subscribe(() => {
        this.setState({username: loginStore.getState().userName})
        this.setState({token: loginStore.getState().token})
      })

      return (
      <View style={styles.container}>

        <Text style={styles.paragraph}>
          Teste com Redux
        </Text>
        <Text style={styles.paragraph}>Counter: {this.state.contador}</Text>
        <Button title='Incrementar' onPress={() => contadorStore.dispatch({type: 'INCREMENTO'})}/>
        <Button title='Decrementar' onPress={() => contadorStore.dispatch({type: 'DECREMENTO'})}/>
        <Button title='Zerar' onPress={() => contadorStore.dispatch({type: 'ZERAR'})}/>

        <Text style={styles.paragraph}>Usuário: {this.state.username}</Text>
        <Text style={styles.paragraph}>Token: {this.state.token}</Text>
        <Button title='login' onPress={() => simulaLogin()}/>
        <Button title='logout' onPress={() => resetLogin()}/>


      </View>
    );
    }
  } export default App;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
