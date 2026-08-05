// ==============================
// Logged In User
// ==============================

// Save Logged In User
export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Get Logged In User
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Remove Logged In User
export const removeUser = () => {
  localStorage.removeItem("user");
};

// ==============================
// Registered Users
// ==============================

// Save New Registered User
export const saveRegisteredUser = (user) => {

  const users = getRegisteredUsers();

  users.push(user);

  localStorage.setItem(
    "registeredUsers",
    JSON.stringify(users)
  );

};

// Get All Registered Users
export const getRegisteredUsers = () => {

  const users = localStorage.getItem("registeredUsers");

  return users ? JSON.parse(users) : [];

};