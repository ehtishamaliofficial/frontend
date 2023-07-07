import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Button } from 'react-native'
import { useState } from 'react';




export default function UpdateStatus() {
    return (
        <SafeAreaView>
            <ScrollView style={{ paddingVertical: 20 }}>
                <Text style={styles.heading}>Status</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>Status</Text>
                    <TextInput style={styles.input} placeholder='Status' />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput textAlignVertical='top' style={styles.descriptionInput} multiline placeholder='Product Description' />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Update Status' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: '#000'
    },
    container: {
        width: "80%",
        marginHorizontal: "10%",
        paddingVertical: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,

    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        width: "100%",
    },
    imageContainer: {
        position: "relative",
        width: "80%",
        height: 100,
        marginHorizontal: "10%",
    },
    image: {
        width: "50%",
        height: 100,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: "25%"
    },
    buttonContainer: {
        width: "80%",
        height: 100,
        marginHorizontal: "10%",
        paddingVertical: 10
    },
    descriptionInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        width: "100%",
        height: 150
    }
})
