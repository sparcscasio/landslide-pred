import React, { useState } from "react";
import './App.css'; 

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [reg, setReg] = useState('강원특별자치도');
  const [year, setYear] = useState(2024);
  const [humd1, setHumd1] = useState(1.0);
  const [humd2, setHumd2] = useState(1.0);
  const [humd3, setHumd3] = useState(1.0);

  const [temp1, setTemp1] = useState(1.0);
  const [temp2, setTemp2] = useState(1.0);
  const [temp3, setTemp3] = useState(1.0);

  const [wind1, setWind1] = useState(1.0);
  const [wind2, setWind2] = useState(1.0);
  const [wind3, setWind3] = useState(1.0);

  const [perp1, setPerp1] = useState(1.0);
  const [perp2, setPerp2] = useState(1.0);
  const [perp3, setPerp3] = useState(1.0);

  const apiUrl = "https://be0e-35-231-81-149.ngrok-free.app//predict";

  const handleCalculate = async () => {
    console.log(`${apiUrl}/${parseFloat(humd1).toFixed(2)}&${parseFloat(temp1).toFixed(2)}&${parseFloat(perp1).toFixed(2)}&${parseFloat(wind1).toFixed(2)}/${parseFloat(humd2).toFixed(2)}&${parseFloat(temp2).toFixed(2)}&${parseFloat(perp2).toFixed(2)}&${parseFloat(wind2).toFixed(2)}/${parseFloat(humd3).toFixed(2)}&${parseFloat(temp3).toFixed(2)}&${parseFloat(perp3).toFixed(2)}&${parseFloat(wind3).toFixed(2)}/${reg}`);
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/${parseFloat(humd1).toFixed(2)}&${parseFloat(temp1).toFixed(2)}&${parseFloat(perp1).toFixed(2)}&${parseFloat(wind1).toFixed(2)}/${parseFloat(humd2).toFixed(2)}&${parseFloat(temp2).toFixed(2)}&${parseFloat(perp2).toFixed(2)}&${parseFloat(wind2).toFixed(2)}/${parseFloat(humd3).toFixed(2)}&${parseFloat(temp3).toFixed(2)}&${parseFloat(perp3).toFixed(2)}&${parseFloat(wind3).toFixed(2)}/${reg}`, {
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
        <label style={{fontSize: "20px", fontWeight: "700", color: "#107F4F"}}>
        <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
          {year-3}의 환경변수
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 온도
          <input type="number" value={temp1} onChange={(e) => setTemp1(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              °C
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 습도
          <input type="number" value={humd1} onChange={(e) => setHumd1(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              %rh
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            연간 강수량
          <input type="number" value={perp1} onChange={(e) => setPerp1(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              mm
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 풍속
          <input type="number" value={wind1} onChange={(e) => setWind1(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              m/s
          </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
          {year-2}의 환경변수
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 온도
          <input type="number" value={temp2} onChange={(e) => setTemp2(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              °C
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 습도
          <input type="number" value={humd2} onChange={(e) => setHumd2(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              %rh
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            연간 강수량
          <input type="number" value={perp2} onChange={(e) => setPerp2(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              mm
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 풍속
          <input type="number" value={wind2} onChange={(e) => setWind2(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              m/s
          </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
          {year-1}의 환경변수
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 온도
          <input type="number" value={temp3} onChange={(e) => setTemp3(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              °C
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 습도
          <input type="number" value={humd3} onChange={(e) => setHumd3(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              %rh
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            연간 강수량
          <input type="number" value={perp3} onChange={(e) => setPerp3(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              mm
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", fontSize: "15px", color: "black"}}>
            평균 풍속
          <input type="number" value={wind3} onChange={(e) => setWind3(parseFloat(e.target.value))}               
              style={{
                padding: "3px",
                fontSize: "16px",
                fontWeight: 400,
              }}/>
              m/s
          </div>
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
            {(result).toFixed(2)}회
          </h2>
          {`${year}년에 ${reg}에서 예측되는 산사태 발생 횟수입니다.`}
        </div>
      )}

    </div>
  );
};

export default App;
