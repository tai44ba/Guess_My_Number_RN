import {View, Text,StyleSheet} from 'react-native'
import { Colors } from '../utils/color'


const NumberContaner = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContaner

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        borderRadius:8,
        padding:24,
        margin:24,
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        color:Colors.accent500,
        fontWeight:'bold',
        fontSize:32
    }
})