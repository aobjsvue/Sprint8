import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    starshipsList: [],
    page: 1,
    starship: [],
    loginModal: false,
    registerModal: false,
    usersDB: [],
    logged: false,
    loggedUser: "",
    pilots: [],
    charactersList: [],
    charactersPage: 1,
    character: [],
    films: [],
    starships: []
  },
  getters: {
  },
  mutations: {
    setStarshipsList(state, starships) {
      state.starshipsList = starships;
    },
    setMoreStarships(state, moreStarships) {
      if (state.starshipsList.length < moreStarships.count) {
        state.starshipsList = state.starshipsList.concat(moreStarships.results);
      }
    },
    setPage(state) {
      if (state.page < 5) {
        state.page++;
      }
    },
    setStarship(state, starshipInfo) {
      state.starship = starshipInfo;
    },
    toggleLoginModal(state) {
      state.loginModal = !state.loginModal;
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    createAccount(state, userData) {
      const checkEmail = state.usersDB.map((user) => user.email.toLowerCase());
      if (!checkEmail.includes(userData.email.toLowerCase())) {
        state.usersDB.push(userData);
        state.registerModal = false;
        localStorage.setItem('user', JSON.stringify(state.usersDB));
        console.log("Register completed. You can log in now!");
      } else {
        console.log("A user already exists with that e-mail address.");
      }
    },
    logIn(state, userData) {
      if (state.usersDB.some((user) => userData.email === user.email)) {
        if (state.usersDB.some((user) => userData.password === user.password)) {
          state.loggedUser = userData.email;
          state.logged = true;
          state.loginModal = false;
          console.log("Log in successful!");
        } else {
          state.logged = false;
          console.log("Wrong email address or password.");
        }
      } else {
        state.logged = false;
        state.loginModal = false;
        state.registerModal = true;
        console.log("There is no registered user with that e-mail address.");
      }
    },
    logOut(state) {
      state.logged = false;
      state.loggedUser = '';
      router.push({name: 'home'});
      console.log("Log out successful!")
    },
    checkDataBase(state) {
      const dataBase = JSON.parse(localStorage.getItem('user'));
      if ( dataBase === null) {
        state.usersDB = [];
      } else {
        state.usersDB = dataBase;
      }
    },
    setPilots(state, pilotsData) {
      pilotsData.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            state.pilots.push(data);
          });
      });
    },
    emptyPilots(state) {
      state.pilots = [];
    },
    toggleModals(state) {
      state.loginModal = !state.loginModal;
      state.registerModal = !state.registerModal;
    },
    setCharactersList(state, characters) {
      state.charactersList = characters;
    },
    setMoreCharacters(state, moreCharacters) {
      if (state.charactersList.length < moreCharacters.count) {
        state.charactersList = state.charactersList.concat(moreCharacters.results);
      }
    },
    setCharactersPage(state) {
      if (state.charactersPage < 10) {
        state.charactersPage++;
      }
    },
    setCharacter(state, characterInfo) {
      state.character = characterInfo;
    },
    setFilms(state, filmsData) {
      filmsData.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            state.films.push(data);
          });
      });
    },
    setStarships(state, starshipsData) {
      starshipsData.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            state.starships.push(data);
          });
      });
    },
    emptyFilmsStarships(state) {
      state.films = [];
      state.starships = [];
    },
  },
  actions: {
    async fetchStarships ({ commit }) {
      const response = await fetch("https://swapi.py4e.com/api/starships/?page=" + this.state.page);
      const data = await response.json();
      commit('setStarshipsList', data.results);
    },
    async fetchMoreStarships ({ commit }) {
      commit('setPage');
      if (this.state.page > 4) {
        return
      } else {
        const response = await fetch("https://swapi.py4e.com/api/starships/?page=" + this.state.page);
        const data = await response.json();
        commit('setMoreStarships', data);
      }
    },
    async fetchStarshipInfo ({ commit }, id) {
      const response = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
      const data = await response.json();
      commit('setStarship', data);
      commit('setPilots', data.pilots);
    },
    async fetchCharacters ({ commit }) {
      const response = await fetch("https://swapi.py4e.com/api/people/?page=" + this.state.charactersPage);
      const data = await response.json();
      commit('setCharactersList', data.results);
    },
    async fetchMoreCharacters ({ commit }) {
      commit('setCharactersPage');
      if (this.state.charactersPage > 9) {
        return
      } else {
        const response = await fetch("https://swapi.py4e.com/api/people/?page=" + this.state.charactersPage);
        const data = await response.json();
        commit('setMoreCharacters', data);
      }
    },
    async fetchCharacterInfo ({ commit }, id) {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
      const data = await response.json();
      commit('setCharacter', data);
      commit('setFilms', data.films);
      commit('setStarships', data.starships);
    },
  },
  modules: {
  }
})