import { Dimensions, TextInput, View, Text, StyleSheet } from "react-native"

const { width, height} = Dimensions.get("window");



export const Form = () => {

    return (
      <>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome</Text>
          <TextInput placeholder="Digite seu nome" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Telefone</Text>
          <TextInput placeholder="Digite seu telefone" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Localização</Text>
          <TextInput
            placeholder="Digite sua Localização"
            style={[styles.input, { textAlignVertical: "top" }]}
            editable
            multiline
            numberOfLines={8}
            maxLength={40}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Observações</Text>
          <TextInput
            placeholder="Digite suas observações"
            style={[styles.input, { textAlignVertical: "top" }]}
            editable
            multiline
            numberOfLines={8}
            maxLength={40}
          />
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: width,
        paddingHorizontal: 25,
        marginBottom: 16,
      },
      input: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 8,
        padding: 5,
      },
      inputLabel: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 2,
        fontStyle: 'italic'
      },
})

