import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { State } from "@/types/commonTypeDefinitions";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: () => {
    return {
      count: 0,
      products: null,
      productDetail: null,
    }
  },
  mutations: {
    setProductDetail(state, payload) {
      state.productDetail = payload;
    },
    setProductData(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    getJsonData(context) {
      const url = "services/catalog/v4/category/shop/new/all-new/index.json";
      fetch("api/" + url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          context.commit("setProductData", data);
        });
    },
  },
});
