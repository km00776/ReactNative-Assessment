import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'


export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        dataSource: []
      }
  }

  componentDidMount() {
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then((response) => response.json()).then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
  }

  _renderItem = ({item , index}) => {
      return(
        <View style={styles.item}>
          <Text>Hello</Text>
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