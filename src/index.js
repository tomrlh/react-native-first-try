import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Avatar } from 'react-native-elements'
import api from './services/api'

// not have semantic value
// not have styles
// all elements have "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1...h6

export default function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('images/search').then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])
    return (
        <>
            <View style={styles.container}>
                <Avatar rounded size="xlarge" source={{uri: projects[0].url}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }
})