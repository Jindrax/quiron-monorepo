<template>
  <div ref="container" style="height: 300px">
    <q-resize-observer @resize="redimensionar" />
    <canvas ref="canvas" :height="canvasH" :width="canvasW" style="background: silver"></canvas>
    <div class="row justify-end">
      <q-btn @click="reiniciar_firma" style="width:100%">Limpiar</q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SignaturePad from 'signature_pad';

@Component
export default class PanelFirma extends Vue {
  public signature = null;
  public container = null;
  public canvas = null;
  public canvasH = 100;
  public canvasW = 100;
  public guardar_firma() {
    if(this.signature != null){
      return this.signature.toDataURL();
    }else{
      console.log("Error en la redimension del componente de firma");
    }
  }
  public reiniciar_firma() {
    this.signature.clear();
  }
  public redimensionar() {
    if (this.container != null && this.canvas != null) {
      if (this.canvasH != this.container.clientHeight - 47) {
        this.canvasH = this.container.clientHeight - 47;
      }
      if (this.canvasW != this.container.clientWidth) {
        this.canvasW = this.container.clientWidth;
      }
      this.signature = new SignaturePad(this.canvas, {
        dotSize: 3,
        minWidth: 1.5,
        maxWidth: 3.5,
        throttle: 1,
        minDistance: 5
      });
      this.signature.clear();
    }
  }
  public mounted() {
    this.container = this.$refs.container;
    this.canvas = this.$refs.canvas;
    this.canvas.getContext('2d').scale(0.1, 0.1);
    this.redimensionar();
  }
}
</script>
