import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [r1, setR1] = useState(1.0);
  const [r2, setR2] = useState(1.0);
  const [r3, setR3] = useState(1.0);
  const [r4, setR4] = useState(1.0);
  const [r5, setR5] = useState(1.0);
  const [r6, setR6] = useState(1.0);
  const [r7, setR7] = useState(1.0);
  const [r8, setR8] = useState(1.0);
  const [r9, setR9] = useState(1.0);
  const [r10, setR10] = useState(1.0);
  const [r11, setR11] = useState(1.0);
  const [r12, setR12] = useState(1.0);


  const minRes = 0.4205267131328583;
  const maxRes = 26.24397850036621;

  const apiUrl = "https://e907-34-172-72-200.ngrok-free.app/calc";

  const handleCalculate = async () => {

    const vision = (r1+r2) * 50;
    const auditory = (r3+r4) * 50;
    const physical = (r5+r6) * 50;
    const emotional = (r8+r7) * 50;
    const self_ = (r9+r10) * 50;
    const communication = (r11+r12) * 50;
    
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}?vision=${vision}&auditory=${auditory}&physical=${physical}&emotional=${emotional}&self=${self_}&communication=${communication}`, {
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
      const tuned = (res-minRes) / (maxRes-minRes);
      if (tuned < 0) {
        setResult(0);
      } else {
        if (tuned > 1) {
          setResult(100);
        } else {
          setResult(tuned * 100);
        }
      }
    } catch (error) {
      console.error("Error calling the API:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{padding: "15px"}}>
      <h1>노인의 삶의 질 예측</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {/* 시각적 제한 */}
        <label>
          Q1: 어두운 곳이나 밝은 햇빛 아래에서 글씨를 읽는 것이 어렵다고 느낀 적이 있나요?
          
          <select
            value={r1}
            onChange={(e) => setR1(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q2: TV를 볼 때 화면 속 글씨나 사람의 얼굴을 분명하게 구별하기 어렵나요?
          <select
            value={r2}
            onChange={(e) => setR2(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        {/* 신체적 제한 */}
        <label>
          Q3: 혼자서 의자에서 일어나거나 앉을 때 어려움을 느낀 적이 있나요?
          <select
            value={r3}
            onChange={(e) => setR3(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q4: 무거운 물건을 들거나 높은 곳에 있는 물건을 잡는 것이 힘들다고 느낀 적이 있나요?
          <select
            value={r4}
            onChange={(e) => setR4(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        {/* 청각적 제한 */}
        <label>
          Q5: 여러 사람이 함께 이야기할 때 대화를 따라가기 어려운 경우가 있나요?
          <select
            value={r5}
            onChange={(e) => setR5(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q6: TV나 라디오의 볼륨을 다른 사람들보다 더 크게 해야 잘 들리나요?
          <select
            value={r6}
            onChange={(e) => setR6(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        {/* 자기관리 제한 */}
        <label>
          Q7: 혼자서 세수하거나 양치하는 것이 어렵다고 느낀 적이 있나요?
          <select
            value={r7}
            onChange={(e) => setR7(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q8: 옷을 입거나 벗는 데 도움을 받아야 할 때가 있나요?
          <select
            value={r8}
            onChange={(e) => setR8(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        {/* 정서적 만족도 */}
        <label>
          Q9: 하루 대부분을 기분 좋고 만족스럽게 보낸다고 느끼시나요?
          <select
            value={r9}
            onChange={(e) => setR9(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q10: 가족이나 친구들과의 관계에서 정서적으로 충분한 지지를 받고 있다고 생각하시나요?
          <select
            value={r10}
            onChange={(e) => setR10(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        {/* 의사소통 제한 */}
        <label>
          Q11: 전화 통화나 대면 대화에서 상대방이 말하는 내용을 이해하는 데 어려움을 느낀 적이 있나요?
          <select
            value={r11}
            onChange={(e) => setR11(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <label>
          Q12: 자신의 의사를 정확하게 전달하는 것이 어렵거나 답답하게 느껴질 때가 있나요?
          <select
            value={r12}
            onChange={(e) => setR12(e.target.value)}
          >
            <option value="1.0">매우 그렇다</option>
            <option value="2.0">그렇다</option>
            <option value="3.0">보통이다</option>
            <option value="4.0">아니다</option>
            <option value="5.0">전혀 아니다</option>
          </select>
        </label>
        <br />
        <div>
          <button onClick={handleCalculate} disabled={loading}>
            {loading ? "계산 중..." : "계산하기"}
          </button>
        </div>
      </div>

      {result !== null && (
        <div>
          <h2>
            결과:{" "}
            {result}점
          </h2>
        </div>
      )}

    </div>
  );
};

export default App;
