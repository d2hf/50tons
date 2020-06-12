import React, { useState} from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Header, Card, Button, Text, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Carousel from 'react-native-snap-carousel';

export default function App() {

  const [ activeIndex, setActiveIndex ] = useState(0)

  const carouselItens = [
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
  ]

  
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
  return (

    <View style={{ flex: 1, flexGrow:1, flexDirection:'row', alignItems: 'center',
     justifyContent: 'center'}}>

    <Overlay
        isVisible={visible}>

          <View style={{height: 500, width: 300, flexDirection:'column', alignItems: 'center',
          justifyContent: 'spaceBetween'}}>

              <View style={{paddingBottom: 20, paddingTop: 20}}> 
                <Text h4>50 tons de Willian</Text>
              </View>

              <View style={{paddingBottom: 20}}> 
                <Text>Olá, seja bem-vindo!</Text>
              </View>

              <Text style={{textAlign: 'center', paddingBottom:5}}>
              Você está prestes a conhecer as mil faces de um homem, esse que é misterioso,
              sexy, fofo e ruim de Counter Strike!
              </Text>

              <Text style={{paddingBottom: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Esse homem é Willian Xiter Ricardo.
              </Text>

              <Image
                source={require('./img/cover.jpg')}
                style={{ width: 200,
                        height: 200,
                        paddingBottom: 20, }}
              />

              <Button
                style={{ paddingTop: 30}}
              icon= {
                      <Icon
                        name="bolt"
                        size={20}
                        color="white"
                      />
                      }
              title="Conheça esse noia   "
              iconRight
              onPress={toggleOverlay} />

          </View>
    </Overlay>

      <Header
        leftCopmonents={{ icon: 'menu', color: '#000' }}
        centerComponent={{ text: '50 Tons de Willian', style: {color: '#000'} }}
        rightComponent={{ icon: 'home', color: '#999' }}
        containerStyle={{
          backgroundColor: '#fff',
        }}
      />
      
      <Carousel
        layout={"default"}
        ref={ref => this.carousel = ref}
        data={carouselItens}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem = { index => setActiveIndex(index) } />
    </View>

  );
}

function _renderItem({item,index}){
  return (
    <Card
    image={require('./img/img-1.jpg')}
    imageStyle={{height: 300}}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
  </Card>

  )
}