import {
  Box,
  Text,
  Input,
  Textarea,
  Select,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import themes from "../../themes/themes.module.scss";
import "./CreateListingPage.scss";

type FormData = {
  title: string;
  description: string;
  category: string;
  salePrice: number;
  condition: string;
  contactMethod: string;
  firstLastName: string;
  email: string;
  phoneNumber: number;
  acceptsSMS: boolean;
  zipCode: number;
  city: string;
  state: string;
};

const CreateListingPage: React.FC = () => {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log(data);
  };

  return (
    <Box className="createListingPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text mb={8} fontSize={40}>
          Create Listing
        </Text>

        <Box mb={5}>
          <Input
            placeholder="Title"
            {...register("title", { required: "Required" })}
          />
          {errors.title && (
            <Text color={themes.accentError}>{errors.title.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Textarea
            placeholder="Description"
            {...register("description", { required: "Required" })}
          />
          {errors.description && (
            <Text color={themes.accentError}>{errors.description.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Select
            {...register("category", { required: "Required" })}
            placeholder="Category"
          >
            <option value="rifle">Rifle</option>
            <option value="pistol">Pistol</option>
            <option value="gear">Gear</option>
            <option value="mods">Mods</option>
            <option value="accessories">Accessories</option>
          </Select>
          {errors.category && (
            <Text color={themes.accentError}>{errors.category.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            type="number"
            placeholder="Price"
            {...register("salePrice", { required: "Required" })}
          />
          {errors.salePrice && (
            <Text color={themes.accentError}>{errors.salePrice.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Select
            placeholder="Condition"
            {...register("condition", { required: "Required" })}
          >
            <option value="new">New</option>
            <option value="Excellent, like new">
              Used - Excellent, like new
            </option>
            <option value="Good, minimal wear">
              Used - Good, minimal wear
            </option>
            <option value="Fair, normal wear">Used - Fair, normal wear</option>
            <option value="Poor, significant wear">
              Used - Poor, significant wear
            </option>
            <option value="Damaged, parts only">
              Used - Damaged, parts only
            </option>
          </Select>
          {errors.condition && (
            <Text color={themes.accentError}>{errors.condition.message}</Text>
          )}
        </Box>
        <Divider mb={5} />
        <Text mb={5} fontSize={18}>
          Contact Method
        </Text>
        <Box mb={5}>
          <Controller
            name="contactMethod"
            control={control}
            rules={{ required: "Please select a contact method" }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup onChange={onChange} value={value}>
                <Stack direction="column">
                  <Radio size={"lg"} value="Text">
                    Text
                  </Radio>
                  <Radio size={"lg"} value="Phone">
                    Phone
                  </Radio>
                  <Radio mb={3} size={"lg"} value="Email">
                    Email
                  </Radio>
                </Stack>
              </RadioGroup>
            )}
          />
          {errors.contactMethod && (
            <Text color={themes.accentError}>
              {errors.contactMethod.message}
            </Text>
          )}
        </Box>
        <Divider mb={5} />
        <Text mb={5} fontSize={18}>
          Contact Info
        </Text>
        <Box mb={5}>
          <Input
            placeholder="First And Last Name"
            {...register("firstLastName", { required: "Required" })}
          />
          {errors.firstLastName && (
            <Text color={themes.accentError}>
              {errors.firstLastName.message}
            </Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            placeholder="Email"
            {...register("email", {
              required: "Required",
              validate: {
                matchPattern: (email) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
                  "Email is not valid",
              },
            })}
          />
          {errors.email && (
            <Text color={themes.accentError}>{errors.email.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            type="number"
            placeholder="Phone"
            {...register("phoneNumber", {
              required: "Required",
              validate: {
                matchPattern: (number) =>
                  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
                    number
                  ) || "Phone is not valid",
              },
            })}
          />
          {errors.phoneNumber && (
            <Text color={themes.accentError}>{errors.phoneNumber.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            type="number"
            placeholder="Zip"
            {...register("zipCode", { required: "Required" })}
          />
          {errors.zipCode && (
            <Text color={themes.accentError}>{errors.zipCode.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            placeholder="City"
            {...register("city", { required: "Required" })}
          />
          {errors.city && (
            <Text color={themes.accentError}>{errors.city.message}</Text>
          )}
        </Box>
        <Box mb={5}>
          <Input
            placeholder="State"
            {...register("state", { required: "Required" })}
          />
          {errors.state && (
            <Text color={themes.accentError}>{errors.state.message}</Text>
          )}
        </Box>
        <Button type="submit">Post Listing</Button>
      </form>
    </Box>
  );
};
export default CreateListingPage;
