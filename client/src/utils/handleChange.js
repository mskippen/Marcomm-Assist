export const handleChange = (e, setValue, value) => {
  setValue({ ...value, [e.target.name]: e.target.value });
};
