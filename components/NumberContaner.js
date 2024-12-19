import {View, Text,StyleSheet, Dimensions} from 'react-native'
import { Colors } from '../utils/color'


const NumberContaner = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContaner

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        borderRadius:8,
        marginTop:deviceHeight < 800 ? 20 : 40,
        padding:deviceHeight < 800 ? 12 : 24,
        margin:deviceHeight < 800 ? 12 : 24,
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        color:Colors.accent500,
        // fontWeight:'bold',
        fontSize:deviceHeight < 800 ? 28 : 36,
        fontFamily:'open-sans-bold'
    }
})