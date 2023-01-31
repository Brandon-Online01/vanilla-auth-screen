let signInForm = document.getElementById("signInForm");
let errorField = document.getElementById("error");

const loginEndpoint = `https://nehemie.dev/brandon/login/`;
let loginData = {};

const logginUser = async () => {
  try {
    const response = await axios.post(`${loginEndpoint}`, loginData);
    const result = response.data;
    result.access_token ? window.location.href = "/home.html" :  window.location.href = "/login.html";
    return result;
  }
  catch (err) { 
    err.message === 'Request failed with status code 400' || err.message === 'Request failed with status code 401' ? errorField.textContent = 'Incorrect username or password, please try again' : '';
  }
};

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
    loginData = {email, password};
    logginUser();
  }
  else if (!username) {
    console.log("Please enter a username");
  }
  else if (!password) {
    console.log("Please enter a password");
  }
  else {
    return;
  }
});

