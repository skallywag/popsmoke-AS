import { BsHeartPulseFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { GiBleedingEye } from "react-icons/gi";
import { productService } from "../../api/productService/productService";
import themes from "../../themes/themes.module.scss";
import { Box, Button, Text } from "@chakra-ui/react";
import qs from "query-string";
import "./ProductDetailsPage.scss";

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState();
  const { productId } = qs.parse(location.search);

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
      <Box className="pageWrapper">
        <Box className="productActions">
          <Box display={"flex"} gap={"8px"} alignItems={"center"}>
            <BsHeartPulseFill color={themes.primaryOrange} />
            <Text>Favorite</Text>
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <BsFillShareFill color={themes.primaryOrange} />
            <Text>Share</Text>
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <GiBleedingEye color={themes.primaryOrange} />
            <Text> 10 Views</Text>
          </Box>
        </Box>

        <Box className="productInfo">
          <Text mb={"10px"} fontSize={"28px"}>
            Compact rifle with 2 mags and 1000s bbs
          </Text>
          <Text mb={"16px"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga culpa
            soluta laborum maxime deserunt! Perspiciatis similique cumque
            deleniti delectus animi impedit sunt commodi! Iure doloribus
            accusantium sit saepe, eveniet dolore.
          </Text>
          <Text mb={"5px"} fontSize={"22px"} fontWeight={"bold"}>
            $100.00
          </Text>
          <Text mb={"6px"}>Condition: Used</Text>
          <Text mb={"10px"}>West Valley, UT</Text>
        </Box>
        <Text mb={"10px"}>contact: Sam</Text>
        <Box display={"flex"} gap={"20px"} mb={"20px"}>
          <Button color={themes.primaryGray} type="button">
            Phone
          </Button>
          <Button color={themes.primaryGray} type="button">
            Text
          </Button>
          <Button color={themes.primaryGray} type="button">
            Email
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
