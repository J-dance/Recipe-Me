import React, { FC } from "react";
import Page from "../components/Page";
import { useUserContext } from "../assets/context";
import { RootStackParamList } from "../components/LoginNavigator";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Button,
  TouchableOpacity
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import PasswordInput from "../components/PasswordInput";

interface UserCredentials {
  username: string;
  password: string;
}

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Login",
  "loginNavigation"
>;

const Login = ({ navigation, route }: Props) => {
  const { setUserData } = useUserContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSignIn = handleSubmit((data): void => {
    console.log('login by user:', data);
    // perform api call + verification..

    setUserData({
      name: data.username,
      id: '',
      authenticated: true,  // state change redirects automatically
      recipes: []
    });
  });

  return (
    <Page>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.inputLabel}>Username</Text>
            <Controller
              control={control}
              name="username"
              rules={{
                required: {
                  value: true,
                  message: "Username is required"
                },
                maxLength: {
                  value: 20,
                  message: "Username must be less than 20 characters"
                },
              }}
              render={({field: { onChange, onBlur, value }}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Enter your username.."
                />
              )}
            />

            <View style={styles.errorTextContainer}>
              {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
            </View>
            <Text style={styles.inputLabel}>Password</Text>

          

            <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Password is required"
                },
                maxLength: {
                  value: 25,
                  message: "Password must be less than 25 characters"
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              }}
              render={({field: { onChange, onBlur, value }}) => (
                <PasswordInput
                  onChange={onChange}
                  value={value}
                  placeholder="Enter your password.."
                />
              )}
            />
                    
            <View style={styles.errorTextContainer}>
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>

            <Button color="#FFFFFF" title="Log in" onPress={handleSignIn} accessibilityLabel="Confirm user credentials and log in to account" />

            <View style={styles.btn2Container}>
              <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("Signup")}>
                <Text style={{color: "#FF9000"}}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Page>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 40,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    color: "#353535",
  },
  errorText: {
    color: "#D44D5C",
    marginTop: 8
  },
  errorTextContainer: {
    minHeight: 30
  },
  container: {
    flex: 1,
    width: "80%",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    position: "relative"
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btn: {
    color: "#FFFFFF",
    marginVertical: 10
  },
  btn2Container: {
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    marginHorizontal: "auto",
  },
  btn2: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 2
  }
});

export default Login;
