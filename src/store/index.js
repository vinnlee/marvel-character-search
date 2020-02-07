import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import md5 from "md5";

Vue.use(Vuex);

const TS = +new Date(); // timestamp
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_API_KEY; // public api key
const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_API_KEY; // private api key
const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`); // md5 digest of the ts parameter, private key and public key

const state = {
  characters: []
};

const mutations = {
  RECEIVE_CHARACTERS(state, { characters }) {
    state.characters = characters;
  }
};

const actions = {
  async FETCH_CHARACTERS({ commit }, characters) {
    const source = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${characters}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=20`;
    const { data } = await axios.get(source).then(res => res.data);

    commit("RECEIVE_CHARACTERS", {
      characters: data.results
    });
  }
};

const getters = {
  characters: state => {
    return state.characters.map(character => {
      return {
        id: character.id,
        name: character.name,
        url: character.urls[1] ? character.urls[1].url : character.urls[0].url,
        image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        description:
          character.description === ""
            ? "No description listed for this character."
            : character.description
      };
    });
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
