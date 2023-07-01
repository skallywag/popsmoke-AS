import React, { useState } from "react";
import themes from "../../themes/themes.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  Button,
  Box,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../state/state.hooks";
import { router } from "../../router";
import { setLogin } from "../../state/appSlice";
import "./LoginPage.scss";

type FormData = {
  email: string;
  password: string;
};
const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const loginDispatch = useAppDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      loginDispatch(setLogin(true));
      router.navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="loginPage page">
      <Box className="loginContainer">
        <h1 style={{ marginBottom: "20px", color: themes.primaryOrange }}>
          Login
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            mb={8}
            size={"lg"}
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              validate: {
                maxLength: (email) =>
                  email.length <= 50 ||
                  "The email should have at most 50 characters",
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email is not valid",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <InputGroup>
            <Input
              mb={8}
              size={"lg"}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                maxLength: 30,
                minLength: 2,
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
          <Button width={"100%"} type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default LoginPage;
