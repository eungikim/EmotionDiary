import { useState, useRef } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  created_date,
  emotion,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const toggleEdit = () => setEdit(!isEdit);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleEdit = () => {
    if (localContent.localContent < 4) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id} 번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleEdit();
    }
  };

  const handleQuitEdit = () => {
    setEdit(false);
    setLocalContent(content);
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
