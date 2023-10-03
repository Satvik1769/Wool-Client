import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable} from "react-native"
import { useState } from "react";

export default function Login({ navigation }){
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
            </View>
            <View style={{width:"100%",display:"flex",}}>
            <Pressable style={styles.button}>
                <Text style={{color:"#fff"}}>Login</Text>
            </Pressable>

            </View>
        
            </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container :{
        display: "flex",
  
        justifyContent:"center",
        height: '100%'
    },
    text:{
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        marginLeft:10,
        marginBottom:10
    },
    label:{
      fontSize:25
    },
    input:{
        width:'60%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        width:"15%",
        height:21,
        justifyContent:"center",
        backgroundColor:"blue"
    }

})
