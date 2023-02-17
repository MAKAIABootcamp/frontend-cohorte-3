import React, { useState } from "react";

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const setForm = (data) => {
    setFormData({
      ...formData,
      data,
    });
  };

  const reset = () => {
    setFormData(initialState)
  }

  return [formData, handleChange, reset, setForm];
};

export default useForm;