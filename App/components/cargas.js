import React from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet,Button,ImageBackground} from 'react-native';

const cargas = [
    {
        id: '1',
        title: 'First Item',
        descripcion: '----------Text1----------',
    },
    {
        id: '2',
        title: 'Second Item',
        descripcion: '----------Text2----------',
    },
    {
        id: '3',
        title: 'Third Item',
        descripcion: '----------Text3----------',
    },
    {
        id: '4',
        title: 'Third Item',
        descripcion: '----------Text3----------',
    },
    {
        id: '5',
        title: 'Third Item',
        descripcion: '----------Text3----------',
    },
    {
        id: '6',
        title: 'Third Item',
        descripcion: '----------Text3----------',
    },
    {
        id: '7',
        title: 'Third Item',
        descripcion: '----------Text3----------',
    }
];

function Item ({item}) {
    return (
        <View style = {styles.item}>
            <View style={{flexDirection:"column"}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.id}>{item.descripcion}</Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
                <TouchableOpacity>
                    <Text style={styles.opciones}>...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const ListEmpty = () => {
    return (
        <View style={styles.item}>
            <Text style={{textAlign: 'center'}}>Sin cargas publicadas</Text>
        </View>
    );
};

export default function Cargas(){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../images/background.jpg')}
            style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
              }}>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={cargas}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity>
                                <Item item={item}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={ListEmpty}
                />
            </View>
            <Button title='Publicar'/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    flatListContainer: {
        backgroundColor:'white',
        margin:15,
        borderRadius: 20/2,
        height: '70%',
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 20,
    },
    title: {
        fontSize: 25,
    },
    opciones: {
        textAlign: 'right',
        fontSize: 20,
    }
});