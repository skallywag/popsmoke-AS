import db from "../models/index";
import * as bcrypt from "bcrypt";

export const UserController = {
  userLogin: async (req: any, res: any) => {
    const { email, password } = req;

    try {
      const response = await db.sequelize.query(`
          SELECT * FROM operators WHERE email = '${email}'
        `);
      if (response[1].rowCount === 0) {
        return res.status(404).send("User not found");
      }
      if (response[1].rowCount === 1) {
        if (bcrypt.compareSync(password, response[0][0].password)) {
          const operator = {
            firstName: response[0][0].firstname,
            userName: response[0][0].username,
          };
          return res.status(200).send(operator);
        }
        if (response[1].rowCount === 0) {
          return res.status(404).send("Account does not exist");
        } else {
          res.status(401).send("Email or Password is incorrect");
        }
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  userCreate: async (req: any, res: any) => {
    const { firstName, lastName, email, password, userName } = req.body;
    try {
      const existingUser = await db.sequelize.query(
        `SELECT * FROM operators WHERE email = '${email}'`
      );
      if (existingUser[1].rowCount !== 0) {
        res.status(404).send("Account Already Exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createUser = await db.sequelize
          .query(`INSERT INTO operators(firstname, lastname, email, password, username)
          VALUES('${firstName}', '${lastName}', '${email}', '${hash}', '${userName}')
          RETURNING id, firstname
        `);
        res.status(200).send(createUser[0][0]);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
