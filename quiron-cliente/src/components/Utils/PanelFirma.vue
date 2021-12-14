<template>
  <div ref="container" style="height: 300px">
    <q-resize-observer @resize="redimensionar"/>
    <div class="row">
      <q-btn @click="reiniciar_firma" class="full-width" label="Limpiar"/>
    </div>
    <canvas ref="canvas" :height="canvasH" :width="canvasW" style="background: silver"></canvas>
    <div class="row">
      <q-btn @click="guardar_firma" class="full-width" label="Guardar" :color="value===''? 'red' : 'green'"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import SignaturePad from 'signature_pad';

@Component
export default class PanelFirma extends Vue {
  @Prop() value: string;
  public signature = null;
  public container = null;
  public canvas = null;
  public canvasH = 100;
  public canvasW = 100;

  public guardar_firma() {
    this.$emit('input', this.signature.toDataURL());
  }

  public reiniciar_firma() {
    this.signature.clear();
    this.$emit('input', '');
  }

  public redimensionar(size) {
    if ((this.container != null, this.canvas != null)) {
      if (this.canvasH != this.container.clientHeight - 75) {
        this.canvasH = this.container.clientHeight - 75;
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
    this.redimensionar({width: 0, height: 0});
  }
}
</script>
