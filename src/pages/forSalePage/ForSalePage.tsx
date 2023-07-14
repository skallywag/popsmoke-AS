import { BiTargetLock } from "react-icons/bi";
import { useState, useEffect } from "react";
import { GiPistolGun } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAppSelector } from "../../state/state.hooks";
import { RootState } from "../../state/store";
import { router } from "../../router";
import { toast } from "react-toastify";
import qs from "query-string";
import { BallTriangle } from "react-loader-spinner";
import themes from "../../themes/themes.module.scss";
import ForSaleCard from "../../components/forSaleCard/ForSaleCard";
import { GiWinchesterRifle } from "react-icons/gi";
import { GiBackpack } from "react-icons/gi";
import { Box, Input, Text } from "@chakra-ui/react";
import "./ForSalePage.scss";
import { productService } from "../../api/productService/productService";

const LoginPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { isLoggedIn } = useAppSelector((state: RootState) => state.setLogin);

  useEffect(() => {
    (async () => {
      try {
        const response = await productService.getProducts();
        setProducts(response);
      } catch (error) {
        toast(error.data);
      }
    })();
  }, []);

  return (
    <Box className="forSalePage">
      <Box className="filterWrapper">
        <Text mb={10} fontSize={40}>
          Black Market
        </Text>
        <Box mb={4} display={"flex"} alignItems={"center"} gap={1}>
          <IoMdAddCircleOutline
            color={themes.primaryOrange}
            size={32}
            onClick={() =>
              isLoggedIn
                ? router.navigate("/create-listing").catch(console.error)
                : router.navigate("/login").catch(console.error)
            }
          />
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
      <Box className="productWrapper">
        {products.length === 0 ? (
          <BallTriangle
            height={60}
            width={60}
            radius={5}
            color={themes.primaryGreen}
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{ justifyContent: "center" }}
            visible={true}
          />
        ) : (
          products.map((item) => {
            const query = qs.stringify({
              productId: item.id,
            });

            return (
              <ForSaleCard
                key={item.id}
                imageUrl={item.imageUrl}
                description={item.description}
                salePrice={item.saleprice}
                title={item.title}
                onViewProduct={() => {
                  router
                    .navigate(`/product-details/?${query}`)
                    .catch(console.error);
                }}
              />
            );
          })
        )}
      </Box>
    </Box>
  );
};
export default LoginPage;
