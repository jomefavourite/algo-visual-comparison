import "./styles.css";
import ComplexityChart from "./ComplexityChart";
import ComplexitySeries from "./ComplexitySeries";
import AnalysisSeries from "./AnalysisSeries";
import Algorithms from "./algorithms/index";
import DataSets from "./DataSets";

export default function App() {
  return (
    <div className="App">
      {/* <ComplexityChart title="Time complexity of sorting algorithms on a sorted list of numbers">
        <ComplexitySeries />
        <AnalysisSeries
          id="bubble-sort-sorted"
          algorithms={[Algorithms.bubbleSort]}
          dataSets={[DataSets.sorted]}
        />
      </ComplexityChart>
      <ComplexityChart title="Time complexity of sorting algorithms on a random list of numbers">
        <ComplexitySeries />
        <AnalysisSeries
          id="bubble-sort-random"
          algorithms={[Algorithms.bubbleSort, Algorithms.selectionSort]}
          dataSets={[DataSets.all]}
          // scatter={true}
        />
      </ComplexityChart> */}

      <ComplexityChart title="Time complexity of linearithmic algorithms on various lists of numbers">
        <ComplexitySeries />
        <AnalysisSeries
          // id="all-algorithms-random"
          algorithms={[
            Algorithms.bubbleSort,
            Algorithms.insertionSort,
            Algorithms.selectionSort
          ]}
          dataSets={[DataSets.sorted]}
          // scatter={true}
        />
      </ComplexityChart>
      <ComplexityChart title="Time complexity of linearithmic algorithms on various lists of numbers">
        <ComplexitySeries />
        <AnalysisSeries
          id="all-algorithms-random"
          algorithms={[
            Algorithms.bubbleSort,
            Algorithms.insertionSort,
            Algorithms.selectionSort
          ]}
          dataSets={[DataSets.random]}
          // scatter={true}
        />
      </ComplexityChart>
    </div>
  );
}
