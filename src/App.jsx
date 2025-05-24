import React, { useState } from "react";
import './App.css'; 

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [reg, setReg] = useState('강원특별자치도');
  const [year, setYear] = useState(2024);

  const apiUrl = "https://5cc9-34-106-52-67.ngrok-free.app/predict";

  const handleCalculate = async () => {

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/2025/${reg}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'  // ngrok 경고 페이지를 생략
        }
      });
      // 응답 내용 확인
      const textResponse = await response.text();
      console.log("Response Text:", textResponse);  // 응답 텍스트 출력
  
      // JSON 파싱 시도
      const data = JSON.parse(textResponse);
      console.log(data);
      const res = data.result;
      setResult(res);
    } catch (error) {
      console.error("Error calling the API:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center",flexDirection: "column", height: "100vh", gap: "20px"}}>
      <h1>산사태 발생 회수 예측</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label style={{fontSize: "20px", fontWeight: "700", color: "#107F4F"}}>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
            지역 선택
            <select
              value={reg}
              onChange={(e) => setReg(e.target.value)}
              style={{
                padding: "3px",
                fontSize: "16px",
                borderRadius: "3px",
                fontWeight: 400,
              }}
            >
              <option value={'강원특별자치도'}>강원특별자치도</option>
              <option value={'경기도'}>경기도</option>
              <option value={'경상남도'}>경상남도</option>
              <option value={'경상북도'}>경상북도</option>
              <option value={'광주광역시'}>광주광역시</option>
              <option value={'대구광역시'}>대구광역시</option>
              <option value={'대전광역시'}>대전광역시</option>
              <option value={'부산광역시'}>부산광역시</option>
              <option value={'서울특별시'}>서울특별시</option>
              <option value={'세종특별자치시'}>세종특별자치시</option>
              <option value={'울산광역시'}>울산광역시</option>
              <option value={'인천광역시'}>인천광역시</option>
              <option value={'전라남도'}>전라남도</option>
              <option value={'전북특별자치도'}>전북특별자치도</option>
              <option value={'제주특별자치도'}>제주특별자치도</option>
              <option value={'충청남도'}>충청남도</option>
              <option value={'충청북도'}>충청북도</option>
            </select>
          </div>
        </label>
        
        <label style={{fontSize: "20px", fontWeight: "700", color: "#107F4F"}}>
        <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
          연도
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
          </div>
        </label>
        <br />
          <button onClick={handleCalculate} disabled={loading} className="calc-button">
            {loading ? "계산 중..." : "계산하기"}
          </button>
      </div>

      {result !== null && (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <h2>
            결과:{" "}
            {result.toFixed(2)}회
          </h2>
          {`${year}년에 ${reg}에서 예측되는 산사태 발생 횟수입니다.`}
        </div>
      )}

    </div>
  );
};

export default App;
