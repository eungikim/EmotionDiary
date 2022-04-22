import { useRef, useState } from "react";
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
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(targetId);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
