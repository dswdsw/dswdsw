import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CellItem = memo(({
  imageSource,
  title,
  subtitle,
  isChecked = false,
  onCheckChange,
  onPress,
  showArrow = true
}) => {
  console.log('Rendering CellItem:', title); // 用于调试，查看是否触发多次渲染

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Switch
        value={isChecked}
        onValueChange={onCheckChange}
        style={styles.switch}
      />

      {showArrow && <Icon name="angle-right" size={24} color="#aaa" />}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  switch: {
    marginRight: 10,
  },
});

export default CellItem;
