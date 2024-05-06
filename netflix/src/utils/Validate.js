export const checkvalidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  if (!isEmailValid) return "Email iD is not Valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!regName) return "Name Type is Not Valid";

  return null;
};
