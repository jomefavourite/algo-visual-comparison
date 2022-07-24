import Algorithm from "./algorithm";
import { Complexities } from "../complexities";

export default class QuickSort extends Algorithm {
  name = "Quick Sort";
  timeComplexityBest = Complexities.linearithmic;
  timeComplexityAverage = Complexities.linearithmic;
  timeComplexityWorst = Complexities.quadratic;

  execute(array) {
    this.quickSort(array);
  }

  swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  partition(array, left, right) {
    let q = left;
    let i;
    for (i = left; i < right; i++) {
      if (array[i] < array[right]) {
        this.swap(array, i, q);
        q++;
      }
      this.incrementOpCounter();
    }
    this.swap(array, i, q);
    return q;
  }

  quickSort(array, left = 0, right = array.length - 1) {
    this.incrementOpCounter();
    if (left < right) {
      const pivot = this.partition(array, left, right);
      this.quickSort(array, left, pivot - 1);
      this.quickSort(array, pivot + 1, right);
    }
    return array;
  }
}
