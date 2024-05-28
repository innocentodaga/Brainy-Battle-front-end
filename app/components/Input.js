import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import COLORS from './Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({label, iconName, error, password, onChangeText, onFocus = () => {}, ...props}) => {

    const [isFocused, setIsFocused] = React.useState(false);
    const [hidepassword, setHidepassword] = React.useState(password);

    return (
        <View style={{marginBottom: 10}}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer, {borderColor: error ? COLORS.red: isFocused ? COLORS.darkBlue:COLORS.light}]}>
                <Icon name={iconName} style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10, marginLeft: 10}}/>
                <TextInput
                    secureTextEntry={hidepassword}
                    autoCorrect={false}
                    onFocus={()=>{
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={()=>{
                        setIsFocused(false);
                    }}
                    style={{color: COLORS.darkBlue, flex: 1, height: '100%'}}
                    onChangeText={onChangeText}
                    {...props}/>
                {password && (
                <Icon
                    name={hidepassword?'eye-outline':'eye-off-outline'}
                    style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10}}
                    onPress={()=>{setHidepassword(!hidepassword);}}
                    />)
                    }
            </View>
            {error && <Text style={{marginTop: 5, color: COLORS.red}}>{error}</Text>}
        </View>
    );
}

const style = StyleSheet.create({
    label: {
        color: COLORS.grey,
        fontSize: 14,
        marginVertical: 5
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,
    }
});

export default Input;