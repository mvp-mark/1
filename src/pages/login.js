import React, { Component } from "react";
import { StyleSheet, View, StatusBar , Button} from "react-native";
import EdtUsername from "../components/login/EdtUsername";
import EdtPassword from "../components/login/EdtPassword";
import BtnLogin from "../components/login/BtnLogin";

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.materialMessageTextboxStack}>
        <EdtUsername style={styles.materialMessageTextbox}></EdtUsername>
        <EdtPassword style={styles.materialMessageTextbox1}></EdtPassword>
      </View>
      <BtnLogin style={styles.materialButtonViolet} 
          onPress={() => navigation.navigate('Home',{})}>
            
      </BtnLogin>
      <Button  title="Press me"
      onPress={() => navigation.navigate('Home')} 
      
      ></Button>
      <StatusBar
        animated={false}
        hidden={false}
        backgroundColor="rgba(63,81,181,1)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialMessageTextbox: {
    top: 0,
    left: 1,
    height: 86,
    position: "absolute",
    right: 1
  },
  materialMessageTextbox1: {
    top: 85,
    left: 0,
    height: 86,
    position: "absolute",
    right: 0
  },
  materialMessageTextboxStack: {
    height: 171,
    marginTop: 239,
    marginLeft: 15,
    marginRight: 13
  },
  materialButtonViolet: {
    height: 43,
    borderRadius: 46,
    marginTop: 32,
    marginLeft: 73,
    marginRight: 73
  }

});

export default Login;
