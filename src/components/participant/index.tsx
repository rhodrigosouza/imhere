import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';


type Props = {
  name: String;
  onRemove: () => void;
}



export function Participant({name, onRemove}: Props) {
  // export function Participant(jungle: Props)
  // {jungle.name}
  return (<View style={styles.container}>

    <View style={styles.nameBox}>
    <Text style={styles.text}>
      {name}
    </Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={onRemove}>
      <Text style={styles.textButton}>
        -
      </Text>
    </TouchableOpacity>
  </View>
  )
}