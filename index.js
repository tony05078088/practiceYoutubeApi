import Vue from "vue";
import Vuex from "vuex";
import axiosYouTube from "@/components/axios-auth.js";
import portfolio from './modules/Favorite.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [],
    countOfPage: 12,
    currPage: 1,
    pic: null,
    title: null,
    description: null,
  },
  actions: {
    getTubeApi({ commit }) {
      //打api到youtube去要資料
      axiosYouTube
        .get(
          "playlistItems?part=snippet,contentDetails,status&playlistId=PL_mdITDph7YjdClTzHJJwBv07ws_W7w9Z&key=AIzaSyA4H6x_Vm_1OMFT28ubBcMXFz-xzABj_oI&maxResults=50"
        )
        .then(res => {
          commit("setTubes", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePage({commit}, idx) {
         commit("change_Page",idx)
    }
  },
  mutations: {
    setTubes(state, response) {
      const item = [];
      state.pages = response.data.items;
      for (let i = 0; i < state.pages.length; i++) {
        const something = {};
        something.pic = state.pages[i].snippet.thumbnails.medium.url;
        something.description = state.pages[i].snippet.description;
        something.title = state.pages[i].snippet.title;
        something.videoId = state.pages[i].contentDetails.videoId;
        something.url = "https://www.youtube.com/embed/" + something.videoId;
        item.push(something);
      }
      state.pages = item;
      console.log(state.pages)
    },
    change_Page(state,idx) {
      state.currPage = idx
    }
  },
  getters: {
    pages: state => {
      return state.pages;
    },
    countOfPage: state => {
      return state.countOfPage
    },
    currPage: state => {
      return state.currPage
    }
  },
  modules: {
    portfolio
  }
});
