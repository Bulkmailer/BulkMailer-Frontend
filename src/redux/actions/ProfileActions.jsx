import api from "../apis.jsx";

export const profilegetdata = (setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/auth/get_profile_details/", config)
    .then((res) => {
      dispatch({ type: "Profileget", payload: res });
      setCheck(1);
    })
    .catch((err) => {
      dispatch({ type: "Profileget", payload: err });
      setCheck(1);
    });
};

export const editprofiledata =
  (editprofiledata, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .patch("/auth/get_profile_details/", editprofiledata, config)
      .then((res) => {
        dispatch({ type: "EditProfile", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "EditProfile", payload: err });
        setCheck(1);
      });
  };

export const apppassdata =
  (apppassdata, setCheck, navigate, setLoading) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/auth/add_App_password/", apppassdata, config)
      .then((res) => {
        setCheck(1);
        setLoading(false);
        navigate("profilepage");
        dispatch({ type: "AddPass", payload: res });
      })
      .catch((err) => {
        setCheck(1);
        // setLoading(false);
        dispatch({ type: "AddPass", payload: err });
      });
  };

export const seeappPassword = (setCheck2) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/auth/add_App_password/", config)
    .then((res) => {
      dispatch({ type: "Emailget", payload: res });
      setCheck2(1);
    })
    .catch((err) => {
      dispatch({ type: "Emailget", payload: err });
      setCheck2(1);
    });
};

export const updatepassdata =
  (updatepassdata, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .patch("/auth/update_app_password/", updatepassdata, config)
      .then((res) => {
        dispatch({ type: "UpdatePass", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "UpdatePass", payload: err });
        setCheck(1);
      });
  };
