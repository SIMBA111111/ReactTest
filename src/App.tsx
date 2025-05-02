import { useEffect, useReducer } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [results, dispatch] = useReducer(resultReducer, [])

  useEffect(() => {
    // Функция для выполнения запросов
    const fetchData = async () => {
      try {
        const res1 = await axios.get('http://89.169.1.160:8000/api/back1/back1');
        console.log("res1");
        handleAddString(res1.data);

        const res2 = await axios.get('http://89.169.1.160:3000/api/back2/back2');
        console.log("res2");
        handleAddString(res2.data);
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей, чтобы выполнить запрос только один раз при монтировании

  const handleAddString = (string: string) => {
    dispatch({ type: "add", string });
  };

  console.log('results', results);

  return (
    <>
      <div>
        {/* Здесь можно отобразить результаты */}
        Results: {JSON.stringify(results)}
      </div>
    </>
  );
}

export default App;

const resultReducer = (results: any, action: any) => {
  switch (action.type) {
    case "add": {
      console.log("add");
      
      return [
        ...results,
        action.string // добавляем строку, а не весь объект action
      ];
    }

    case "delete": {
      return results.filter((res: any) => res !== action.string);
    }

    default: // Не забывайте возвращать текущее состояние по умолчанию
      return results;
  }
}