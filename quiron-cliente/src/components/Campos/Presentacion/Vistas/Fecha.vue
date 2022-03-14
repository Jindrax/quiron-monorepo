<template>
  <q-item>
    <q-item-section side>
      <q-item-label>{{ elemento.presentacion }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ dataSync[path] }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoFecha, DateType} from '@quiron/classes/dist/components/campos/edicion';
import moment from "moment";

@Component({
  name: 'fecha',
  components: {
    MostrarCampo
  }
})
export default class Fecha extends Vue {
  @Prop() elemento: CampoFecha;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  tipos = DateType;

  get dateMask() {
    return this.elemento.format.replace(/A/g, 'Y');
  }

  created() {
    if (this.elemento.date_type == DateType.implicit) {
      let currentTime = moment(Date.now()).format(this.dateMask);
      this.$set(this.dataSync, this.path, currentTime);
    }
  }

  mounted() {
    if (this.elemento.date_type == DateType.explicit) {
      if (this.elemento.date && this.elemento.hour) {
        this.$set(this.dataSync, this.path, moment(Date.now()).format(`${this.dateMask} HH:mm`));
      } else if (this.elemento.date) {
        this.$set(this.dataSync, this.path, moment(Date.now()).format(this.dateMask));
      } else {
        this.$set(this.dataSync, this.path, moment(Date.now()).format("HH:mm"));
      }
    } else {
      this.$set(this.dataSync, this.path, moment(Date.now()).format(this.dateMask));
    }
  }

}
</script>
<style></style>
