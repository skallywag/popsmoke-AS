import { BiTargetLock } from "react-icons/bi";
import { useState } from "react";
import { GiPistolGun } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";
import themes from "../../themes/themes.module.scss";
import { GiWinchesterRifle } from "react-icons/gi";
import { GiBackpack } from "react-icons/gi";
import { Box, Input, Text } from "@chakra-ui/react";
import "./ForSalePage.scss";

const LoginPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Box className="forSalePage">
      <Box className="filterWrapper">
        <Text mb={10} fontSize={40}>
          Black Market
        </Text>
        <Box mb={4} display={"flex"} alignItems={"center"} gap={1}>
          <IoMdAddCircleOutline color={themes.primaryOrange} size={32} />
          <Text>Create Listing</Text>
        </Box>
        <Input
          mb={6}
          value={searchValue}
          placeholder="Search Market"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Box>
      <Box className="filterContainer">
        <Box className="filterItem">
          <GiWinchesterRifle className="filterIcon" />
          <Text color={themes.white}>Rifles</Text>
        </Box>
        <Box className="filterItem">
          <GiPistolGun className="filterIcon" />
          <Text color={themes.white}>Pistols</Text>
        </Box>
        <Box className="filterItem">
          <GiBackpack className="filterIcon" />
          <Text color={themes.white}>Gear</Text>
        </Box>
        <Box className="filterItem">
          <BiTargetLock className="filterIcon" />
          <Text color={themes.white}>Modifications</Text>
        </Box>
        <Box className="filterItem">
          <FaHeadphones className="filterIcon" />
          <Text color={themes.white}>Accessorys</Text>
        </Box>
        <Box className="filterItem">
          <GiPistolGun className="filterIcon" />
          <Text color={themes.white}>Pistols</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default LoginPage;
