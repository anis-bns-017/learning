import GraphViews from "./components/barchart/BarChart";
import FilteredList from "./components/UseMomoWithUseCallback/FIlterList";
import Timer from "./components/useRefHook/Times";
import AnimateBox from "./components/useRefHook/AnimateBox";
import ProfileForm from "./components/useState/ProfileForm";
import FetchData from "./components/useState/FetchData";
import WindowResize from "./components/useState/WindowResize";
import MouseTracker from "./components/useState/MouseTracker";
import CounterForReducer from "./components/useReducer/CounterExample";
import FormExample from "./components/useReducer/FormData";
import TodoApp from "./components/useReducer/TodoApp";
import DoubleReducer from "./components/useReducer/DoubleReducer";
import ExpensiveComputation from "./components/UseMomoWithUseCallback/ExpensiveComputation";
import FilteredListWithUseMemo from "./components/UseMomoWithUseCallback/FilteredList";
import AmazingTool from "./components/amazingTool/AmazingTool";
import AllChartTypes from "./components/barchart/BarChartWithFilter";
import TaskManager from "./components/projects/taskmanager/TaskManager";
import Todo from "./components/projects/Todo/MainTodo";

const App = () => {
  return (
    <>
      {/* Learning useState
      <ProfileForm />
      <FetchData />
      <WindowResize />
      <MouseTracker /> */}

      {/* Learning useReducer */}
      {/* <p className="text-5xl font-bold">Learning useReducer</p>
      <CounterForReducer />
      <FormExample />
      <TodoApp />
      <DoubleReducer /> */}

      {/* Some Tools */}
      {/* <AmazingTool /> */}

      {/* Learning useMemo */}
      {/* <p className="text-5xl font-bold">Learning </p>
      <ExpensiveComputation />
      <FilteredListWithUseMemo /> */}

      {/* Learning useRef */}
      {/* <FilteredList />
      <Timer />
      <AnimateBox /> */}

      {/* This is everything of barChart */}
      {/* <GraphViews /> */}
      {/* <AllChartTypes /> */}

      {/* Doing project */}
      <Todo />
    </>
  );
};

export default App;
