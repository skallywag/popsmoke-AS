import { BsHeartPulseFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GiBleedingEye } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { productService } from "../../api/productService/productService";
import themes from "../../themes/themes.module.scss";
import { Box, Button, Text, Divider } from "@chakra-ui/react";
import { router } from "../../router";
import { AiOutlinePhone, AiFillHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import "./ProductDetailsPage.scss";
import { Product } from "../../@types/models";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import { useAppSelector } from "../../state/state.hooks";
import { RootState } from "../../state/store";

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { productId } = qs.parse(location.search);
  const { isLoggedIn } = useAppSelector((state: RootState) => state.setLogin);

  useEffect(() => {
    (async () => {
      try {
        await productService.updatePageView(productId);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await productService.getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Box className="productDetailsPage">
      <ProductCarousel />
      <Box className="pageWrapper">
        <Box className="productActions">
          <Box display={"flex"} gap={"8px"} alignItems={"center"}>
            <BsHeartPulseFill color={themes.primaryOrange} />
            <Text>{product?.favorites ? product.favorites : 0}</Text>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <GiBleedingEye color={themes.primaryOrange} />
            <Text>{product?.views ? product.views : 0}</Text>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <BsFillShareFill color={themes.primaryOrange} />
            <Text>Share</Text>
          </Box>
        </Box>

        <Box className="productInfo">
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text fontWeight={"extrabold"} fontSize={"30px"}>
              {product?.title}
            </Text>
            {isLoggedIn && (
              <AiFillHeart
                onClick={() => handleAddFavororite()}
                fontSize={30}
                color={themes.primaryOrange}
              />
            )}
          </Box>
          <Text fontSize={"22px"} fontWeight={"bold"}>
            ${product?.salePrice}
          </Text>
          <Text mb={"4px"} color={themes.secondaryBlue}>
            {product?.city}, {product?.state}
          </Text>
          <Text mb={"6px"} fontWeight={"bold"}>
            Condition: {product?.condition}
          </Text>
          <Text mb={"16px"}>{product?.description}</Text>
          <Divider
            mb={"8px"}
            color={themes.primaryOrange}
            border={"1px solid"}
          />
        </Box>
        <Text fontWeight={"bold"}>Contact: {product?.firstName}</Text>
        {isLoggedIn ? (
          <Box
            display={"flex"}
            gap={"20px"}
            mb={"20px"}
            justifyContent={"space-around"}
          >
            <Button color={themes.primaryGray} type="button">
              <AiOutlinePhone
                fontSize={30}
                color={themes.primaryOrange}
                style={{ paddingRight: "4px" }}
              />{" "}
              {product?.phoneNumber}
            </Button>
            <Button color={themes.primaryGray} type="button">
              <HiOutlineMailOpen
                fontSize={30}
                color={themes.primaryOrange}
                style={{ paddingRight: "4px" }}
              />{" "}
              {product?.email}
            </Button>
          </Box>
        ) : (
          <Text
            mb={"16px"}
            cursor={"pointer"}
            color={themes.primaryOrange}
            onClick={() =>
              router.navigate("/login", {
                state: { forward: `/product-details/?productId=${productId}` },
              })
            }
          >
            Login to contact seller
          </Text>
        )}
        <Text fontWeight={"bold"}>Beware of Fraud</Text>
        <Text>
          Please contact us to report any suspicious activity or fraudulent
          sales
        </Text>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
