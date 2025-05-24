# How to run this project

Flask server (Google colab) : https://colab.research.google.com/drive/1ox23xK641R9zeH5F4euZ-dAn57iHMfmd#scrollTo=9IFRxyf-gXEn
1) 'data1.csv' & 'data2.csv' 업로드
2) 모든 셀 실행하기
3) 마지막에서 2번쨰 셀 실행 결과로부터 ngrok tunnel 링크 얻기 (https://{id}.ngrok-free.app/ 형식)
4) App.jsx 10번 line 수정 -> "https://{id}.ngrok-free.app/calc"
5) terminal에서 git add . -> git commit -m "new commit" -> git push -u origin main -> npm run deploy
6) https://sparcscasio.github.io/landslide-pred/ 재접속
