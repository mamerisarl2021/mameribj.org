import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore ({
    plugins: [
        createPersistedState(),
      ],

    state : {
        authenticated: false,
        user: 'null',
    },
    getters : {
    },
    mutations : {
    }

  })


 