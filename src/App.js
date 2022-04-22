import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "오늘도 쓴다.",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "가람이",
    content: "오늘도 쓴다.",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "양세훈",
    content: "오늘도 쓴다.",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "신정환",
    content: "오늘도 쓴다.",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "이정환",
    content: "오늘도 쓴다.",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
