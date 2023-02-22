import json

# 1. Get engraving combinations from icepeng
# 2. input into react
# 3. Parse Accessories
# 4. Update Desire Engravings, Stats here
# 5. Copy the initial object from react into here
# 6. Run noBuyRemover then this script

desiredEngrs = ["Lunar Voice", "Grudge", "Ambush Master", "Cursed Doll", "Keen Blunt Weapon"]
desiredStats = [16, 15]

    # case 15: return ["치명", value] # crit
    # case 16: return ["특화", value] # spec
    # case 17: return ["제압", value] # dom
    # case 18: return ["신속", value] # swift
    # case 19: return ["인내", value] # endurance
    # case 20: return ["숙련", value] # expertise
    
errCount = 0

output = {
    "달의 소리_3_원한_3_목걸이": [],
    "달의 소리_3_원한_3_귀걸이1": [],
    "달의 소리_3_원한_3_귀걸이2": [],
    "달의 소리_3_원한_3_반지1": [],
    "달의 소리_3_원한_3_반지2": [],
    "원한_3_저주받은 인형_5_목걸이": [],
    "원한_3_저주받은 인형_5_귀걸이1": [],
    "원한_3_저주받은 인형_5_귀걸이2": [],
    "원한_3_저주받은 인형_5_반지1": [],
    "원한_3_저주받은 인형_5_반지2": [],
    "기습의 대가_3_예리한 둔기_4_목걸이": [],
    "기습의 대가_3_예리한 둔기_4_귀걸이1": [],
    "기습의 대가_3_예리한 둔기_4_귀걸이2": [],
    "기습의 대가_3_예리한 둔기_4_반지1": [],
    "기습의 대가_3_예리한 둔기_4_반지2": [],
    "저주받은 인형_5_예리한 둔기_3_목걸이": [],
    "저주받은 인형_5_예리한 둔기_3_귀걸이1": [],
    "저주받은 인형_5_예리한 둔기_3_귀걸이2": [],
    "저주받은 인형_5_예리한 둔기_3_반지1": [],
    "저주받은 인형_5_예리한 둔기_3_반지2": [],
    "원한_3_예리한 둔기_4_목걸이": [],
    "원한_3_예리한 둔기_4_귀걸이1": [],
    "원한_3_예리한 둔기_4_귀걸이2": [],
    "원한_3_예리한 둔기_4_반지1": [],
    "원한_3_예리한 둔기_4_반지2": [],
    "기습의 대가_3_저주받은 인형_5_목걸이": [],
    "기습의 대가_3_저주받은 인형_5_귀걸이1": [],
    "기습의 대가_3_저주받은 인형_5_귀걸이2": [],
    "기습의 대가_3_저주받은 인형_5_반지1": [],
    "기습의 대가_3_저주받은 인형_5_반지2": [],
    "달의 소리_3_기습의 대가_3_목걸이": [],
    "달의 소리_3_기습의 대가_3_귀걸이1": [],
    "달의 소리_3_기습의 대가_3_귀걸이2": [],
    "달의 소리_3_기습의 대가_3_반지1": [],
    "달의 소리_3_기습의 대가_3_반지2": [],
    "달의 소리_3_저주받은 인형_5_목걸이": [],
    "달의 소리_3_저주받은 인형_5_귀걸이1": [],
    "달의 소리_3_저주받은 인형_5_귀걸이2": [],
    "달의 소리_3_저주받은 인형_5_반지1": [],
    "달의 소리_3_저주받은 인형_5_반지2": [],
    "원한_3_기습의 대가_3_목걸이": [],
    "원한_3_기습의 대가_3_귀걸이1": [],
    "원한_3_기습의 대가_3_귀걸이2": [],
    "원한_3_기습의 대가_3_반지1": [],
    "원한_3_기습의 대가_3_반지2": [],
    "원한_3_예리한 둔기_3_목걸이": [],
    "원한_3_예리한 둔기_3_귀걸이1": [],
    "원한_3_예리한 둔기_3_귀걸이2": [],
    "원한_3_예리한 둔기_3_반지1": [],
    "원한_3_예리한 둔기_3_반지2": [],
    "기습의 대가_3_예리한 둔기_3_목걸이": [],
    "기습의 대가_3_예리한 둔기_3_귀걸이1": [],
    "기습의 대가_3_예리한 둔기_3_귀걸이2": [],
    "기습의 대가_3_예리한 둔기_3_반지1": [],
    "기습의 대가_3_예리한 둔기_3_반지2": [],
    "달의 소리_3_예리한 둔기_3_목걸이": [],
    "달의 소리_3_예리한 둔기_3_귀걸이1": [],
    "달의 소리_3_예리한 둔기_3_귀걸이2": [],
    "달의 소리_3_예리한 둔기_3_반지1": [],
    "달의 소리_3_예리한 둔기_3_반지2": [],
    "달의 소리_3_예리한 둔기_4_목걸이": [],
    "달의 소리_3_예리한 둔기_4_귀걸이1": [],
    "달의 소리_3_예리한 둔기_4_귀걸이2": [],
    "달의 소리_3_예리한 둔기_4_반지1": [],
    "달의 소리_3_예리한 둔기_4_반지2": [],
    "원한_3_저주받은 인형_4_목걸이": [],
    "원한_3_저주받은 인형_4_귀걸이1": [],
    "원한_3_저주받은 인형_4_귀걸이2": [],
    "원한_3_저주받은 인형_4_반지1": [],
    "원한_3_저주받은 인형_4_반지2": [],
    "저주받은 인형_3_예리한 둔기_5_목걸이": [],
    "저주받은 인형_3_예리한 둔기_5_귀걸이1": [],
    "저주받은 인형_3_예리한 둔기_5_귀걸이2": [],
    "저주받은 인형_3_예리한 둔기_5_반지1": [],
    "저주받은 인형_3_예리한 둔기_5_반지2": [],
    "기습의 대가_3_저주받은 인형_4_목걸이": [],
    "기습의 대가_3_저주받은 인형_4_귀걸이1": [],
    "기습의 대가_3_저주받은 인형_4_귀걸이2": [],
    "기습의 대가_3_저주받은 인형_4_반지1": [],
    "기습의 대가_3_저주받은 인형_4_반지2": [],
    "달의 소리_3_저주받은 인형_3_목걸이": [],
    "달의 소리_3_저주받은 인형_3_귀걸이1": [],
    "달의 소리_3_저주받은 인형_3_귀걸이2": [],
    "달의 소리_3_저주받은 인형_3_반지1": [],
    "달의 소리_3_저주받은 인형_3_반지2": [],
    "기습의 대가_3_예리한 둔기_5_목걸이": [],
    "기습의 대가_3_예리한 둔기_5_귀걸이1": [],
    "기습의 대가_3_예리한 둔기_5_귀걸이2": [],
    "기습의 대가_3_예리한 둔기_5_반지1": [],
    "기습의 대가_3_예리한 둔기_5_반지2": [],
    "원한_3_예리한 둔기_5_목걸이": [],
    "원한_3_예리한 둔기_5_귀걸이1": [],
    "원한_3_예리한 둔기_5_귀걸이2": [],
    "원한_3_예리한 둔기_5_반지1": [],
    "원한_3_예리한 둔기_5_반지2": [],
    "달의 소리_3_저주받은 인형_4_목걸이": [],
    "달의 소리_3_저주받은 인형_4_귀걸이1": [],
    "달의 소리_3_저주받은 인형_4_귀걸이2": [],
    "달의 소리_3_저주받은 인형_4_반지1": [],
    "달의 소리_3_저주받은 인형_4_반지2": [],
    "원한_3_저주받은 인형_3_목걸이": [],
    "원한_3_저주받은 인형_3_귀걸이1": [],
    "원한_3_저주받은 인형_3_귀걸이2": [],
    "원한_3_저주받은 인형_3_반지1": [],
    "원한_3_저주받은 인형_3_반지2": [],
    "기습의 대가_3_저주받은 인형_3_목걸이": [],
    "기습의 대가_3_저주받은 인형_3_귀걸이1": [],
    "기습의 대가_3_저주받은 인형_3_귀걸이2": [],
    "기습의 대가_3_저주받은 인형_3_반지1": [],
    "기습의 대가_3_저주받은 인형_3_반지2": [],
    "달의 소리_3_예리한 둔기_5_목걸이": [],
    "달의 소리_3_예리한 둔기_5_귀걸이1": [],
    "달의 소리_3_예리한 둔기_5_귀걸이2": [],
    "달의 소리_3_예리한 둔기_5_반지1": [],
    "달의 소리_3_예리한 둔기_5_반지2": [],
    "예리한 둔기_5_잡옵_3_목걸이": [],
    "예리한 둔기_5_잡옵_3_귀걸이1": [],
    "예리한 둔기_5_잡옵_3_귀걸이2": [],
    "예리한 둔기_5_잡옵_3_반지1": [],
    "예리한 둔기_5_잡옵_3_반지2": [],
    "저주받은 인형_5_잡옵_3_목걸이": [],
    "저주받은 인형_5_잡옵_3_귀걸이1": [],
    "저주받은 인형_5_잡옵_3_귀걸이2": [],
    "저주받은 인형_5_잡옵_3_반지1": [],
    "저주받은 인형_5_잡옵_3_반지2": [],
    "원한_3_기습의 대가_5_목걸이": [],
    "원한_3_기습의 대가_5_귀걸이1": [],
    "원한_3_기습의 대가_5_귀걸이2": [],
    "원한_3_기습의 대가_5_반지1": [],
    "원한_3_기습의 대가_5_반지2": [],
    "기습의 대가_5_예리한 둔기_3_목걸이": [],
    "기습의 대가_5_예리한 둔기_3_귀걸이1": [],
    "기습의 대가_5_예리한 둔기_3_귀걸이2": [],
    "기습의 대가_5_예리한 둔기_3_반지1": [],
    "기습의 대가_5_예리한 둔기_3_반지2": [],
    "저주받은 인형_3_예리한 둔기_4_목걸이": [],
    "저주받은 인형_3_예리한 둔기_4_귀걸이1": [],
    "저주받은 인형_3_예리한 둔기_4_귀걸이2": [],
    "저주받은 인형_3_예리한 둔기_4_반지1": [],
    "저주받은 인형_3_예리한 둔기_4_반지2": [],
    "기습의 대가_5_저주받은 인형_3_목걸이": [],
    "기습의 대가_5_저주받은 인형_3_귀걸이1": [],
    "기습의 대가_5_저주받은 인형_3_귀걸이2": [],
    "기습의 대가_5_저주받은 인형_3_반지1": [],
    "기습의 대가_5_저주받은 인형_3_반지2": [],
    "달의 소리_3_기습의 대가_5_목걸이": [],
    "달의 소리_3_기습의 대가_5_귀걸이1": [],
    "달의 소리_3_기습의 대가_5_귀걸이2": [],
    "달의 소리_3_기습의 대가_5_반지1": [],
    "달의 소리_3_기습의 대가_5_반지2": [],
    "저주받은 인형_3_예리한 둔기_3_목걸이": [],
    "저주받은 인형_3_예리한 둔기_3_귀걸이1": [],
    "저주받은 인형_3_예리한 둔기_3_귀걸이2": [],
    "저주받은 인형_3_예리한 둔기_3_반지1": [],
    "저주받은 인형_3_예리한 둔기_3_반지2": [],
    "원한_3_기습의 대가_4_목걸이": [],
    "원한_3_기습의 대가_4_귀걸이1": [],
    "원한_3_기습의 대가_4_귀걸이2": [],
    "원한_3_기습의 대가_4_반지1": [],
    "원한_3_기습의 대가_4_반지2": [],
    "기습의 대가_4_저주받은 인형_3_목걸이": [],
    "기습의 대가_4_저주받은 인형_3_귀걸이1": [],
    "기습의 대가_4_저주받은 인형_3_귀걸이2": [],
    "기습의 대가_4_저주받은 인형_3_반지1": [],
    "기습의 대가_4_저주받은 인형_3_반지2": [],
    "달의 소리_3_기습의 대가_4_목걸이": [],
    "달의 소리_3_기습의 대가_4_귀걸이1": [],
    "달의 소리_3_기습의 대가_4_귀걸이2": [],
    "달의 소리_3_기습의 대가_4_반지1": [],
    "달의 소리_3_기습의 대가_4_반지2": [],
    "기습의 대가_5_잡옵_3_목걸이": [],
    "기습의 대가_5_잡옵_3_귀걸이1": [],
    "기습의 대가_5_잡옵_3_귀걸이2": [],
    "기습의 대가_5_잡옵_3_반지1": [],
    "기습의 대가_5_잡옵_3_반지2": []
}

engrMapping = {
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
    "Increases Mass": "질량 증가",
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
    "Time to Hunt": "사냥의 시간",
    "Peacemaker": "피스메이커",
    "Blessed Aura": "축복의 오라",
    "Judgment": "심판자",
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
    "Any": "잡옵"
}

malusMapping = {
    "Atk. Speed Reduction": "공격속도 감소",
    "Move Speed Reduction": "이동속도 감소",
    "Atk. Power Reduction": "공격력 감소",
    "Defense Reduction": "방어력 감소"
}

def mapAccGrade(value):
  match value:
    case 0: return 4 # legendary
    case 1: return 5 # relic
                     # ancient = 6

def mapAccType(value):
  match value:
    case 0: return "반지"   # ring
    case 1: return "귀걸이" # earring
    case 2: return "목걸이" # necklace

def convertGeneral(inAcc, outAcc):
  outAcc["isFixed"] = False
  outAcc["name"] = "blank"
  outAcc["id"] = inAcc["id"]
  outAcc["grade"] = mapAccGrade(inAcc["accessoryRank"])
  outAcc["tradeLeft"] = 2
  outAcc["quality"] = inAcc["quality"]
  outAcc["price"] = inAcc["buyNowPrice"]
  outAcc["buyPrice"] = inAcc["buyNowPrice"]
  outAcc["auctionPrice"] = inAcc["minimumBid"]
  outAcc["effects"] = []

def mapStats(type, value):
  match type:
    case 15: return ["치명", value] # crit
    case 16: return ["특화", value] # spec
    case 17: return ["제압", value] # dom
    case 18: return ["신속", value] # swift
    case 19: return ["인내", value] # endurance
    case 20: return ["숙련", value] # expertise

def convertStat(inAcc, outAcc):
  stats = inAcc["stats"]

  # stat 1
  if(stats["statType1"] not in desiredStats):
    # print("Rejected1")
    # print(stats["statType1"])
    return False
  else:
    outAcc["effects"].append(mapStats(stats["statType1"], stats["stat1Quantity"]))

  # stat 2
  if(stats["statType2"] != 0):
    if(stats["statType2"] in desiredStats):
      outAcc["effects"].append(mapStats(stats["statType2"], stats["stat2Quantity"]))
    else:
      # print("Rejected2")
      # print(stats["statType2"])
      return False

  return True

def mapEngravings(type, value):
  return [engrMapping[type], value]

def mapMalus(type, value):
  return [malusMapping[type], value]
  
def convertEngravings(inAcc, outAcc):
  engrs = inAcc["engravings"]

  global errCount
  
  if(engrs[0]["EngravingName"] not in engrMapping):
    errCount = errCount + 1
    temp = engrs[0]
    engrs[0] = inAcc["negativeEngraving"]
    inAcc["negativeEngraving"] = temp
  
  if(engrs[1]["EngravingName"] not in engrMapping):
    errCount = errCount + 1
    temp = engrs[1]
    engrs[1] = inAcc["negativeEngraving"]
    inAcc["negativeEngraving"] = temp
    
  engr1 = mapEngravings(engrs[0]["EngravingName"], engrs[0]["engravingValue"])  
  engr2 = mapEngravings(engrs[1]["EngravingName"], engrs[1]["engravingValue"])
  malus = mapMalus(inAcc["negativeEngraving"]["EngravingName"], inAcc["negativeEngraving"]["engravingValue"])

  outAcc["effects"].append(engr1.copy())
  outAcc["effects"].append(engr2.copy())
  outAcc["effects"].append(malus.copy())

  # Change to Any
  if(engrs[0]["EngravingName"] not in desiredEngrs):
    engr1[0] = "잡옵"

  if(engrs[1]["EngravingName"] not in desiredEngrs):
    engr2[0] = "잡옵"

  return [engr1[0] + "_" + str(engr1[1]) + "_" + engr2[0] + "_" + str(engr2[1]) + "_",
  engr2[0] + "_" + str(engr2[1]) + "_" + engr1[0] + "_" + str(engr1[1]) + "_"]

addCount = 0

def addToOutput(acc, category, type, output):
  global addCount

  matchingCat = ""

  if(category[0] + "목걸이" in output):
    matchingCat = category[0]
  elif (category[1] + "목걸이" in output):
    matchingCat = category[1]
  else:
    print("Rejected")
    return

  addCount = addCount + 1

  if(type == "반지" or type == "귀걸이"): # earring / ring
    output[matchingCat + type + "1"].append(acc)
    output[matchingCat + type + "2"].append(acc)
  else: # necklace
    output[matchingCat + type].append(acc)

############




### Main ###
# read input

f = open("removedNoBuyNow.json", "r")
data = json.load(f)
count = 0

for acc in data:
  print()
  print(count)
  print(acc)
  count = count + 1
  result = {}
  convertGeneral(acc, result)
  accType = mapAccType(acc["accessoryType"])
  engrTypeString = convertEngravings(acc, result)
  # if wrong stat type
  if(convertStat(acc, result) == False):
    print("wrong stat")
    continue

  addToOutput(result, engrTypeString, accType, output)
  
print("Swapped engravings: " + str(errCount))
print("Output Count: " + str(addCount))

# export
with open("icePengFormat.json", "w", encoding='utf8') as outfile:
    json.dump(output, outfile, ensure_ascii=False)
    