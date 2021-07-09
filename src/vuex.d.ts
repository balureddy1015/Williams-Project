import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {


    // provide typings for `this.$store`
    import {State} from "@/types/commonTypeDefinitions";

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
