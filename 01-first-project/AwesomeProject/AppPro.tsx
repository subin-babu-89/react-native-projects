import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
} from "react-native";

function AppPro() {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    }
})

export default AppPro;