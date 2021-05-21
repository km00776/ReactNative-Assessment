import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'
import { Linking} from 'react-native'
import getApi from './api/demoAPI';


export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        dataSource: []
      }
  }
  /**
   * obtain data and place it in dataSource array
   */

  async componentDidMount() {
    try {
        this.setState({
            dataSource: await getApi()
        })
    }
    catch(error) {
      console.error(error);  
    }
  }
  /**
   * 
   * if 'full_name' is clicked open the relative img 
   *
   */
  _renderItem = ({item , index}) => {
      return(
        <View style={styles.item}>
          <Text onPress={() => { Linking.openURL(item['img_src'])}}>{item.camera['full_name']}</Text>
        </View>
      )
  }

  render() {
    let {container} = styles
    let {dataSource, isLoading} = this.state;
    return (
      <View style={container}>
          <FlatList
              data= {dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
          />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
})



