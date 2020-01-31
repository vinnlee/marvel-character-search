import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import md5 from "md5";

Vue.use(Vuex);

const state = {
  data: []
};

const mutations = {
  RECEIVE_CHARACTERS(state, { characters }) {
    state.data = characters;
  }
};

const actions = {
  async FETCH_CHARACTERS({ commit }, character) {
    const TS = +new Date(); // timestamp
    const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_API_KEY; // public api key
    const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_API_KEY; // private api key
    const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`); // md5 digest of the ts parameter, private key and public key

    const URL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=20`;

    const { data } = await axios.get(URL).then(res => res.data);

    commit("RECEIVE_CHARACTERS", {
      characters: data.results
    });
  }
};

const getters = {
  characters: state => {
    return state.data.map(data => {
      return {
        id: data.id,
        name: data.name,
        url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
        image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description:
          data.description === ""
            ? "No description listed for this character."
            : data.description
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
