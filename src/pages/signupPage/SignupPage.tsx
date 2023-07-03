import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import themes from "../../themes/themes.module.scss";
import "./SignupPage.scss";
import {
  Button,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async () => {};

  return (
    <Box className="signupPage">
      <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
        <Text color={themes.white}>First Name</Text>
        <Box mb={6}>
          <Input
            type="text"
            size={"lg"}
            color={themes.white}
            placeholder="Firstname"
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && (
            <Text color={themes.accentError}>Field is Required</Text>
          )}
        </Box>
        <Text color={themes.white}>Last Name</Text>
        <Box mb={6}>
          <Input
            type="text"
            size={"lg"}
            color={themes.white}
            placeholder="Lastname"
            {...register("lastName", { required: true })}
          />
          {errors.lastName?.type === "required" && (
            <Text color={themes.accentError}>Field is Required</Text>
          )}
        </Box>
        <Text color={themes.white}>Email</Text>
        <Box mb={6}>
          <Input
            type="email"
            size={"lg"}
            color={themes.white}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <Text color={themes.accentError}>Field is Required</Text>
          )}
        </Box>
        <Text color={themes.white}>Username</Text>
        <Box mb={6}>
          <InputGroup>
            <Input
              type="text"
              size={"lg"}
              color={themes.white}
              placeholder="Username"
              {...register("userName", { required: true })}
            />
          </InputGroup>
          {errors.userName?.type === "required" && (
            <Text color={themes.accentError}>Field is Required</Text>
          )}
        </Box>
        <Text color={themes.white}>Password</Text>
        <Box mb={6}>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              size={"lg"}
              color={themes.white}
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 80,
                minLength: 4,
              })}
            />

            <InputRightElement
              style={{ position: "absolute", top: "4px" }}
              children={
                showPassword ? (
                  <AiFillEyeInvisible
                    onClick={() => setShowPassword(!showPassword)}
                    size={28}
                    color={themes.primaryOrange}
                  />
                ) : (
                  <AiFillEye
                    onClick={() => setShowPassword(!showPassword)}
                    size={28}
                    color={themes.primaryOrange}
                  />
                )
              }
            />
          </InputGroup>
          {errors.password?.type === "required" && (
            <Text color={themes.accentError}>Field is Required</Text>
          )}
        </Box>
        <Text color={themes.white}>Confirm Password</Text>
        <Box mb={6}>
          <Input
            type="password"
            size={"lg"}
            color={themes.white}
            placeholder="confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword?.message && (
            <Text color={themes.accentError}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </Box>
        <Button width={"100%"} type={"submit"}>
          Enlist
        </Button>
      </form>
    </Box>
  );
};
export default SignupPage;
