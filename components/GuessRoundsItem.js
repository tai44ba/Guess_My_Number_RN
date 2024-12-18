import { View, Text, StyleSheet, } from "react-native"
import { Colors } from "../utils/color"

const GuessRoundsItem = ({guess,roundsNum}) => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.itemText}>#{roundsNum}</Text>
        <Text style={styles.itemText}>Opponent's Guess:{guess}</Text>
    </View>
  )
}

export default GuessRoundsItem

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        borderColor:Colors.primary800,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:0},
        shadowRadius:3
    },
    itemText:{
        fontFamily:'open-sans'
    }
})