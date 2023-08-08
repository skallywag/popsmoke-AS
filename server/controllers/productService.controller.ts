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
        .query(`INSERT INTO product(title, description, category, "salePrice", condition, "contactMethod", "firstName", email, "phoneNumber", "zipCode", city, state, userid)
          VALUES('${title}', '${description}', '${category}', '${salePrice}', '${condition}', '${contactMethod}', '${firstLastName}', '${email}', '${phoneNumber}', '${zipCode}', '${city}', '${state}', '${userId}')
          RETURNING id
        `);
      return res.status(200).send(response[0][0]);
    } catch (error) {
      console.log(error);
    }
  },

  getProducts: async (req: any, res: any) => {
    try {
      const response = await db.sequelize.query(`SELECT * FROM product`);
      res.status(200).send(response[0]);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getProductById: async (req: any, res: any) => {
    const { productId } = req.params;
    const id = Number(productId);

    try {
      const response = await db.sequelize.query(
        `SELECT * FROM product WHERE id = '${id}'`
      );
      res.status(200).send(response[0][0]);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updateProductView: async (req: any, res: any) => {
    const { productId } = req.params;
    console.log(productId);
    console.log(typeof productId);

    try {
      const response = await db.sequelize.query(
        `UPDATE product SET views = views + 1 WHERE id = ${productId}`
      );
    } catch (error) {
      console.error(error);
    }
  },
};
