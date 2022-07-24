export class DataSets {
  static random = {
    name: "Random",
    description: "Pseudorandom list of numbers between 0 and n",
    generate: (n) =>
      Array.from({ length: n }, () => Math.floor(Math.random() * n))
  };

  static sorted = {
    name: "Sorted",
    description: "Sequence of numbers from 0 to n",
    generate: (n) => Array.from({ length: n }, (_, i) => i)
  };

  static halfSorted = {
    name: "Half Sorted",
    description: "First half is sorted and second half is pseudorandom",
    generate: (n) =>
      DataSets.sorted.generate(n / 2).concat(DataSets.random.generate(n / 2))
  };

  static sortedHalf = {
    name: "Sorted Half",
    description: "First half is pseudorandom and second half is sorted",
    generate: (n) =>
      DataSets.random.generate(n / 2).concat(DataSets.sorted.generate(n / 2))
  };

  static semiSorted = {
    name: "Semi Sorted",
    description: "Alternates every 10 numbers between sorted and pseudorandom",
    generate: (n) =>
      Array.from({ length: n }, (_, i) => (i % 20 < 10 ? i : Math.random() * n))
  };

  static reversed = {
    name: "Reversed",
    description: "Sequence of numbers from n to 0",
    generate: (n) => DataSets.sorted.generate(n).reverse()
  };

  static same = {
    name: "Same",
    description: "Repeats n times the number n",
    generate: (n) => Array.from({ length: n }, () => n)
  };

  static zigzag = {
    name: "Zig Zag",
    description: "Interwoven sorted and reversed sequence",
    generate: (n) =>
      Array.from({ length: n }, (_, i) => (i % 2 === 0 ? i : n - i))
  };

  static sawtooth = {
    name: "Sawtooth",
    description: "Repeating sequence of 0 to √n",
    generate: (n) =>
      Array.from({ length: n }, (_, i) => i % Math.floor(Math.sqrt(n)))
  };

  static square = {
    name: "Square",
    description: "Jumps between the number 0 and n every √n",
    generate: (n) =>
      Array.from({ length: n }, (_, i) =>
        i % Math.sqrt(n) > 0.5 * Math.sqrt(n) ? n : 0
      )
  };

  static zeroes = {
    name: "Zeroes",
    description: "Repeats n times the number zero",
    generate: (n) => Array.from({ length: n }, () => 0)
  };

  static thousands = {
    name: "Thousands",
    description: "Pseudorandom list of numbers between 0 and 1000",
    generate: (n) =>
      Array.from({ length: n }, () => Math.floor(Math.random() * 1000))
  };

  static millions = {
    name: "Millions",
    description: "Pseudorandom list of numbers between 0 and 1000000",
    generate: (n) =>
      Array.from({ length: n }, () => Math.floor(Math.random() * 1000000))
  };

  static blender = {
    name: "Blender",
    description: "Mix of all generators",
    generate: (n) => {
      const result = DataSets.random.generate(n);
      if (n < 100) return result;
      const ingredients = DataSets.all.filter((x) => x.name !== "Blender");
      const size = Math.floor(n / ingredients.length) + 1;
      for (let i = 0; i < ingredients.length; i++) {
        const sub = ingredients[i].generate(n);
        const start = Math.floor(Math.random() * n);
        const end = Math.min(start + size, n);
        for (let j = start; j < end; j++) {
          result[j] = sub[j];
        }
      }
      return result;
    }
  };

  static all = [
    DataSets.random,
    DataSets.sorted,
    DataSets.halfSorted,
    DataSets.sortedHalf,
    DataSets.semiSorted,
    DataSets.reversed,
    DataSets.same,
    DataSets.zigzag,
    DataSets.sawtooth,
    DataSets.square,
    DataSets.zeroes,
    DataSets.thousands,
    DataSets.millions,
    DataSets.blender
  ];

  static combine(
    left,
    right,
    ratio = 0.5,
    name = `${left.name} - ${right.name}`
  ) {
    const leftRatio = ratio;
    const rightRatio = 1 - ratio;
    return {
      name,
      description: "Combination of two Data Sets",
      generate: (n) =>
        left
          .generate(Math.floor(n * leftRatio))
          .concat(right.generate(Math.floor(n * rightRatio)))
    };
  }

  static repeat(dataSet, times, group = false) {
    const dataSets = [];
    for (let i = 0; i < times; i++) {
      dataSets.push({
        name: group ? dataSet.name : `${dataSet.name} ${i}`,
        description: dataSet.description,
        generate: dataSet.generate
      });
    }
    return dataSets;
  }
}

export default DataSets;
