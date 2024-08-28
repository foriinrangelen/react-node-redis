// import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import TodoHome from './pages/TodoHome';

function App() {
  const [hostName, setHostName] = useState();
  const [visit, setVisit] = useState();

    useEffect(() => {
      const fetchHostAndVisit = async () => {
        try {
          console.log("들어옴")
          const response = await fetch('http://localhost:5000/api'); // API URL 수정
          if (!response.ok) {
            throw new Error('네트워크 요청이 실패했습니다.');
          }
          // console.log(response)
          const data = await response.json();
          setHostName(data.hostName)
          setVisit(data.visitNumber)
        } catch (error) {
          console.error('에러:', error);
        }
      };
  
      fetchHostAndVisit();
    }, []);
  
  return (
    <div>
      <TodoHome
      hostName={hostName}
      visit={visit}
      />
    </div>
  );
}

export default App;
