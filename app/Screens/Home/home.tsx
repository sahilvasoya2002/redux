import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const comments = [
  {
    id: '1',
    name: 'Jonathan Cooper',
    date: '02 Nov 2022, 4:18 PM',
    message:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    liked: true,
  },
  {
    id: '2',
    name: 'Julian Wan',
    date: '02 Nov 2022, 5:00 PM',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    liked: false,
  },
];

const CommentItem = ({ item }: { item: typeof comments[0] }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>{item.date}</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Image source={require('../../Assets/Images/delete.png')} style={{height:17 , width:15}}  />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 8, fontSize: 14 }}>{item.message}</Text>
      <TouchableOpacity style={{ marginTop: 8 }}>
        <Image source={require('../../Assets/Images/like.png')} style={{height:20 , width:21}}  />
      </TouchableOpacity>
    </View>
  );
};

const Home = ({navigation}:any) => {

  useEffect(() => {
    navigation.setOptions({
      title: "Home",
      navigation: navigation,
      headerLeft: () => <View></View>,
      headerRight: () => (
        <TouchableOpacity onPress={()=>{}}>
            <Image
              source={require('../../Assets/Images/delete.png')}
              resizeMode={"contain"}
              style={styles.logo}
            />
        </TouchableOpacity>
      ),
      headerStyle: [styles.headerStyle],
    });
  });
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CommentItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor:'white'
  },
  logo: {
    height: 30,
    width: 30,
    // backgroundColor: Colors.BLUE,
    marginHorizontal: 10,
  },
})

export default Home;


