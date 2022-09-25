import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';


export default function Home() {

  function handleParticipantAdd() {
    console.log("Adicionou");
  }

  function handleParticipantRemove (name: String) {
    console.log(`Removeu ${name}`);
  }

  const participants = ["Rhodrigo","Rhoger","Rhonaldo","Rhomer", "Jake","Billy","Marta","Klark","Karl","Tommy",];

  return <View style={styles.container}>
    <Text style={styles.eventName}>
      Nome do evento
    </Text>

    <Text style={styles.eventData}>
      Recife, 4 de novembro de 2022
    </Text>


    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholder="Seu nome aqui"
        placeholderTextColor={'gray'}
      //keyboardType = 'numeric'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>


    <ScrollView showsVerticalScrollIndicator={false}>
      {
      participants.map(participant => (
        <Participant 
        key={participant}
        name={participant} 
        onRemove={()=> handleParticipantRemove(participant)}/>
      ))
    }
    </ScrollView>
    
  </View>


} 