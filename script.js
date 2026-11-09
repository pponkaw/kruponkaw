const truths = [
  {label:"อริยสัจข้อที่ 1",title:"ทุกข์ — สิ่งที่ควรกำหนดรู้",icon:"◌",text:"ความไม่สบายกาย ไม่สบายใจ ความผิดหวัง หรือความเปลี่ยนแปลงที่ทำให้ใจเป็นทุกข์ การเริ่มต้นคือยอมรับและมองเห็นปัญหาตามความเป็นจริง",tip:"ลองถามตัวเอง: “ตอนนี้สิ่งที่ทำให้ฉันไม่สบายใจคืออะไร?”"},
  {label:"อริยสัจข้อที่ 2",title:"สมุทัย — เหตุแห่งทุกข์",icon:"⌁",text:"เหตุที่ทำให้เกิดทุกข์ โดยหลักสำคัญคือ ตัณหา หรือความทะยานอยาก การสำรวจความคาดหวังและความยึดติดช่วยให้เข้าใจต้นตอของปัญหา",tip:"ลองถามตัวเอง: “อะไรเป็นเหตุหรือปัจจัยที่ทำให้เกิดความรู้สึกนี้?”"},
  {label:"อริยสัจข้อที่ 3",title:"นิโรธ — ความดับทุกข์",icon:"✧",text:"ความดับทุกข์เมื่อเหตุแห่งทุกข์คลี่คลาย เป็นการเห็นว่าความสงบและการปล่อยวางเป็นไปได้ ไม่จำเป็นต้องยึดติดกับสิ่งเดิมเสมอไป",tip:"ลองถามตัวเอง: “หากคลี่คลายปัญหานี้ได้ ใจของฉันจะเป็นอย่างไร?”"},
  {label:"อริยสัจข้อที่ 4",title:"มรรค — หนทางดับทุกข์",icon:"⟡",text:"แนวทางปฏิบัติเพื่อดับทุกข์ ได้แก่ มรรคมีองค์ 8 ซึ่งครอบคลุมการมีปัญญา ศีล และการฝึกจิต เช่น คิดอย่างถูกต้อง มีสติ และดำเนินชีวิตอย่างเหมาะสม",tip:"ลองถามตัวเอง: “วันนี้ฉันจะลงมือทำสิ่งใดอย่างมีสติได้บ้าง?”"}
];
const cards = [...document.querySelectorAll(".truth-card")];
const detailIcon = document.getElementById("detailIcon");
const detailLabel = document.getElementById("detailLabel");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const detailTip = document.getElementById("detailTip");
cards.forEach(card => card.addEventListener("click", () => {
  const item = truths[Number(card.dataset.truth)];
  cards.forEach(c => c.classList.toggle("active", c === card));
  detailIcon.textContent = item.icon; detailLabel.textContent = item.label;
  detailTitle.textContent = item.title; detailText.textContent = item.text; detailTip.textContent = item.tip;
}));

const questions = [
 {q:"อริยสัจข้อใดกล่าวถึงการรู้จักปัญหาหรือสภาวะที่เป็นทุกข์?",a:["ทุกข์","สมุทัย","นิโรธ","มรรค"],correct:0,explain:"ทุกข์ คือสภาวะปัญหาหรือสิ่งที่ควรกำหนดรู้"},
 {q:"ตัณหา ซึ่งเป็นเหตุสำคัญของทุกข์ จัดอยู่ในอริยสัจข้อใด?",a:["ทุกข์","สมุทัย","นิโรธ","มรรค"],correct:1,explain:"สมุทัยกล่าวถึงเหตุแห่งทุกข์ โดยมีตัณหาเป็นเหตุสำคัญ"},
 {q:"อริยสัจข้อใดหมายถึงความดับทุกข์?",a:["ทุกข์","สมุทัย","นิโรธ","มรรค"],correct:2,explain:"นิโรธ คือความดับทุกข์หรือการสิ้นไปของเหตุแห่งทุกข์"},
 {q:"มรรคมีองค์ 8 เป็นแนวทางที่สัมพันธ์กับอริยสัจข้อใด?",a:["ทุกข์","สมุทัย","นิโรธ","มรรค"],correct:3,explain:"มรรคเป็นข้อปฏิบัติหรือหนทางเพื่อดับทุกข์"},
 {q:"หากรู้สึกกังวลและเริ่มสำรวจเหตุของความกังวล กำลังพิจารณาอริยสัจข้อใด?",a:["ทุกข์เท่านั้น","สมุทัย","นิโรธ","มรรค"],correct:1,explain:"การค้นหาเหตุที่ทำให้เกิดความกังวล สอดคล้องกับสมุทัย"}
];
let current = 0;
let selected = Array(questions.length).fill(null);
let checked = Array(questions.length).fill(false);
let score = 0;
const qCount=document.getElementById("questionCount"), progress=document.getElementById("progressBar"), liveScore=document.getElementById("scoreLive"), qText=document.getElementById("questionText"), options=document.getElementById("answerOptions"), prev=document.getElementById("prevBtn"), next=document.getElementById("nextBtn"), feedback=document.getElementById("quizFeedback"), form=document.getElementById("quizForm"), result=document.getElementById("quizResult");
function renderQuestion(){
  const q=questions[current]; qCount.textContent=`คำถาม ${current+1} / ${questions.length}`;
  progress.style.width=`${((current+1)/questions.length)*100}%`; liveScore.textContent=`${score} คะแนน`;
  qText.textContent=q.q; options.innerHTML="";
  q.a.forEach((answer,i)=>{
    const label=document.createElement("label"); label.className="answer-option"+(selected[current]===i?" selected":"");
    const radio=document.createElement("input");radio.type="radio";radio.name="answer";radio.value=i;radio.checked=selected[current]===i;radio.disabled=checked[current];
    radio.addEventListener("change",()=>{selected[current]=i;renderQuestion();});
    const text=document.createElement("span");text.textContent=answer;label.append(radio,text);options.append(label);
  });
  prev.disabled=current===0; next.textContent=checked[current]?(current===questions.length-1?"ดูผลคะแนน":"ข้อต่อไป →"):(current===questions.length-1?"ตรวจคำตอบ":"ข้อต่อไป →");
  feedback.textContent=checked[current]?questions[current].explain:"";
  if(checked[current]) feedback.textContent=(selected[current]===q.correct?"✓ ถูกต้อง! ":"✕ ยังไม่ถูกต้อง ") + q.explain;
}
function calculateScore(){score=questions.reduce((sum,q,i)=>sum+(selected[i]===q.correct?1:0),0);}
next.addEventListener("click",()=>{
  if(selected[current]===null){feedback.textContent="กรุณาเลือกคำตอบก่อนดำเนินการ";return;}
  if(!checked[current]){checked[current]=true;calculateScore();renderQuestion();return;}
  if(current<questions.length-1){current++;renderQuestion();}else showResult();
});
prev.addEventListener("click",()=>{if(current>0){current--;renderQuestion();}});
function showResult(){
  calculateScore();form.hidden=true;result.hidden=false;
  document.getElementById("resultScore").textContent=`${score} / ${questions.length}`;
  document.getElementById("resultTitle").textContent=score===questions.length?"ยอดเยี่ยม!":score>=3?"ทำได้ดีมาก!":"ลองทบทวนอีกครั้งนะ";
  document.getElementById("resultMessage").textContent=`คุณตอบถูก ${score} ข้อจาก ${questions.length} ข้อ ${score>=4?"เข้าใจหลักอริยสัจ 4 ได้ดีแล้ว":"ทบทวนเนื้อหาแต่ละข้อแล้วลองทำใหม่เพื่อเพิ่มความเข้าใจ"}`;
}
document.getElementById("retryBtn").addEventListener("click",()=>{current=0;selected=Array(questions.length).fill(null);checked=Array(questions.length).fill(false);score=0;form.hidden=false;result.hidden=true;renderQuestion();});
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const opened=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(opened));menuToggle.setAttribute("aria-label",opened?"ปิดเมนู":"เปิดเมนู");menuToggle.textContent=opened?"×":"☰";});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","เปิดเมนู");menuToggle.textContent="☰";}));
renderQuestion();