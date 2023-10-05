import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";

export default function Signup({navigation}){
    const [username, setUsername] = useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    function login(){
        navigation.navigate("Login")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} value={username} onChangeText={setUsername}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
            </View>
            <View style={{width:"100%",display:"flex",alignItems:"center",marginBottom:10}}>
            <Button title="Sign Up " variant="contained"  />
            </View>
            <Pressable onPress={login}>
                <View style={{width: "100%",justifyContent:"center", display:"flex", flexDirection:"row"}}>
                <Text>Already a member?</Text>
            <Text style={{color:"blue"}}>Login</Text>
                </View>
 
           </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
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
            marginBottom:10,
            justifyContent:"center"
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
          }
    }
);

