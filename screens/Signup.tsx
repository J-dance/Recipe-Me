import React from "react";
import Page from "../components/Page";
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
import PasswordInput from "../components/PasswordInput";

interface UserCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Signup",
  "loginNavigation"
>;

const Signup = ({ navigation, route }: Props) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UserCredentials>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSignup = handleSubmit((data): void => {
    console.log("Sign up by user:", data);
    // perform api call + sign up..
    navigation.navigate("Login");
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
                  message: "Username is required",
                },
                maxLength: {
                  value: 20,
                  message: "Username must be less than 20 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Enter your username.."
                />
              )}
            />

            <View style={styles.errorTextContainer}>
              {errors.username && (
                <Text style={styles.errorText}>{errors.username.message}</Text>
              )}
            </View>

            <Text style={styles.inputLabel}>Password</Text>

            <Controller
              control={control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
                maxLength: {
                  value: 25,
                  message: "Password must be less than 25 characters",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  onChange={onChange}
                  value={value}
                  placeholder="Enter your password.."
                />
              )}
            />

            <View style={styles.errorTextContainer}>
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>

            <Text style={styles.inputLabel}>Confirm password</Text>

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: {
                  value: true,
                  message: "Please confirm the password",
                },
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords do not match";
                  },
                },
              }}
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  onChange={onChange}
                  value={value}
                  placeholder="Confirm password.."
                />
              )}
            />

            <View style={styles.errorTextContainer}>
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>

            <Button
              color="#FFFFFF"
              title="Log in"
              onPress={handleSignup}
              accessibilityLabel="Confirm user credentials and log in to account"
            />
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
    marginTop: 20,
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
    marginTop: 8,
  },
  errorTextContainer: {
    minHeight: 30,
  },
  container: {
    flex: 1,
    width: "80%",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  btn: {
    color: "#FFFFFF",
    marginVertical: 10,
  },
});

export default Signup;
