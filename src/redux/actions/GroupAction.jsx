import api from "../apis.jsx";
import FormData from "form-data";

export const creategroupdata =
  (creategroupdata, setLoading, navigate, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/dashboard/create_group/", creategroupdata, config)
      .then((res) => {
        setLoading(false);
        navigate("/contacts");
        dispatch({ type: "Create", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        setLoading(false);
        dispatch({ type: "Create", payload: err });
        setCheck(1);
      });
  };
export const deletegroupdata =
  (deletegroupdata, setCheck, navigate) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      Authorization: `Bearer ${accesstoken}`,
    };
    await api
      .delete("/dashboard/create_group/", {
        headers: config,
        data: deletegroupdata,
      })
      .then((res) => {
        dispatch({
          type: "Delete",
          payload: res,
        });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "Delete", payload: err });
        setCheck(1);
      });
  };
export const editGrouptdata =
  (groupdata, setCheck, navigate, setCheck2, setLoading) =>
  async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .patch("/dashboard/create_group/", groupdata, config)
      .then((res) => {
        navigate("/mygrp");
        dispatch({ type: "EditGroup", payload: res });
        setCheck(1);
        setCheck2(0);
        setLoading(false);
      })
      .catch((err) => {
        setCheck(1);
        setCheck2(1);
        setLoading(false);
        dispatch({ type: "EditGroup", payload: err });
      });
  };

export const uploaddata =
  (uploaddata, setLoading, navigate, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/dashboard/bulk_add/", uploaddata, config)
      .then((res) => {
        setLoading(false);
        navigate("/groupinfo");
        dispatch({ type: "Upload", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        setLoading(false);
        dispatch({ type: "Upload", payload: err });
        setCheck(1);
      });
  };

export const addcontactsdata =
  (addcontactsdata, setLoading, navigate, setCheck, setCheck2) =>
  async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/dashboard/add_manually/", addcontactsdata, config)
      .then((res) => {
        setLoading(false);
        dispatch({ type: "AddContacts", payload: res });
        setCheck(1);
        setCheck2(1);
        navigate("/addcontacts");
      })
      .catch((err) => {
        setLoading(false);
        dispatch({ type: "AddContacts", payload: err });
        setCheck(1);
        setCheck2(0);
      });
  };

export const showgroup = (setCheck, setLoading) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/dashboard/create_group/", config)
    .then((res) => {
      // setLoading(false);
      dispatch({ type: "Show", payload: res });
      setCheck(1);
      // setLoading(false);
    })
    .catch((err) => {
      // setLoading(false);
      dispatch({ type: "Show", payload: err });
      setCheck(1);
    });
};

export const groupinfo = (setCheck, setLoading) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  var group_id = localStorage.getItem("groupid");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/dashboard/view_group_data/?group_id=" + group_id, config)
    .then((res) => {
      console.log(res);
      dispatch({ type: "Groupinfo", payload: res });
      setCheck(1);
      setLoading(false);
    })
    .catch((err) => {
      dispatch({ type: "Groupinfo", payload: err });
      setCheck(1);
      setLoading(false);
    });
};

export const deletecontact =
  (deletegroupdata, setCheck, navigate) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      Authorization: `Bearer ${accesstoken}`,
    };
    await api
      .delete("/dashboard/view_group_data/", {
        headers: config,
        data: deletegroupdata,
      })
      .then((res) => {
        dispatch({
          type: "DeleteContact",
          payload: res,
        });
        setCheck(1);
        // navigate("/groupinfo");
      })
      .catch((err) => {
        dispatch({ type: "DeleteContact", payload: err });
        setCheck(1);
      });
  };

export const editContactdata =
  (contactdata, setCheck, navigate, setCheck2) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .patch("/dashboard/view_group_data/", contactdata, config)
      .then((res) => {
        navigate("/groupinfo");
        dispatch({ type: "EditContact", payload: res });
        setCheck(1);
        setCheck2(0);
      })
      .catch((err) => {
        setCheck(1);
        setCheck2(1);
        dispatch({ type: "EditContact", payload: err });
      });
  };

export const deleteTemplate =
  (deletetempdata, setCheck, navigate) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      Authorization: `Bearer ${accesstoken}`,
    };
    await api
      .delete("/dashboard/template_view/", {
        headers: config,
        data: deletetempdata,
      })
      .then((res) => {
        dispatch({
          type: "DeleteTemp",
          payload: res,
        });
        setCheck(1);
        // navigate("/groupinfo");
      })
      .catch((err) => {
        dispatch({ type: "DeleteTemp", payload: err });
        setCheck(1);
      });
  };

export const deleteschedule =
  (deletegroupdata, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      Authorization: `Bearer ${accesstoken}`,
    };
    await api
      .delete("/dashboard/schedule_mail/", {
        headers: config,
        data: deletegroupdata,
      })
      .then((res) => {
        dispatch({
          type: "DeleteSchedule",
          payload: res,
        });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "DeleteSchedule", payload: err });
        setCheck(1);
      });
  };

export const campaigndata =
  (sendmail, setCheck, setLoading, navigate) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        // 'Content-Type': 'application/json'
      },
    };
    await api
      .post("/dashboard/send_mail/", sendmail, config)
      .then((res) => {
        navigate("/templates");
        dispatch({ type: "Campaign", payload: res });
        setCheck(1);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({ type: "Campaign", payload: err });
        setCheck(1);
        setLoading(false);
      });
  };
export const sendmaildata =
  (setCheck, sendmail, navigate, setLoading) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .patch("/dashboard/send_mail/", sendmail, config)
      .then((res) => {
        navigate("/mailhistory");
        dispatch({ type: "SendMail", payload: res });
        setCheck(1);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({ type: "SendMail", payload: err });
        setCheck(1);
        setLoading(false);
      });
  };
export const fileuploadimg =
  (sendmail, navigate, setCheck) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/dashboard/file_upload/", sendmail, config)
      .then((res) => {
        navigate("/mailingpage");
        dispatch({ type: "UploadFile", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "UploadFile", payload: err });
        setCheck(1);
      });
  };
export const schedulemaildata =
  (setCheck, schedulemail) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    console.log(schedulemail);
    await api
      .post("/dashboard/schedule_mail/", schedulemail, config)
      .then((res) => {
        dispatch({ type: "ScheduleMail", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        dispatch({ type: "ScheduleMail", payload: err });
        setCheck(1);
      });
  };
export const mailhistory = (setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/dashboard/send_mail/?schedulmail=False", config)
    .then((res) => {
      dispatch({ type: "MailHistory", payload: res });
      setCheck(1);
    })
    .catch((err) => {
      dispatch({ type: "MailHistory", payload: err });
      setCheck(1);
    });
};
export const schedulehistory = (setCheck, setLoading) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/dashboard/send_mail/?schedulmail=True", config)
    .then((res) => {
      dispatch({ type: "ScheduleHistory", payload: res });
      setCheck(1);
      setLoading(false);
    })
    .catch((err) => {
      dispatch({ type: "ScheduleHistory", payload: err });
      setCheck(1);
      setLoading(false);
    });
};

export const viewtemp = (setCheck) => async (dispatch) => {
  var accesstoken = localStorage.getItem("accesstokenb");
  const config = {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  };
  await api
    .get("/dashboard/template_view/", config)
    .then((res) => {
      // setLoading(false);
      dispatch({ type: "Templateview", payload: res });
      setCheck(1);
    })
    .catch((err) => {
      // setLoading(false);
      dispatch({ type: "Templateview", payload: err });
      setCheck(1);
    });
};
export const addtemp =
  (tempdata, navigate, setCheck, setLoading) => async (dispatch) => {
    var accesstoken = localStorage.getItem("accesstokenb");
    const config = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    await api
      .post("/dashboard/template_view/", tempdata, config)
      .then((res) => {
        setLoading(false);
        navigate("/template");
        dispatch({ type: "Addtemp", payload: res });
        setCheck(1);
      })
      .catch((err) => {
        setLoading(false);
        dispatch({ type: "Addtemp", payload: err });
        setCheck(1);
      });
  };
