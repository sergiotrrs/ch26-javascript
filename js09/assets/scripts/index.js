console.log("JS09 uso de Axios");

const url = "https://reqres.in/api/unknown/23";

const getUsersFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      console.log(users.data);
    })
    .catch((error) => console.log(error));
};

const getUsersAxios = () => {
  axios
    .get(url)
    .then((users) => {
      console.log(users.data.data);
    })
    .catch((error) => console.log(error));
};

// --------- Usar Axios con async-await --------------

const getUsersAxiosAwait = async () => {
  try {
    const users = await axios.get("https://reqres.in/api/users?page=2");
    const userId2 = await axios.get("https://reqres.in/api/users/2");
    console.log(users.data.data);
    console.log(userId2);
  } catch (error) {
    console.log(error);
    //alert( error.message  )
  }
};

// ------- Solicutd POst con Axios. ------------------

const userData = {
    name: 'Juan',
    email: 'juan@example.com',
    password: '123456'
  };


const newUser = () => {
  axios
    .post("https://reqres.in/api/users", userData )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
