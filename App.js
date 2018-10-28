import React , {Component} from "react";
import {View,Text,StyleSheet}from "react-native";
import {Table,Row,Rows} from "react-native-table-component";

export default class App extends Component {
  constructor(props){
  super(props);
  this.state={
tableHead:["Name","Last Name"],
tableData:[
  ["Hadi","Habibi"],
  ["Peyman","Ghazvini"]
    ]
 }
}
render(){
  const state = this.state;
  return(
      <View style={styles.container}>
      <Text style={styles.title}>Table</Text>
          <Table borderStyle={{borderWidth:2,borderColor:'#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text1} />
              <Rows data={state.tableData} style={styles.head} textStyle={styles.text2}/>
          </Table>
       </View>
 );
}
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#c8e1ff',
  padding:20,
  justifyContent:"center"
  
},
head:{
  height:35,
  backgroundColor: 'skyblue',
  borderRadius:40,
},
text1:{
  padding:10,
  color:"#56585D"
},
text2:{
  padding:10,
  color:"#8C8F9D"
},
title:{
  color:"steelblue",
  fontSize:30,
  textAlign:"center",
  paddingBottom:30
}
});
