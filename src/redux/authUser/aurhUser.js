
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getToken = (state) => state.auth.token;

const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
  getIsFetchCurrentUser,
};

export default authSelectors;