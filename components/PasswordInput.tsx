import React, { useState, FocusEvent } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

interface PasswordInputProps {
  onChange: (value: string) => void,
  value: string,
  placeholder: string
};

const PasswordInput = ({ onChange, value, placeholder}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.pwdInputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChange(value)}
        value={value}
        secureTextEntry={!showPassword}
        placeholder={placeholder}
      />
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {
            showPassword ? <Ionicons name="eye" color="#353535" size={20} /> : <Ionicons name="eye-off" color="#353535" size={20} />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  pwdInputContainer: {
    position: "relative"
  },
  input: {
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 20,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    color: "#353535"
  },
  icon: {
    position: "absolute",
    right: 4,
    top: 15
  }
});

export default PasswordInput