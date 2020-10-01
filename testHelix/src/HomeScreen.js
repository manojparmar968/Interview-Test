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
// import {loadCustomers} from '../src/actions/customer';
// import {useSelector, useDispatch} from 'react-redux';
// import Pdf from 'react-native-pdf';

const DATA = [
    {
      id: 1,
      name: 'Sanjay',
      money: '123',
    }
]


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
    }
    
    componentDidMount() {
    fetch('http://helixsmartlabs.in/app/dashboard/fetch.php?tno=1')
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
            <>
                <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View style={styles.container}>
              
              <ScrollView style={{marginTop: 20}} >
              <View>
              {isLoading ? <ActivityIndicator/> : (
                
                  <FlatList
                    horizontal = {false}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    // keyExtractor={({ id }, index) => id.toString()}
                    keyExtractor={({ id }, index) => index.toString()}
                    // keyExtractor={(data) => data}
                    renderItem={({item}) => (
                        <View 
                            style={{
                                // flexDirection: 'row',
                                // height: 65,
                                // padding: 10,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: '#A9A9A9',
                                borderBottomWidth: 1,
                            }}
                        >
                            {/* <ScrollView> */}
                                <Text
                                    style={{
                                        // flex: 5,
                                        marginLeft: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 10
                                    }}
                                >
                                    {item.doc_id} {"\n"}
                                </Text>
                                <Text
                                    style={{
                                        // flex: 5,
                                        marginLeft: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 10
                                    }}
                                >
                                    {item.name} {"\n"}
                                </Text>
                                <TouchableOpacity>
                                    <Text>{item.url}{"\n"}</Text>
                                </TouchableOpacity>
                            {/* </ScrollView> */}
                            
                        </View>
                    )}
                  />
                
              )}
              </View>
              </ScrollView>
              <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Details')}
                    style={{marginTop: 20}}
                >
                    <Text>Navigation to another screen</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        marginLeft: 10
    },
    
     
});
