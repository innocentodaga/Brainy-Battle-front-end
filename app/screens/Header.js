import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView>
            <View style={styles.upperHeaderPlaceholder} />
        </SafeAreaView>
        <SafeAreaView style={styles.header}>
            <View style={styles.upperHeader}>
            <View style={styles.searchContainer}>
                <Image
                source={require('../../assets/search-icon-png-9969.png')}
                style={[styles.icon16, { marginLeft: 8 }]}
                />
                <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                style={styles.searchInput}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                source={require('../../assets/profile.png')}
                style={styles.avatar}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.lowerHeader}>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/award.png')}
                style={styles.featureIcon}
                />
                <Image
                source={require('../../assets/calculator.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Enjoy
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/search-icon-png-9969.png')}
                style={styles.featureIcon}
                />
                <Image
                source={require('../../assets/calculator.png')}
                style={styles.icon32}
                />
                <Text style={[styles.featureName, featureNameAnimation]}>
                Learn
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/brain.jpg')}
                style={styles.featureIcon}
                />
                <Image
                source={require('../../assets/greetings.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Play
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/award.png')}
                style={styles.featureIcon}
                />
                <Image
                source={require('../../assets/search-icon-png-9969.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Have Fun
                </Text>
            </View>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default Header