const state = {
    pages: []
}

const actions = {
    // 增加影片到收藏頁
    AddFavorite({ commit }, order) {
        commit("Add_Movie",order)
      }
}

const mutations = {
    Add_Movie (state, { videoId }) {
        const record = state.pages.find(el => el.id === videoId);
        if (!record) {
         state.pages.push({
            id: videoId
         })
        }
      },
    SET_Movie(state, portfolio) {
        state.pages = portfolio.pagePortfolio ? portfolio.pagePortfolio : []
    }
}
const getters = {
    pagePortfolio(state, getters) {
     return state.pages.map(page => {
         const record = getters.pages.find(
         el => el.videoId === page.id    
         )
         return {
         id: page.id,
         title: record.title,
         pic: record.pic
         }
     })
    }
}
export default {
    state,
    mutations,
    getters,
    actions
}