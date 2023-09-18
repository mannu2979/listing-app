
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import ServiceList from './src/screens/ServiceList';
export default function App() {
  console.log('re')
  return (
      <SafeAreaView>
        <StatusBar backgroundColor='red' />
        <ServiceList />
      </SafeAreaView>
  );
}

