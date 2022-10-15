import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import Focus from './src/features/Focus'
import colors from './src/utils/colors'
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Focus />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
})
