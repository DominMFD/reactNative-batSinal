import { TouchableOpacity, Text, StyleSheet } from "react-native"


interface IBotao {
    title: string
    onPress: () => void
}

export const Botao = ({
    title,
    onPress
}: IBotao) => {

    return(
        <TouchableOpacity 
        style={styles.button}
        onPress={onPress}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({ 
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderRadius: 8,
        marginTop: 16,
        elevation: 5,
      }, 
      textButton: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: '800',
        paddingVertical: 5,
      },
})