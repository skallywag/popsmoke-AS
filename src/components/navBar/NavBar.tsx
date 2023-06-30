import React from "react";
import themes from "../../themes/themes.module.scss";
import { useAppDispatch, useAppSelector } from "../../state/state.hooks";
import { RootState } from "../../state/store";
import logo from "../../assets/target.png";
import { Button, Box } from "@chakra-ui/react";
import { router } from "../../router";
import { setLogin } from "../../state/appSlice";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import "./NavBar.scss";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.setLogin);
  const loginDispatch = useAppDispatch();

  return (
    <Box className="navBar">
      <Box className="linkContainer">
        <Box
          display="flex"
          gap={8}
          alignItems="center"
          cursor="pointer"
          onClick={() => router.navigate("/").catch(console.error)}
        >
          <Image borderRadius="full" src={logo} height={30} width={30} />
          <Box style={{ fontSize: "20px", color: themes.white }}>Pop Smoke</Box>
        </Box>
        <Link
          onClick={() => router.navigate("/").catch(console.error)}
          style={{ color: themes.primaryOrange }}
        >
          Home
        </Link>
        <Link
          onClick={() => router.navigate("/product").catch(console.error)}
          style={{ color: themes.primaryOrange }}
        >
          Black Market
        </Link>
      </Box>
      <Box display="flex" gap={18}>
        {isLoggedIn ? (
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              loginDispatch(setLogin(false));
              router.navigate("/").catch(console.error);
            }}
          />
        ) : (
          <Button
            width={20}
            height={8}
            bg={themes.primaryOrange}
            onClick={() => router.navigate("/login").catch(console.error)}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default NavBar;
