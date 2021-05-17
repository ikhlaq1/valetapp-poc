import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text , Input} from '@ui-kitten/components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { default as theme } from './theme.json';
import { Button, Icon } from '@ui-kitten/components';
import { AssetIconsPack } from './custom-icons'; 
import { Image,StyleSheet, View  } from 'react-native';
import { default as mapping } from './text.json';
export const LogoIcon = (props) => (
  <Icon {...props} name='logo' pack='assets' />
);

const HomeScreen = () => {

  return(
<Layout style={{flex: 1, alignItems: 'center'}}>
<Image style={{  width: wp('30'),
          height: hp('10'), marginVertical : hp('5')}}
          resizeMode={'contain'}
          source={require('./assets/icons/logo.png')}/>
      <Image
       style={{  width: wp('45'),
       height: hp('20'),
       marginBottom:30}}
       resizeMode={'contain'}
       source={require('./assets/images/bike.png')}/>
<Text style={{
        marginBottom:30,
        fontWeight:'400'
      }} category='h2' >Sign Up</Text>  
<View style={{marginHorizontal:wp('10')}}>
 
      <Input
      style={
        styles.inputField
      }
      placeholder='Enter Full Name'
      
    />
      <Input
      style={
        styles.inputField
      }
      placeholder='Organoisation ID'
      
    />
      <Input
     style={
      styles.inputField
    }
      placeholder='Password'
    />
      
</View>
    
       <Button 
       style={{width: wp('90'),
       marginBottom:8}}size='giant'>
      Proceed
    </Button>

    <View style={styles.row}>
      <Text style={styles.text} category='p2'>Already a member?</Text>
      <Text style={[styles.text,{color:theme['color-primary-900']}]} category='p1'>Sign In</Text>
    </View>

  </Layout>
  )
  
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    margin: 2,
  },

  inputField:{
    width:wp('90'),
    height:hp('9'),
    backgroundColor:'rgb(255,255,255)',
    borderColor:'rgb(255,255,255)',
    borderBottomColor:'#E6F2E7',
  },


});

export default () => (
  <>
  <IconRegistry icons={ AssetIconsPack}/>
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <HomeScreen />
  </ApplicationProvider>
  </>
);