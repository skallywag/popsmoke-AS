import axios from "axios";

export const userService = {
  userLogin: async (data: Api.User.Req.Login): Promise<Api.User.Req.Login> => {
    const response = await axios.post(
      `http://localhost:8080/api/user/login`,
      data
    );
    return response.data;
  },

  userCreate: async (
    data: Api.User.Req.Create
  ): Promise<Api.User.Res.Create> => {
    const response = await axios.post(
      `http://localhost:8080/api/user/create`,
      data
    );
    return response.data;
  },
};
