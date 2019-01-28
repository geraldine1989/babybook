import axios from 'axios';


const ajaxMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case LOAD_RECIPES:
      // Je veux faire une requête axios
      axios.get(url)
        .then((result) => {
          console.log(result);
          // store.dispatch(receivedRecipes(result.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
      next(action);
  }
};

export default ajaxMiddleware;  