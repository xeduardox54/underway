import React from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native';

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

export default function Cargas(){
    return(
        <View style={styles.container}>
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
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
    },
    opciones: {
        textAlign: 'right',
        fontSize: 20,
    }
});