import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';
// import ResultList from './src/ResultList';


export default class ResultDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                <View>
                    <Image style={styles.image} source={{ uri: item.url }} />
                    <Text style={styles.static}>Project Name</Text>
                    <Text style={styles.name}>{item.title}</Text>
                </View>
                )}
            />
        </View>
    );
  }
}; // hr.technorizen@gmail.com

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    static: {
        fontSize: 18,
        // marginHorizontal: 10,
        marginVertical: 3,
        color: 'blue'
    },
    name: {
        fontWeight: 'bold'
    }
});
