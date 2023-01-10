/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Dimensions,
} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const screenWidth = Dimensions.get('screen').width;

const App = () => {
  const data = {
    labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
    datasets: [
      {
        data: [8.2, 7, 6.5, 5.3, 5.2, 4, 4.6, 4.5, 4.2, 3.7],
      },
    ],
    legend: ['Per Captia Eatage of margarine'],
  };

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <LineChart
          data={data}
          width={screenWidth}
          height={250}
          bezier
          chartConfig={chartConfig}
        />
           <BarChart
          data={data}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
