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
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";

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
  }); // handleSubmit calls validation, then runs callback

  const handleSignIn = handleSubmit((data): void => {
    console.log(data);
  });

  // const onChange = (arg: any)  => {
  //   console.log(arg)
  //   console.log(typeof arg)
  //   return {
  //     value: arg.nativeEvent.text,
  //   };
  // };

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

            {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

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
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  secureTextEntry={true}
                  placeholder="Enter your password.."
                />
              )}
            />
        
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            <Button color="#FFFFFF" title="Log in" onPress={handleSignIn} />
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
    marginTop: 50,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    color: "#353535",
  },
  errorText: {
    color: "#D44D5C",
    marginTop: 8
  },
  container: {
    flex: 1,
    width: "80%",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btn: {
    color: "#FFFFFF",
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default Login;
