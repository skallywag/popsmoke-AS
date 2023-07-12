import db from "../models/index";

export const ProductController = {
  createProduct: async (req: any, res: any) => {
    const {
      userId,
      title,
      description,
      category,
      salePrice,
      condition,
      contactMethod,
      firstLastName,
      email,
      phoneNumber,
      zipCode,
      city,
      state,
    } = req.body;
    try {
      const response = await db.sequelize
        .query(`INSERT INTO product(title, description, category, salePrice, condition, contactMethod, firstlastname, email, phoneNumber, zipcode, city, state, userid)
          VALUES('${title}', '${description}', '${category}', '${salePrice}', '${condition}', '${contactMethod}', '${firstLastName}', '${email}', '${phoneNumber}', '${zipCode}', '${city}', '${state}', '${userId}')
          RETURNING id
        `);
      console.log(response[0][0]);
      return res.status(200).send(response[0][0]);
    } catch (error) {
      console.log(error);
    }
  },
};
