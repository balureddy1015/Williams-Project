<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      ref="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="title"></slot>
            <button
              type="button"
              class="btn-close"
              @click="closeModal()"
              aria-label="Close"
            ></button>
          </div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import { key } from "@/store";
import {Modal} from "bootstrap";

@Options({
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    showModal(newValue, oldValue) {
      // console.log("showModal", newValue, oldValue);
      if (newValue) {
        this.myModal.show();
      }
    },
  },
})
export default class ModalComponent extends Vue {
  store = useStore(key);
  myModal: Modal | null = null;
  closeModal() {
    if (this.myModal) {
      this.myModal.hide();
      this.$emit('hideModal')
    }
  }
  mounted() {
    this.myModal = new Modal((this.$refs.exampleModal as Element))
  }
}
</script>

<style scoped></style>
