import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Weather/>

      <View>
        {/* Navbar */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#EFEFEF'
  },
});
