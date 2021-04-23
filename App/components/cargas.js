import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Button,
    ImageBackground,
} from 'react-native';
import Perfil from './perfil';
import { useListCargas } from '../hooks/useListCargas';

function Item({ item }) {
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.title}>{item.destino}</Text>
                <Text style={styles.id}>{item.material}</Text>
                <Text style={styles.id}>{item.precio}</Text>
            </View>
            <View style={{ marginLeft: 'auto' }}>
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
            <Text style={{ textAlign: 'center' }}>Sin cargas publicadas</Text>
        </View>
    );
};

export default function Cargas({ navigation }) {
    const datos = useListCargas([
        {
            destino: 'Arequipa',
            dni: '76394311',
            material: 'Origamis',
            precio: '150',
            ubicacion: 'Lima',
        },
    ]);
    console.log(datos.value);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../images/background.jpg')}
                style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                }}>
                <Perfil />
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={datos.value}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Item item={item} />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={ListEmpty}
                    />
                </View>
                <Button
                    title="Publicar"
                    onPress={() => navigation.navigate('Formulario', { datos: datos })}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContainer: {
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 20 / 2,
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
    },
});
