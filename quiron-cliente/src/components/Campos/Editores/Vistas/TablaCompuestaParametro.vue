<template>
  <q-list>
    <q-item>
      <q-item-section>
        <table>
          <tr>
            <td>
              {{ parametroSync.etiqueta }}
            </td>
            <td v-for="(columna, columna_indice) in parametroSync.columnas">
              <q-input v-model="parametroSync.columnas[columna_indice]" />
            </td>
          </tr>
        </table>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { TablaCompuestaParametro as Parametro } from '@quiron/classes/dist/components/campos/edicion/elementos/CampoTablaCompuesta';
import { TiposElementos } from '@quiron/classes/dist/components/campos';

@Component({
  name: 'tabla-compuesta-parametro',
  components: {
    'mostrar-campo': MostrarCampo
  }
})
export default class TablaCompuestaParametro extends Vue {
  @PropSync('parametro') parametroSync: Parametro;
  @Prop() columnas: TiposElementos[];

  @Watch('columnas')
  public onColumnasChange(val: string[], oldval: string[]) {
    console.log('Cambio de columnas detectado');
    if (this.columnas.length > this.parametroSync.columnas.length) {
      this.$set(
        this.parametroSync.columnas,
        this.parametroSync.columnas.length,
        ''
      );
    } else if (this.columnas.length < this.parametroSync.columnas.length) {
      let i = 0;
      for (let columna of this.parametroSync.columnas) {
        if (columna != this.columnas[i]) {
          break;
        }
        i++;
      }
      this.$delete(this.parametroSync.columnas, i);
    }
  }
  public mounted() {
    if (this.parametroSync.columnas.length != this.columnas.length) {
      for (let columna of this.columnas) {
        this.$set(
          this.parametroSync.columnas,
          this.parametroSync.columnas.length,
          ''
        );
      }
    }
  }
}
</script>
<style>
.valor_parametro {
  background-color: #00cc00;
}
.valor_parametro:hover {
  background-color: #b80000;
}
</style>
