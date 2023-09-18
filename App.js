
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import ServiceList from './src/screens/ServiceList';
export default function App() {
  return (
      <SafeAreaView>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
        <ServiceList />
      </SafeAreaView>
  );
}

