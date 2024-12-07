import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item = ({ 
  imageSource, 
  text, 
  imageStyle, 
  textStyle, 
  containerStyle, 
  imagePosition = 'bottom' // 默认设置图片在底部
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* 主体内容，可以自定义其他部分 */}
      
      {imagePosition === 'bottom' && (
        <View style={styles.bottomContainer}>
          {imageSource && <Image source={imageSource} style={[styles.image, imageStyle]} />}
          {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
        </View>
      )}

      {imagePosition === 'right' && (
        <View style={styles.rightContainer}>
          {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
          {imageSource && <Image source={imageSource} style={[styles.image, imageStyle]} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default Item;
