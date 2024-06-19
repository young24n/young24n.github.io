import React, { useState } from 'react';
import './App.css';
import professor from './professor';

function App() {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('검색하면 출력됨');

  const handleSearch = () => {
    const foundProfessor = professor.find((professor) => professor.name === name);
    if (foundProfessor) {
      setMajor(foundProfessor.major);
    } else {
      setMajor('그런 사람 여기 없수다');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <div className='you-need-margin50'>
        <span>이름을 입력하시오: </span>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>확인</button>
      </div>
      <div>
        <span>학과 : {major}</span>
      </div>
    </div>
  );
}

export default App;
