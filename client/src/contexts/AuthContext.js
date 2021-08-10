import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { createContext, useState } from "react";
import {
  ADD_CAMPAIGN_tO_FUND,
  ADD_CAMPAIGN_tO_PROPERTY,
  CREATE_NEW_FUND,
  CREATE_NEW_PROPERTY,
  LOGIN_USER,
  REGISTER_USER,
} from "../graphql/mutations";
import { GET_USER_DETAILS } from "../graphql/queries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//initial state
const initialState = {
  isAuthenticated: false,
  token: "",
  // token: localStorage.getItem("auth_token"),
  currentUser: null,
  isLoading: false,
  userInfo: {},
  success: null,
  loginError: null,
  registerError: null,
};

//create context
export const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  toast.configure();
  const [state, setState] = useState(initialState);
  //queries
  const { data } = useQuery(GET_USER_DETAILS, {
    variables: {
      user_id: "6111c5ed9cff5c47946c4b5a",
    },
  });

  function checkProperties(obj) {
    if (
      Object.keys(obj).every(function (x) {
        return obj[x] === "" || obj[x] === null;
      }) === false
    ) {
      return true;
    } else {
      return false;
    }
  }

  //Mutations
  const [logUserIn] = useMutation(LOGIN_USER);
  const [signupUser] = useMutation(REGISTER_USER);
  const [createANewFund] = useMutation(CREATE_NEW_FUND);
  const [createANewProperty] = useMutation(CREATE_NEW_PROPERTY);
  const [addNewCampignToFund] = useMutation(ADD_CAMPAIGN_tO_FUND);
  const [addNewCampignToProperty] = useMutation(ADD_CAMPAIGN_tO_PROPERTY);

  const registerUser = async (user) => {
    try {
      const { data } = await signupUser({
        variables: {
          userInput: {
            ...user,
            username: user.first_name + user.last_name,
            user_type: "staff",
          },
        },
      });
      setState({
        ...state,
        userInfo: data.registerUser,
        token: data.registerUser.token,
      });
      localStorage.setItem("user_details", JSON.stringify(data.registerUser));
      localStorage.setItem("auth_token", data.registerUser.token);
      toast.success("Register Success!");
      window.location.assign("/");
      console.log(data);
    } catch (err) {
      console.error(err, "err");
      if (!checkProperties(user)) {
        setState({
          ...state,
          registerError: "Please fill in all fields",
        });
      } else {
        setState({
          ...state,
          registerError: "Please fill in all fields",
          success: false,
        });
      }
    }
  };

  const loginUser = async (user) => {
    try {
      const { data } = await logUserIn({
        variables: { ...user },
      });
      setState({
        ...state,
        userInfo: data.loginUser,
        token: data.loginUser.token,
      });
      localStorage.setItem("user_details", JSON.stringify(data.loginUser));
      localStorage.setItem("auth_token", data.loginUser.token);
      toast.success("Login Success!");
      window.location.assign("/");
    } catch (err) {
      console.error(err.errors, "err");
      setState({
        ...state,
        loginError: err.networkError.result.errors[0],
        success: false,
      });
    }
  };

  const createNewFund = async (fund) => {
    try {
      console.log(fund);
      console.log({
        fundInput: {
          ...fund,
        },
      });
      const { data } = await createANewFund({
        variables: {
          fundInput: {
            ...fund,
          },
        },
      });

      console.log(data);
      toast.success("Success!");
      window.location.reload();
    } catch (err) {
      console.error(err.errors, "err");
      setState({
        ...state,
        loginError: err.networkError?.result.errors[0],
        success: false,
      });
    }
  };

  const createNewProperty = async (property) => {
    try {
      const { data } = await createANewProperty({
        variables: {
          propertyInput: {
            ...property,
          },
        },
      });

      console.log(data);
      toast.success("Success!");
      window.location.reload();
    } catch (err) {
      console.error(err.errors, "err");
      setState({
        ...state,
        loginError: err.networkError?.result.errors[0],
        success: false,
      });
    }
  };

  const addCampaignToFund = async (campaign, item) => {
    try {
      const { data } = await addNewCampignToFund({
        variables: {
          campaignInput: {
            ...campaign,
          },
          itemInput: {
            ...item,
          },
        },
      });

      console.log(data);
      toast.success("Success!");
      window.location.assign("/projects");
    } catch (err) {
      console.error(err.errors, "err");
      setState({
        ...state,
        loginError: err.networkError?.result.errors[0],
        success: false,
      });
    }
  };

  const addCampaignToProperty = async (campaign, item) => {
    try {
      const { data } = await addNewCampignToProperty({
        variables: {
          campaignInput: {
            ...campaign,
          },
          itemInput: {
            ...item,
          },
        },
      });

      console.log(data);
      window.location.assign("/projects");
    } catch (err) {
      console.error(err.errors, "err");
      setState({
        ...state,
        loginError: err.networkError?.result.errors[0],
        success: false,
      });
    }
  };

  const getProfile = () => {
    // console.log(data);
    setState({ ...state, userInfo: data });
  };

  //return provider
  return (
    <AuthContext.Provider
      value={{
        state,
        registerUser,
        loginUser,
        getProfile,
        createNewFund,
        createNewProperty,
        addCampaignToFund,
        addCampaignToProperty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
