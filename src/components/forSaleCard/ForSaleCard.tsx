import { Image, Box, Text } from "@chakra-ui/react";
import themes from "../../themes/themes.module.scss";
import "./ForSaleCard.scss";

interface ForSaleCardProps {
  id: number;
  imageUrl: string;
  salePrice: string | number;
  title: string;
  description: string;
  onViewProduct: () => void;
}
const saleImg =
  "https://cdn.shopify.com/s/files/1/1017/9073/products/M4_Viper_Mk5-Black_Ops_USA-1.jpg?v=1477667973";

const ForSaleCard: React.FC<ForSaleCardProps> = (props) => {
  return (
    <Box className="forSaleCard" onClick={props.onViewProduct}>
      <Image borderRadius={"10px"} height="auto" width="100%" src={saleImg} />
      <Text fontSize={17} color={themes.white}>
        ${props.salePrice}
      </Text>
      <Text mb={2} fontSize={15} color={themes.white}>
        {props.title}
      </Text>
      <Text mb={4} fontSize={12} color={themes.white}>
        {props.description}
      </Text>
    </Box>
  );
};
export default ForSaleCard;
