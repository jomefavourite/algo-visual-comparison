import Algorithm from "./algorithm";
import { Complexities } from "../complexities";

export default class HeapSort extends Algorithm {
  name = "Heap Sort";
  timeComplexityBest = Complexities.linearithmic;
  timeComplexityAverage = Complexities.linearithmic;
  timeComplexityWorst = Complexities.linearithmic;

  execute(array) {
    this.buildHeap(array);
    for (let i = array.length - 1; i > 0; i--) {
      this.swap(array, 0, i);
      this.heapify(array, 0, i);
    }
  }

  buildHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      this.incrementOpCounter();
      this.heapify(array, i, array.length);
    }
  }

  heapify(array, i, length) {
    this.incrementOpCounter();
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < length && array[left] > array[largest]) {
      largest = left;
    }

    if (right < length && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(array, i, largest);
      this.heapify(array, largest, length);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}
