import { Dimensions, ScrollView, StyleSheet, View, Image } from 'react-native';
import { Botao } from './src/components/Button';
import { useState } from 'react';
import { Form } from './src/components/Form';

const { width, height} = Dimensions.get("window");


export default function App() {

  const [formScreen, setFormScreen] = useState<boolean>(false)

  if(formScreen) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require('./assets/batLogo.png')} 
          style={styles.image}/>
        </View>
        <Form />
        <View style={styles.buttonContainer}>
          <Botao 
          title='Enviar'
          onPress={() => setFormScreen(false)}/>
        </View>
        
      </View>
    </ScrollView>
    )
  }

  return (
    <View style={styles.mainContainer}>
        <View>
          <Image source={require('./assets/batLogo.png')} />
        </View>
          <Botao 
          title='Ativar Bat Sinal'
          onPress={() => setFormScreen(true)}/>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 25,
    height: height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: height
  },
  image: {
    width: 100,
    height:100,
    marginTop: 20,
    objectFit: 'contain',
  },
  buttonContainer: {
    width: width,
    paddingHorizontal: 25,
  }
});
