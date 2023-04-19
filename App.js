import * as React from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

export default function App() {
const [mensagem, setMensagem] = React.useState(''); // Define o estado da mensagem vazia

const fisico = () => {
setMensagem('Flexões: Coloque as mãos no chão, na altura dos ombros, afastadas na largura dos ombros. Abaixe o corpo até que o peito toque o chão e, em seguida, empurre-o para cima até que os braços estejam completamente estendidos. Faça 3 séries de 10 repetições.\n\n\nAgachamentos: Fique em pé com os pés afastados na largura dos ombros e as mãos nos quadris. Dobre os joelhos e abaixe o corpo até que as coxas fiquem paralelas ao chão. Em seguida, levante-se novamente. Faça 3 séries de 15 repetições.\n\n\nPrancha: Deite-se de bruços e levante o corpo com os antebraços apoiados no chão. Mantenha as pernas estendidas e as costas retas. Fique nessa posição por 30 segundos e, em seguida, descanse por 30 segundos. Repita 3 vezes.\n'); // Atualiza a mensagem com o novo valor
}

const meditar = () => {
setMensagem('Coloque-se em uma posição confortável, sentado ou deitado. Feche os olhos e comece a respirar profundamente, inspirando pelo nariz e expirando pela boca. Concentre-se na sua respiração e tente deixar todos os seus pensamentos de lado. Se você perceber que sua mente está divagando, gentilmente volte sua atenção para a sua respiração. Continue a meditar pelo tempo que desejar. Quando estiver pronto, abra os olhos e retome suas atividades.');
}

const respiracao = () => {
setMensagem('Sente-se em um lugar tranquilo e confortável. Feche os olhos e comece a respirar profundamente pelo nariz, enchendo os pulmões de ar. Em seguida, expire lentamente pelo nariz, soltando todo o ar dos pulmões. Repita o processo por alguns minutos, concentrando-se na sua respiração e deixando seus pensamentos fluírem sem julgá-los.');
}

return (

<ScrollView>  
  <View>
    <View style={styles.header}>
      <Text style={styles.paragraph}>
        Relaxing
        <Entypo name="star" size={24} color="black" />
      </Text>
    </View>  

    <View style={styles.body}>
      <Button 
        title='Exércicios Físicos'
        onPress={fisico}
      />
    </View>
    
    <View style={styles.body}>
      <Button 
        title='Meditação Guiada' 
        onPress={meditar} 
        />
    </View>

    <View style={styles.body}>
      <Button 
      title='Respiração Relaxante'
      onPress={respiracao}
      />
    </View>

    <View style={styles.body}>
      {mensagem.split('\n\n').map((paragrafo, index) => (
        <Text key={index}>{paragrafo}</Text>
      ))}
    </View>

  </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
width: '100%',
justifyContent: 'flex-start',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#ecf0f1',
paddingLeft: 8,
paddingRight: 8,
},

header: {
backgroundColor: 'yellow',
marginBottom: 20,
},

paragraph: {
fontFamily: 'arial',
margin: 24,
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
},

body: {
backgroundColor: 'orange',
marginLeft: 10,
marginRight: 10,
marginTop: 10,
marginBottom: 10,
},

});