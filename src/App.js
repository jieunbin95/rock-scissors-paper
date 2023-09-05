import {useState} from 'react'
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개(타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3-4번의 결과를 가지고 승패를 결정한다
// 6. 승패결과에 따라 이기면 초록색, 지면 빨간색, 비기면 검은테두리로 바뀐다

const choice={
  rock:{
    name:'Rock',
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissors:{
    name:'Scissors',
    img:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2046745172/B.jpg?280000000"
  },
  paper:{
    name:'Paper',
    img:"https://www.aph.org/app/uploads/2019/04/1-04851-00_BL_Notebook_Paper_Punch_G-600x735.jpg"
  }
  
}

function App() {
  const [userSelect,setUserSelect]=useState(null)
  const [computerSelect,setComputerSelect]=useState(null)
  const [result,setResult]=useState("")

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])

    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)

    setResult(judgement(choice[userChoice],computerChoice))
  }

  const judgement =(user,computer)=>{
    console.log(user,computer)

    if(user.name === computer.name){
      return "tie"
    } else if(user.name==='Rock')return computer.name==="Scissors"?"win":"lose"
      else if(user.name==="Scissors")return computer.name==="Paper"?"win":"lose"
      else if(user.name==="Paper")return computer.name==="Rock"?"win":"lose"
  
  }

  const randomChoice=()=>{
    let itemArray= Object.keys(choice) //객체에 키값만 뽑아 배열로 만들어주는 함수
    
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final=itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <h1>가위 바위 보 게임</h1>
      </div>

      <div className="main">
        <Box title="USER" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={result}/>
      </div>

      <div className="main">
        <button onClick={()=>play('scissors')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>  
        {/* play()로 입력할 경우 리액트에서는 함수실행형식으로 인식해 입력하자마자 바로 실행 해버림
         따라서 앞에 ()=> 를 넣어 콜백함수 형태로 입력해주야함*/}
      </div>
    </div>
  );
}

export default App;