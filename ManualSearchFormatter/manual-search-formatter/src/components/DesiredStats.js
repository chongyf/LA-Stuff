import EngravingInput from "./AccInputBoxes/EngravingInput";

const DesiredStats = ({ stats, getStats, setStats }) => {

  const updateStat = (val, i) => {
    const arr = getStats;
    arr[i] = stats[val];
    setStats(arr);
  }

  return (
    <div>
      Select your desired stats
      {
        getStats.map((stat, i) => {
          return <EngravingInput
            key={i}
            text={"Stat " + (i+1)}
            engrs={stats}
            typeUpdateFn1={(val) => updateStat(val, i)} />
        })
      }
    </div>
  )
}
export default DesiredStats