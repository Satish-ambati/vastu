import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";

function App() {
  const [feetHeight, setFeetHeight] = useState("");
  const [inchesHeight, setInchesHeight] = useState("");
  const [feetWidth, setFeetWidth] = useState("");
  const [inchesWidth, setInchesWidth] = useState("");
  const [uh, setUh] = useState(null);
  const [uw, setUw] = useState(null);
  const [yards, setYards] = useState(0);
  const [feets, setFeets] = useState(null);
  const [danam, setDanam] = useState(null);
  const [runam, setRunam] = useState(null);
  const [aayam, setAayam] = useState("");
  const [years, setYears] = useState(null);
  const [week, setWeek] = useState("");
  const [tidhi, setTidhi] = useState("");
  const [star, setStar] = useState("");
  const [dikpathi, setDikpathi] = useState("");
  const [amsha, setAmsha] = useState("");
  const [yogam, setYogam] = useState("");
  const [karanam,setKaranam] = useState(null);
  const [graham,setGraham] = useState(null);
  const [raasi,setRaasi] = useState(null);
  const [tatwam,setTatwam] = useState(null);
  const [jati,setJati] = useState(null);
  const [yogini,setYogini] = useState(null);
  const [kala,setKala] = useState(null);
  const am = {
    1: "ద్వాజాయం (తూర్పు-E)",
    2: "ధూమాయం (ఆగ్నేయం-SE)",
    3: "సింహాయం (దక్షిణం-S)",
    4: "శ్వానాయం (నైరుతి-SW)",
    5: "వృషభాయం (పశ్చిమం-W)",
    6: "కారాయం (వాయువ్యం-NW)",
    7: "గజాయం (ఉత్తరం-N)",
    8: "శాఖాయం (ఈశాన్యం-NE)"
  };

  const wk = {
    1: "ఆదివారం",
    2: "సోమవారం",
    3: "మంగళవారం",
    4: "బుధవారం",
    5: "గురువారం",
    6: "శుక్రవారం",
    7: "శనివారం"
  };

  const td = {
    1: "పాడ్యమి",
    2: "విదియ",
    3: "తదియ",
    4: "చవితి",
    5: "పంచమి",
    6: "షష్ఠి",
    7: "సప్తమి",
    8: "అష్టమి",
    9: "నవమి",
    10: "దశమి",
    11: "ఏకాదశి",
    12: "ద్వాదశి",
    13: "త్రయోదశి",
    14: "చతుర్దశి",
    15: "పౌర్ణమి",
    16: "పాడ్యమి",
    17: "విదియ",
    18: "తదియ",
    19: "చవితి",
    20: "పంచమి",
    21: "షష్ఠి",
    22: "సప్తమి",
    23: "అష్టమి",
    24: "నవమి",
    25: "దశమి",
    26: "ఏకాదశి",
    27: "ద్వాదశి",
    28: "త్రయోదశి",
    29: "చతుర్దశి",
    30: "అమావాస్య"
  };

  const dp = {
    1: "ఇంద్ర దిక్పతి - సౌఖ్యం",
    2: "అగ్ని దిక్పతి - గృహదహనం",
    3: "యమ దిక్పతి - ధర్మగుణము",
    4: "నైరృతి దిక్పతి - శత్రుభయం",
    5: "వరుణ దిక్పతి - పశు, ధనవృద్ధి",
    6: "వాయు దిక్పతి - చలనా గుణము",
    7: "కుబేర దిక్పతి - ధనవృద్ధి",
    8: "ఈశాన్య దిక్పతి - అమంగళకారణము"
  };

  const yg = {
    1: "విష్కంభ యోగం - అశుభం",
    2: "ప్రీతి యోగం - శుభం",
    3: "ఆయుష్మాన్ యోగం - శుభం",
    4: "సౌభాగ్య యోగం - శుభం",
    5: "శోభన యోగం - శుభం",
    6: "అతిగండ యోగం - అశుభం",
    7: "సుకర్మ యోగం - శుభం",
    8: "ధృతి యోగం - శుభం",
    9: "శూల యోగం - అశుభం",
    10: "గండ యోగం - అశుభం",
    11: "వృద్ధి యోగం - శుభం",
    12: "ధ్రువ యోగం - శుభం",
    13: "వ్యాఘాత యోగం - అశుభం",
    14: "హర్షణ యోగం - శుభం",
    15: "వజ్ర యోగం - అశుభం",
    16: "సిద్ధి యోగం - శుభం",
    17: "వ్యాతిపాత యోగం - అశుభం",
    18: "వరీయాన్ యోగం - శుభం",
    19: "పరిఘ యోగం - అశుభం",
    20: "శివ యోగం - శుభం",
    21: "సిద్ధ యోగం - శుభం",
    22: "సాధ్య యోగం - శుభం",
    23: "శుభ యోగం - శుభం",
    24: "శుక్ల యోగం - శుభం",
    25: "బ్రహ్మ యోగం - శుభం",
    26: "ఇంద్ర యోగం - శుభం",
    27: "వైదృత్య యోగం - అశుభం"
  };

  const as = {
    1: "నష్టాంశ - ధన నష్టం",
    2: "వృద్ధాంశ - అభివృద్ధి",
    3: "స్త్రీ ఆంశ - సౌభాగ్యం",
    4: "మృత్యుఆంశ - రోగభయం",
    5: "ధనాంశ - అగ్నిభయం",
    6: "చోరాంశ - చోరభయం",
    7: "పుత్రాంశ - పుత్రవృద్ధి",
    8: "గోదానాంశ - పశు ధన వృద్ధి",
    9: "కీర్తిఆంశ - కీర్తి"
  };

  const nk = {
    1: "అశ్విని",
    2: "భరణి",
    3: "కృత్తిక",
    4: "రోహిణి",
    5: "మృగశిర",
    6: "ఆరుద్ర",
    7: "పునర్వసు",
    8: "పుష్యము",
    9: "ఆశ్లేష",
    10: "మఖ",
    11: "పుబ్బ",
    12: "ఉత్తర",
    13: "హస్త",
    14: "చిత్త",
    15: "స్వాతి",
    16: "విశాఖ",
    17: "అనూరాధ",
    18: "జ్యేష్ఠ",
    19: "మూల",
    20: "పూర్వాషాఢ",
    21: "ఉత్తరాషాఢ",
    22: "శ్రవణ",
    23: "ధనిష్ఠ",
    24: "శతభిష",
    25: "పూర్వాభాద్ర",
    26: "ఉత్తరాభాద్ర",
    27: "రేవతి"
  };
  const km = {
    1: "బవ - మంచిది",
    2: "బాల - మంచిది",
    3: "కౌలవ - మంచిది",
    4: "తైతుల - మంచిది",
    5: "గర - మంచిది",
    6: "వాణిజ - మంచిది",
    7: "విష్టి (భద్ర) - చెడు",
    8: "శకుని - చెడు",
    9: "చతుష్పద - చెడు",
    10: "నాగ - చెడు",
    11: "కింస్తుగ్న - చెడు"
};
const gh = {
  1: "రవి (సూర్యుడు) - చెడ్డది",
  2: "చంద్ర (చంద్రుడు) - మంచిది",
  3: "కుజ (అంగారకుడు) - మిశ్రమం",
  4: "బుధ (బుధుడు) - మంచిది",
  5: "గురు (బృహస్పతి) - మంచిది",
  6: "శుక్ర (శుక్రుడు) - మంచిది",
  7: "శని (శనేశ్వరుడు) - చెడ్డది",
  8: "రాహు (రాహు) - చెడ్డది",
  9: "కేతు (కేతు) - చెడ్డది"
};
const rs = {
  1: "మేషం",
  2: "వృషభం",
  3: "మిథునం",
  4: "కర్కాటకం",
  5: "సింహం",
  6: "కన్యా",
  7: "తులా",
  8: "వృశ్చికం",
  9: "ధనుస్సు",
  10: "మకరం",
  11: "కుంభం",
  12: "మీనం"
};
const tt = {
  1: "భూత తత్త్వం- మంచిది",
  2: "జల తత్త్వం- మంచిది",
  3: "అగ్ని తత్త్వం- చెడ్డది",
  4: "వాయు తత్త్వం- మంచిది",
  5: "ఆకాశ తత్త్వం- చెడ్డది"
};
const jt = {
  1: "బ్రహ్మచారి- మంచిది",
  2: "క్షత్రియ- మంచిది",
  3: "వైశ్య- మంచిది",
  4: "శూద్ర - చెడ్డది"
};
const ygm = {
  1: "మంచిది - ధన లాభం",
  2: "చెడ్డది - ధన నాశనం",
  3: "మంచిది - ధాన్య లాభం",
  4: "చెడ్డది - ధన హాని",
  5: "మంచిది - పుత్ర లాభం",
  6: "చెడ్డది - పుత్ర నాశనం",
  7: "మంచిది - ఐశ్వర్య ప్రదం",
  8: "చెడ్డది - మరణ భయం"
};

  function conversion(feet, inches) {
    if (isNaN(feet) || isNaN(inches) || feet === "" || inches === "") return "0.00";

    feet = parseFloat(feet);
    inches = parseFloat(inches);

    if (inches >= 12) return "Invalid Input"; // Inches should be between 0-11

    let convertedFeet = feet + inches / 12; // Convert inches to feet
    return convertedFeet.toFixed(2);
  }

  const handleConversion = () => {
    const newHeight = conversion(feetHeight, inchesHeight);
    const newWidth = conversion(feetWidth, inchesWidth);
    
    if (newHeight === "Invalid Input" || newWidth === "Invalid Input") {
      alert("Please enter valid measurements (inches must be less than 12)");
      return;
    }

    setUh(newHeight);
    setUw(newWidth);
    
    const area = parseFloat(newHeight) * parseFloat(newWidth);
    setFeets(area);
    
    const yardsValue = Math.floor(area / 9);
    setYards(yardsValue);
    calculateResults(yardsValue, area);
  };

  function calculateResults(yardsValue, feetsValue) {
    let num = (yardsValue * 8) % 12;
    if (num === 0) num = 12;
    setDanam(num);
    
    num = (yardsValue * 3) % 8;
    if (num === 0) num = 8;
    setRunam(num);
    
    let num1 = (yardsValue * 9) % 8;
    if (num1 === 0) num1 = 8;
    setAayam(am[num1]);
    
    let num2 = (yardsValue * 9) % 120;
    if (num2 === 0) num2 = 120;
    setYears(num2);
    
    let num3 = (yardsValue * 6) % 30;
    if (num3 === 0) num3 = 30;
    setTidhi(td[num3]);
    
    let num4 = (yardsValue * 9) % 7;
    if (num4 === 0) num4 = 7;
    setWeek(wk[num4]);
    
    let num5 = (yardsValue * 8) % 27;
    if (num5 === 0) num5 = 27;
    setStar(nk[num5]);
    
    let num6 = (yardsValue * 9) % 8;
    if (num6 === 0) num6 = 8;
    setDikpathi(dp[num6]);
    
    let num7 = (yardsValue * 6) % 9;
    if (num7 === 0) num7 = 9;
    setAmsha(as[num7]);
    setGraham(gh[num7]);
    
    let num8 = (yardsValue * 4) % 27;
    if (num8 === 0) num8 = 27;
    setYogam(yg[num8]);
    let num9 = (yardsValue * 3) % 8;
    if (num9 === 0) num9 = 8;
    setYogini(ygm[num9]);
    let num10 = (yardsValue * 5) % 7;
    if (num10 === 0) num10 = 7;
    setKaranam(km[num10])
    let num11 = (yardsValue * 9) % 12;
    if (num11 === 0) num11 = 12;
    setRaasi(rs[num11]);
    let num12 = (yardsValue * 3) % 5;
    if (num12 === 0) num12 = 5;
    setTatwam(tt[num12]);
    let num13 = (yardsValue * 9) % 4;
    if (num13 === 0) num13 = 4; 
    setJati(jt[num13]);
    let num14 = (yardsValue * 12) % 16;
    if (num14 === 0) num14 = 16;
    setKala(num14);
  }

  return (
    <div className="total">
      <div className="container">
        <div className="header">
          <a href="https://calculator-one-rho-72.vercel.app/"><i className="fas fa-home home-icon"></i></a>
          <h1>వాస్తు</h1>
        </div>

        <div className="input-group">
          <label>పొడుగు:</label>
          <div className="input-container">
            <input
              type="number"
              placeholder=" అడుగులు"
              className="input-field small"
              value={feetHeight}
              onChange={(e) => setFeetHeight(e.target.value)}
              min="0"
            />
            <input
              type="number"
              placeholder="అంగుళాలు"
              className="input-field small"
              value={inchesHeight}
              onChange={(e) => setInchesHeight(e.target.value)}
              min="0"
              max="11"
            />
          </div>
        </div>

        <div className="input-group">
          <label>వెడల్పు:</label>
          <div className="input-container">
            <input
              type="number"
              placeholder="అడుగులు"
              className="input-field small"
              value={feetWidth}
              onChange={(e) => setFeetWidth(e.target.value)}
              min="0"
            />
            <input
              type="number"
              placeholder="అంగుళాలు"
              className="input-field small"
              value={inchesWidth}
              onChange={(e) => setInchesWidth(e.target.value)}
              min="0"
              max="11"
            />
          </div>
        </div>

        <button className="ok-button" onClick={handleConversion}>OK</button>
        
        <div className="results">
          {aayam && <p><b>ఆయామం:</b> {aayam}</p>}
          {yards && <p><b>స్క్వేర్ గజాలు:</b> {yards}</p>}
          {feets && <p><b>స్క్వేర్ అడుగులు:</b> {feets}</p>}
          {danam && <p><b>ధనం: </b>{danam}</p>}
          {runam && <p><b>ఋణం:</b> {runam}</p>}
          {years && <p><b>సంవత్సరం:</b> {years}</p>}
          {week && <p><b>వారం:</b> {week}</p>}
          {tidhi && <p><b>తిధి: </b>{tidhi}</p>}
          {star && <p><b>నక్షత్రం:</b> {star}</p>}
          {dikpathi && <p><b>దిక్పతి:</b> {dikpathi}</p>}
          {amsha && <p><b>అంశ:</b> {amsha}</p>}
          {yogam && <p><b>యోగం:</b> {yogam}</p>}
          {yogini && <p><b>యోగినీ:</b> {yogini}</p>}
          {karanam && <p><b>కరణం:</b> {karanam}</p>}
          {graham && <p><b>గ్రహం:</b> {graham}</p>}
          {raasi && <p><b>రాశి :</b> {raasi}</p>}
          {tatwam && <p><b>తత్వం:</b> {tatwam}</p>}
          {jati && <p><b>జాతి:</b> {jati}</p>}
          {kala && <p><b>కళ:</b> {kala}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;