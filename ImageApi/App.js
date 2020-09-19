import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
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

  deleteAddress(id) {
    alert(
      'Delete Information',
      'Are you sure want to delete this Information ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.deleteAddressDetail(id)},
      ],
      { cancelable: false }
    )
  }

  deleteAddressDetail(id) {
    setState((id)=>{
      return id.filter(users => users.id != id)
    })
  }

  render() {
    const { data, isLoading } = this.state;
    // const [users, setUsers] = useState();
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.body}>
              <View style={{flexDirection: 'row', }}>
                <Text style={styles.textDark}>Page Heading</Text>
                <Text style={styles.textLight}>Secondary Text</Text>
              </View>
              <ScrollView style={{marginBottom: 40}}>
              <View>
              {isLoading ? <ActivityIndicator/> : (
                <ScrollView>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                    <View style={{marginTop: 20}}>
                        <Image style={styles.image} source={{ uri: item.url }} />
                        <Text style={styles.static}>Project Name</Text>
                        <Text style={styles.name}>{item.title}</Text>
                        <TouchableOpacity onPress={() => this.deleteAddress(item.id)}>
                          <Image source={require('./src/delete.png')} style={{width: 20, height: 20, marginVertical: 2}} 
                            resizeMode="contain" />
                      </TouchableOpacity>
                    </View>
                    )}
                  />
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                    <View style={{marginTop: 20}}>
                      <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
                      <Text style={styles.static}>Project Name</Text>
                      <Text style={styles.name}>{item.title}</Text>
                      <TouchableOpacity onPress={() => this.deleteAddress(item.id)}>
                        <Image source={require('./src/delete.png')} style={{width: 20, height: 20, marginVertical: 2}} 
                          resizeMode="contain" />
                      </TouchableOpacity>
                    </View>
                    )}
                  />
                  
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                    <View style={{marginTop: 20}}>
                      <Image style={styles.image} source={{ uri: item.url }} />
                      <Text style={styles.static}>{item.albumId}</Text>
                      <Text style={styles.name}>{item.title}</Text>
                      <TouchableOpacity onPress={() => this.deleteAddress(item.id)}>
                          <Image source={require('./src/delete.png')} style={{width: 20, height: 20, marginVertical: 2}} 
                            resizeMode="contain" />
                      </TouchableOpacity>
                    </View>
                    )}
                  />
                  
                </ScrollView>
              )}
              </View>
              </ScrollView>
            </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: '10%',
    // flex: 1
  },
  textDark: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25
  },
  textLight: {
    fontSize: 12,
    lineHeight:30,
    marginLeft: 5
  },
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
  fontWeight: 'bold',
  width: '80%',
  fontSize: 14
}
});
