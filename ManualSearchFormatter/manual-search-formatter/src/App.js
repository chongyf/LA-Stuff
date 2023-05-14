import { useState } from 'react'
import SearchCode from './components/SearchCode'
import WhatToFind from './components/WhatToFind'
import ConvertData from './components/AccInputBoxes/ConvertData'
import DesiredEngrs from './components/DesiredEngrs'
import DesiredStats from './components/DesiredStats'
import raw from '../src/convertToIcePeng.py'

function App() {
  const [searchCombis, setSearchCombis] = useState([])  
  const [selectedEngrs, setSelectedEngrs] = useState([
    "", "", "", "", "", ""])
  const [selectedStats, setSelectedStats] = useState([
    0, 0, 0])

  const rMapping = {
    "": "",
    "Adrenaline": "아드레날린",
    "All-Out Attack": "속전속결",
    "Awakening": "각성",
    "Barricade": "바리케이드",
    "Broken Bone": "부러진 뼈",
    "Contender": "승부사",
    "Crisis Evasion": "위기 모면",
    "Crushing Fist": "분쇄의 주먹",
    "Cursed Doll": "저주받은 인형",
    "Disrespect": "약자 무시",
    "Divine Protection": "여신의 가호",
    "Drops of Ether": "구슬동자",
    "Emergency Rescue": "긴급구조",
    "Enhanced Shield": "강화 방패",
    "Ether Predator": "에테르 포식자",
    "Expert": "전문의",
    "Explosive Expert": "폭발물 전문가",
    "Fortitude": "불굴",
    "Grudge": "원한",
    "Heavy Armor": "중갑 착용",
    "Hit Master": "타격의 대가",
    "Increase Mass": "질량 증가", // Increases Mass
    "Keen Blunt Weapon": "예리한 둔기",
    "Lightning Fury": "번개의 분노",
    "MP Efficiency Increase": "마나 효율 증가",
    "Magick Stream": "마나의 흐름",
    "Master Brawler": "결투의 대가",
    "Ambush Master": "기습의 대가",
    "Master of Escape": "탈출의 명수",
    "Master's Tenacity": "달인의 저력",
    "Max MP Increase": "최대 마나 증가",
    "Necromancy": "강령술",
    "Precise Dagger": "정밀 단도",
    "Preemptive Strike": "선수필승",
    "Propulsion": "추진력",
    "Raid Captain": "돌격대장",
    "Shield Piercing": "실드 관통",
    "Sight Focus": "시선 집중",
    "Spirit Absorption": "정기 흡수",
    "Stabilized Status": "안정된 상태",
    "Strong Will": "굳은 의지",
    "Super Charge": "슈퍼 차지",
    "Vital Point Hit": "급소 타격",
    "Barrage Enhancement": "포격 강화",
    "Firepower Enhancement": "화력 강화",
    "True Courage": "진실된 용맹",
    "Desperate Salvation": "절실한 구원",
    "Mayhem": "광기",
    "Berserker's Technique": "광전사의 비기",
    "Enhanced Weapon": "강화 무기",
    "Pistoleer": "핸드거너",
    "Surge": "버스트",
    "Remaining Energy": "잔재된 기운",
    "Lone Knight": "고독한 기사",
    "Combat Readiness": "전투 태세",
    "Time To Hunt": "사냥의 시간", // Time to Hunt
    "Peacemaker": "피스메이커",
    "Blessed Aura": "축복의 오라",
    "Judgement": "심판자",
    "Ultimate Skill: Taijutsu": "극의: 체술",
    "Shock Training": "충격 단련",
    "Demonic Impulse": "멈출 수 없는 충동",
    "Perfect Suppression": "완벽한 억제",
    "Death Strike": "죽음의 습격",
    "Loyal Companion": "두 번째 동료",
    "Reflux": "환류",
    "Igniter": "점화",
    "Energy Overflow": "세맥타통",
    "Robust Spirit": "역천지체",
    "Esoteric Flurry": "오의난무",
    "Deathblow": "일격필살",
    "Esoteric Skill Enhancement": "오의 강화",
    "First Intention": "초심",
    "Pinnacle": "절정",
    "Control": "절제",
    "Rage Hammer": "분노의 망치",
    "Gravity Training": "중력 수련",
    "Arthetinean Skill": "진화의 유산",
    "Evolutionary Legacy": "아르데타인의 기술",   
    "Empress's Grace": "황후의 은총",
    "Order of the Emperor": "황제의 칙령",
    "Lunar Voice": "달의 소리",
    "Hunger": "갈증",
    "Master Summoner": "상급 소환사",
    "Communication Overflow": "넘치는 교감",
    "Full Bloom": "만개",
    "Recurrence": "회귀",
    "Predator": "포식자",
    "Punisher": "처단자",
    "Any": "잡옵",
  }

  const mapping = {
    "": "",
    "아드레날린": "Adrenaline",
    "속전속결": "All-Out Attack",
    "각성": "Awakening",
    "바리케이드": "Barricade",
    "부러진 뼈": "Broken Bone",
    "승부사": "Contender",
    "위기 모면": "Crisis Evasion",
    "분쇄의 주먹": "Crushing Fist",
    "저주받은 인형": "Cursed Doll",
    "약자 무시": "Disrespect",
    "여신의 가호": "Divine Protection",
    "구슬동자": "Drops of Ether",
    "긴급구조": "Emergency Rescue",
    "강화 방패": "Enhanced Shield",
    "에테르 포식자": "Ether Predator",
    "전문의": "Expert",
    "폭발물 전문가": "Explosive Expert",
    "불굴": "Fortitude",
    "원한": "Grudge",
    "중갑 착용": "Heavy Armor",
    "타격의 대가": "Hit Master",
    "질량 증가": "Increase Mass",
    "예리한 둔기": "Keen Blunt Weapon",
    "번개의 분노": "Lightning Fury",
    "마나 효율 증가": "MP Efficiency Increase",
    "마나의 흐름": "Magick Stream",
    "결투의 대가": "Master Brawler",
    "기습의 대가": "Ambush Master",
    "탈출의 명수": "Master of Escape",
    "달인의 저력": "Master's Tenacity",
    "최대 마나 증가": "Max MP Increase",
    "강령술": "Necromancy",
    "정밀 단도": "Precise Dagger",
    "선수필승": "Preemptive Strike",
    "추진력": "Propulsion",
    "돌격대장": "Raid Captain",
    "실드 관통": "Shield Piercing",
    "시선 집중": "Sight Focus",
    "정기 흡수": "Spirit Absorption",
    "안정된 상태": "Stabilized Status",
    "굳은 의지": "Strong Will",
    "슈퍼 차지": "Super Charge",
    "급소 타격": "Vital Point Hit",
    "포격 강화": "Barrage Enhancement",
    "화력 강화": "Firepower Enhancement",
    "진실된 용맹": "True Courage",
    "절실한 구원": "Desperate Salvation",
    "광기": "Mayhem",
    "광전사의 비기": "Berserker's Technique",
    "강화 무기": "Enhanced Weapon",
    "핸드거너": "Pistoleer",
    "버스트": "Surge",
    "잔재된 기운": "Remaining Energy",
    "고독한 기사": "Lone Knight",
    "전투 태세": "Combat Readiness",
    "사냥의 시간": "Time To Hunt",
    "피스메이커": "Peacemaker",
    "축복의 오라": "Blessed Aura",
    "심판자": "Judgement",
    "극의: 체술": "Ultimate Skill: Taijutsu",
    "충격 단련": "Shock Training",
    "멈출 수 없는 충동": "Demonic Impulse",
    "완벽한 억제": "Perfect Suppression",
    "죽음의 습격": "Death Strike",
    "두 번째 동료": "Loyal Companion",
    "환류": "Reflux",
    "점화": "Igniter",
    "세맥타통": "Energy Overflow",
    "역천지체": "Robust Spirit",
    "오의난무": "Esoteric Flurry",
    "일격필살": "Deathblow",
    "오의 강화": "Esoteric Skill Enhancement",
    "초심": "First Intention",
    "절정": "Pinnacle",
    "절제": "Control",
    "분노의 망치": "Rage Hammer",
    "중력 수련": "Gravity Training",
    "진화의 유산": "Arthetinean Skill",
    "아르데타인의 기술": "Evolutionary Legacy",
    "황후의 은총": "Empress's Grace",
    "황제의 칙령": "Order of the Emperor",
    "달의 소리": "Lunar Voice",
    "갈증": "Hunger",
    "상급 소환사": "Master Summoner",
    "넘치는 교감": "Communication Overflow",
    "만개": "Full Bloom",
    "회귀": "Recurrence",
    "포식자": "Predator",
    "처단자": "Punisher",
    "잡옵": "Any"
  }

  const statMapping = {
    "": 0,
    "crit": 15,
    "specialization": 16,
    "domination": 17,
    "swiftness": 18,
    "endurance": 19,
    "expertise": 20
  }

  const malusMapping = {
    "atk-spd-red": "공격속도 감소",
    "move-spd-red": "이동속도 감소",
    "atk-pow-red": "공격력 감소",
    "def-red": "방어력 감소"
  }

  const typeMapping = {
    "ring": "반지",
    "necklace": "목걸이",
    "earring": "귀걸이"
  }

  // Output Object
  const [output, setOutput] = useState({})

  // Set Output Object
  const onConvertData = (code) => {
    var tempObj = JSON.parse(code)
    setOutput(tempObj)
    console.log(tempObj)
  }

  async function pythonExec(data) {

    let getData = {
      getData : function() {
        return data
      }
    };

    let getOutput = {
      getOutput : function() {
        return JSON.stringify(output)
      }
    };

    let getDesiredEngr = {
      getDesiredEngr : function() {
        return JSON.stringify(selectedEngrs)
      }
    }

    let getDesiredStat = {
      getDesiredStat : function() {
        return JSON.stringify(selectedStats)
      }
    }

    const pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.0/full/"
    });

    // console.log(raw)
    const script = await fetch(raw)
    // console.log(script)
    const scriptText = await script.text();
    // console.log(scriptText)

    pyodide.registerJsModule("dataModule", getData)
    pyodide.registerJsModule("outputModule", getOutput)
    pyodide.registerJsModule("selectedEngrModule", getDesiredEngr)
    pyodide.registerJsModule("selectedStatModule", getDesiredStat)

    pyodide.runPythonAsync(scriptText);
  }

  // Submit Code
  const addCode = (code) => {

    // Extract engraving array out from code
    var pos = code.indexOf("getSearchResult([")
    code = code.substring(pos + 16);
    pos = code.indexOf("]")
    code = code.substring(0, pos + 1)

    // Translate search string
    for (var key in mapping) {
      if (mapping.hasOwnProperty(key)) {
        //console.log(key + " -> " + mapping[key]);
        code = code.replaceAll(key, mapping[key])
      }
    }

    var tempObj = JSON.parse(code)
    console.log(tempObj)
    tempObj = tempObj.sort((a, b) => {
      return JSON.stringify(a) > JSON.stringify(b)
    })

    // Update state
    setSearchCombis(tempObj.sort((a, b) => {
      var strA = JSON.stringify(a)
      var strB = JSON.stringify(b)
      return strA > strB ? 1 : (strB > strA ? -1 : 0)
    }))

    const newOutput = {}

    // Initialise result object
    tempObj.map((obj) => {
      var str = ""
      str = Object.keys(obj)[0] + "_" + Object.values(obj)[0] + "_"
        + Object.keys(obj)[1] + "_" + Object.values(obj)[1]

      for (var key in rMapping) {
        if (rMapping.hasOwnProperty(key)) {
          str = str.replaceAll(key, rMapping[key])
        }
      }

      const str1 = str + "_목걸이"
      const str2 = str + "_귀걸이1"
      const str3 = str + "_귀걸이2"
      const str4 = str + "_반지1"
      const str5 = str + "_반지2"

      newOutput[[str1]] = []
      newOutput[[str2]] = []
      newOutput[[str3]] = []
      newOutput[[str4]] = []
      newOutput[[str5]] = []
    })

    setOutput(newOutput)
    console.log(newOutput)
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <DesiredEngrs engrMapping={rMapping} getEngr={selectedEngrs} setEngr={setSelectedEngrs} />
      <DesiredStats stats={statMapping} getStats={selectedStats} setStats={setSelectedStats} />
      <SearchCode onAddCode={addCode} />
      <WhatToFind searchCombis={searchCombis} />
      <ConvertData onSetObject={pythonExec} />
    </div>
  );
}

export default App;
