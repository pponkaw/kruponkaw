(() => {
  "use strict";

  const truthData = {
    dukkha: { title: "ทุกข์", pali: "DUKKHA · ความจริงว่าด้วยทุกข์", text: "ทุกข์คือสภาวะที่ทนได้ยากและความไม่สมบูรณ์ของชีวิต เช่น การเกิด แก่ เจ็บ ตาย การพลัดพรากจากสิ่งที่รัก หรือการประสบสิ่งที่ไม่ปรารถนา การรู้จักทุกข์ไม่ได้หมายถึงการมองโลกในแง่ร้าย แต่เป็นการยอมรับความจริงเพื่อเข้าใจและแก้ไข", example: "เมื่อผิดหวังจากผลสอบ ให้ยอมรับว่ากำลังเสียใจ แทนการปฏิเสธความรู้สึกหรือโทษตัวเอง" },
    samudaya: { title: "สมุทัย", pali: "SAMUDAYA · ความจริงว่าด้วยเหตุเกิดทุกข์", text: "สมุทัยคือเหตุแห่งทุกข์ โดยอธิบายถึงตัณหา ได้แก่ ความอยากในกาม ความอยากเป็นหรืออยากมี และความอยากไม่เป็นหรือไม่อยากมี การสังเกตความอยากและความยึดติดช่วยให้เห็นต้นตอของความไม่สบายใจ", example: "ลองถามตัวเองว่าเสียใจเพราะผลสอบ หรือเพราะยึดว่าต้องได้คะแนนสูงเท่านั้นจึงจะมีคุณค่า" },
    nirodha: { title: "นิโรธ", pali: "NIRODHA · ความจริงว่าด้วยความดับทุกข์", text: "นิโรธคือความดับทุกข์เมื่อเหตุแห่งทุกข์ โดยเฉพาะตัณหาและความยึดติด ดับลง เป็นการคลายใจจากการเกาะเกี่ยวและเปิดทางสู่ความสงบ ไม่ใช่การหนีปัญหาแต่เป็นการไม่ถูกปัญหาครอบงำ", example: "ยอมรับผลสอบตามจริง วางความคิดเปรียบเทียบ แล้วมองเห็นใจที่ผ่อนคลายขึ้น" },
    magga: { title: "มรรค", pali: "MAGGA · ความจริงว่าด้วยทางดับทุกข์", text: "มรรคคือแนวทางปฏิบัติเพื่อความดับทุกข์ ได้แก่ มรรคมีองค์ 8 ซึ่งรวมการเห็นชอบ ดำริชอบ วาจาชอบ การกระทำชอบ อาชีพชอบ ความเพียรชอบ สติชอบ และสมาธิชอบ", example: "วางแผนอ่านหนังสืออย่างเหมาะสม พูดกับตัวเองอย่างเมตตา มีสติขณะเรียน และพยายามอย่างต่อเนื่อง" }
  };

  const questions = [
    { q: "ข้อใดหมายถึง “ทุกข์” ในอริยสัจ 4?", options: ["ความจริงว่าด้วยเหตุเกิดทุกข์", "ความจริงว่าด้วยสภาวะที่ทนได้ยาก", "ความจริงว่าด้วยทางดับทุกข์", "ความจริงว่าด้วยความดับทุกข์"], answer: 1, explain: "ทุกข์ คือความจริงว่าด้วยสภาวะที่ทนได้ยากและความไม่สมบูรณ์ของชีวิต" },
    { q: "ตัณหา ซึ่งเป็นเหตุสำคัญของทุกข์ จัดอยู่ในอริยสัจข้อใด?", options: ["ทุกข์", "สมุทัย", "นิโรธ", "มรรค"], answer: 1, explain: "สมุทัยกล่าวถึงเหตุแห่งทุกข์ โดยมีตัณหาเป็นเหตุสำคัญ" },
    { q: "อริยสัจข้อใดกล่าวถึงความดับทุกข์?", options: ["ทุกข์", "สมุทัย", "นิโรธ", "มรรค"], answer: 2, explain: "นิโรธ คือความดับทุกข์เมื่อเหตุแห่งทุกข์ดับลง" },
    { q: "มรรคมีองค์ 8 แบ่งเป็นกลุ่มหลักใดบ้าง?", options: ["ทาน ศีล ภาวนา", "ปัญญา ศีล สมาธิ", "กาย วาจา ใจ", "ทุกข์ สมุทัย นิโรธ"], answer: 1, explain: "มรรคมีองค์ 8 จัดเป็น 3 กลุ่ม ได้แก่ ปัญญา ศีล และสมาธิ" },
    { q: "เมื่อต้องเผชิญปัญหา การนำอริยสัจ 4 มาใช้ควรเริ่มจากข้อใด?", options: ["รีบหลีกหนีปัญหา", "โทษผู้อื่น", "ทำความเข้าใจทุกข์ที่กำลังเผชิญ", "พยายามไม่รู้สึกอะไร"], answer: 2, explain: "เริ่มจากรู้และเข้าใจทุกข์ จากนั้นพิจารณาเหตุ ความดับ และแนวทางปฏิบัติ" }
  ];

  const $ = (selector) => document.querySelector(selector);
  const dialog = $("#truthDialog");
  $("#mainNav").querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }));
  $("#menuToggle").addEventListener("click", () => {
    const open = $("#mainNav").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });

  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    $("#themeToggle").textContent = dark ? "☀" : "☾";
    $("#themeToggle").setAttribute("aria-label", dark ? "เปลี่ยนเป็นธีมสว่าง" : "เปลี่ยนเป็นธีมมืด");
  });

  function openTruth(key) {
    const data = truthData[key];
    if (!data) return;
    $("#dialogPali").textContent = data.pali;
    $("#dialogTitle").textContent = data.title;
    $("#dialogText").textContent = data.text;
    $("#dialogExample").textContent = data.example;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else alert(`${data.title}\n\n${data.text}\n\nตัวอย่าง: ${data.example}`);
  }
  document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    openTruth(button.dataset.open);
  }));
  document.querySelectorAll(".truth-card").forEach(card => card.addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target === card) openTruth(card.dataset.truth);
  }));
  $("#dialogClose").addEventListener("click", () => dialog.close());
  $("#dialogDone").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  let current = 0;
  const responses = Array(questions.length).fill(null);
  const questionArea = $("#questionArea");
  function renderQuestion() {
    const item = questions[current];
    $("#progressLabel").textContent = `ข้อ ${current + 1} จาก ${questions.length}`;
    $("#progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
    questionArea.innerHTML = "";
    const heading = document.createElement("h3");
    heading.className = "question-title";
    heading.textContent = item.q;
    questionArea.appendChild(heading);
    const choices = document.createElement("div");
    choices.className = "answers";
    item.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option" + (responses[current] === index ? " selected" : "");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = String(index);
      input.checked = responses[current] === index;
      input.addEventListener("change", () => {
        responses[current] = index;
        choices.querySelectorAll(".answer-option").forEach(node => node.classList.remove("selected"));
        label.classList.add("selected");
        $("#quizFeedback").textContent = "";
      });
      const text = document.createElement("span");
      text.textContent = option;
      label.append(input, text);
      choices.appendChild(label);
    });
    questionArea.appendChild(choices);
    $("#prevBtn").disabled = current === 0;
    $("#nextBtn").textContent = current === questions.length - 1 ? "ส่งคำตอบ ✓" : "ข้อต่อไป →";
    $("#quizFeedback").textContent = "";
  }
  $("#prevBtn").addEventListener("click", () => {
    if (current > 0) { current--; renderQuestion(); }
  });
  $("#nextBtn").addEventListener("click", () => {
    if (responses[current] === null) {
      $("#quizFeedback").textContent = "กรุณาเลือกคำตอบก่อนดำเนินการต่อ";
      return;
    }
    if (current < questions.length - 1) { current++; renderQuestion(); }
    else showResult();
  });
  function showResult() {
    const score = responses.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
    $("#quizPanel").hidden = true;
    const result = $("#quizResult");
    result.hidden = false;
    const message = score === 5 ? "ยอดเยี่ยม! เข้าใจหลักธรรมได้ดีมาก" : score >= 3 ? "ทำได้ดี! ทบทวนอีกนิดเพื่อความแม่นยำ" : "ลองกลับไปอ่านบทเรียน แล้วทดสอบอีกครั้งนะ";
    result.innerHTML = `<div class="eyebrow">YOUR RESULT</div><div class="result-score">${score}<span style="font-size:1.5rem;color:var(--muted)"> / ${questions.length}</span></div><h3>${message}</h3><p>คะแนนของคุณ ${score * 20}%</p><div id="answerReview" style="text-align:left;margin:25px 0"></div><button class="btn btn-primary" id="restartQuiz">ทำแบบทดสอบอีกครั้ง ↻</button>`;
    const review = $("#answerReview");
    questions.forEach((question, index) => {
      const row = document.createElement("div");
      row.style.cssText = "border-top:1px solid var(--line);padding:13px 0;font-size:.83rem";
      const correct = responses[index] === question.answer;
      const title = document.createElement("strong");
      title.textContent = `${index + 1}. ${correct ? "✓ ถูกต้อง" : "✗ ยังไม่ถูก"} — ${question.q}`;
      title.style.color = correct ? "#4c8b63" : "#b66a5c";
      const detail = document.createElement("p");
      detail.style.cssText = "margin:5px 0;color:var(--muted)";
      detail.textContent = `คำตอบ: ${question.options[question.answer]} · ${question.explain}`;
      row.append(title, detail);
      review.appendChild(row);
    });
    $("#restartQuiz").addEventListener("click", () => {
      current = 0;
      responses.fill(null);
      result.hidden = true;
      $("#quizPanel").hidden = false;
      renderQuestion();
      $("#quiz").scrollIntoView({ behavior: "smooth" });
    });
  }
  renderQuestion();
})();