<template>
  <mostrar-campo :etiqueta="elemento.presentacion">
    <div v-if="elemento.date_type === tipos.explicit">
      <q-input
        filled
        v-if="elemento.date && !elemento.hour"
        v-model="dataSync[path]"
      >
        <template v-slot:append>
          <q-icon class="cursor-pointer" name="event">
            <q-popup-proxy
              ref="qDateProxy"
              transition-hide="scale"
              transition-show="scale"
            >
              <q-date @input="() => $refs.qDateProxy.hide()" v-model="dataSync[path]" :mask="dateMask"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input filled v-if="elemento.hour && !elemento.date" v-model="dataSync[path]">
        <template v-slot:append>
          <q-icon class="cursor-pointer" name="access_time">
            <q-popup-proxy transition-hide="scale" transition-show="scale">
              <q-time @input="() => $refs.qDateProxy.hide()" v-model="dataSync[path]"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input filled v-if="elemento.hour && elemento.date" v-model="dataSync[path]">
        <template v-slot:append>
          <q-icon class="cursor-pointer" name="event">
            <q-popup-proxy
              ref="qDateProxy"
              transition-hide="scale"
              transition-show="scale"
            >
              <q-date @input="() => $refs.qDateProxy.hide()" v-model="dataSync[path]" :mask="`${dateMask} HH:mm`"/>
            </q-popup-proxy>
          </q-icon>
          <q-icon class="cursor-pointer" name="access_time">
            <q-popup-proxy transition-hide="scale" transition-show="scale" ref="qHourProxy">
              <q-time @input="() => $refs.qHourProxy.hide()" v-model="dataSync[path]" :mask="`${dateMask} HH:mm`"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div v-else>
      Fecha implicita
    </div>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoFecha, DateType} from 'quiron_classes/dist/components/campos/edicion';
import moment from 'moment';

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

  mounted() {
    if (this.elemento.date && this.elemento.hour) {
      this.$set(this.dataSync, this.path, moment(Date.now()).format(`${this.dateMask} HH:mm`));
    } else if (this.elemento.date) {
      this.$set(this.dataSync, this.path, moment(Date.now()).format(this.dateMask));
    } else {
      this.$set(this.dataSync, this.path, moment(Date.now()).format("HH:mm"));
    }
  }

  get dateMask() {
    return this.elemento.format.replace(/A/g, 'Y');
  }

}
</script>
<style></style>
