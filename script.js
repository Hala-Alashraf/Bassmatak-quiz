// ══ DATA ══
const questions = [
  { text: "لما تقرر تبدأ تذاكر أو تشتغل على مهمة، ايش أول شي تسويه فعلياً؟", category: "⚡ الإنتاجية", options: [
    { text: "أحط الجوال بوضع عدم الإزعاج وأبدأ فوراً بدون تفكير", personality: "منضبط" },
    { text: "أجهز المكان، أسوي قهوة، أعدل الإضاءة... وبعدين أقول ببدأ بعد 5 دقايق", personality: "مماطل" },
    { text: "أشتغل ربع ساعة بتركيز، بعدين أكافئ نفسي بلفة في تيك توك", personality: "دوبامين" },
    { text: "أشوف كم باقي على وقت التسليم وأبدأ في آخر لحظة ممكنة", personality: "مماطل" }
  ]},

  { text: "قبل ما تنام مباشرة، والأنوار طافية.. كيف وضعك مع الشاشة؟", category: "📱 عادات الجوال", options: [
    { text: "أفتح ريلز أو شورتس وأقول بس فيديو واحد وأكتشف إن مرت ساعتين", personality: "دوبامين" },
    { text: "أراجع مهام بكرا بشكل سريع، أضبط المنبه وأنام", personality: "منضبط" },
    { text: "أحط الجوال على الشاحن وأقول بنام الحين عشان أقوم بدري (وما أقوم)", personality: "مماطل" },
    { text: "أتصفح نفس التطبيقات بنفس الترتيب يومياً حتى لو مافي شي جديد", personality: "روتين" }
  ]},

  { text: "جاك إشعار رسالة وأنت في عز انشغالك، ايش ردة فعلك التلقائية؟", category: "🔔 التركيز", options: [
    { text: "أفتحها في نفس الثانية، ما أقدر أتجاهل الإشعارات", personality: "دوبامين" },
    { text: "أطالع في الشاشة عالسريع، إذا مو طارئ أرجع أركز بشغلي", personality: "منضبط" },
    { text: "جوالي أصلاً صامت ومقلوب على وجهه، ما أشوف شيء إلا وقت الراحة", personality: "منضبط" },
    { text: "أفتح الرسالة، أرد، وأنسى إني كنت أشتغل وأروح أسوي شي ثاني", personality: "مشتت" }
  ]},

  { text: "عندك مشروع أو واجب تسليمه بعد أسبوع، كيف تتعامل معاه؟", category: "⚡ الإنتاجية", options: [
    { text: "أقسمه لأجزاء صغيرة وأخلص جزء كل يوم بدون أي ضغط", personality: "منضبط" },
    { text: "أفتح ملف جديد، أكتب العنوان واسمي، أحس بإنجاز عظيم وأقفل اللابتوب", personality: "عالق" },
    { text: "أشتغل عليه وأنا فاتح يوتيوب وأرد على الرسايل في نفس الوقت", personality: "مشتت" },
    { text: "أنساه تماماً لحد ما يبقى 24 ساعة وبعدها أتحول لآلة إنتاجية وأخلصه", personality: "مماطل" }
  ]},

  { text: "يوم إجازتك أو الويكند.. كيف يكون شكل يومك عادةً؟", category: "🌙 الراحة", options: [
    { text: "نفس روتين أيام الأسبوع بالضبط، أصحى بنفس الوقت وأسوي نفس الأشياء", personality: "روتين" },
    { text: "أحط قائمة أهداف طويلة للويكند، وفي النهاية ما سويت منها شيء", personality: "كمال" },
    { text: "أقضيه كله بين السرير والكنبة والشاشة.. راحة مطلقة وهروب من أي مسؤولية", personality: "مختفي" },
    { text: "أطلع وأنبسط، بس عقلي بالخلفية شغال يفكر في مهام الأسبوع الجاي", personality: "مستنزف" }
  ]},

  { text: "لما تمسك الجوال بدون سبب واضح… وش غالبًا يصير؟", category: "📱 عادات الجوال", options: [
    { text: "أدخل تطبيق واحد وأطلع بسرعة إذا ما فيه شي مهم", personality: "منضبط" },
    { text: "أتنقل بين التطبيقات بدون هدف وأضيع وقت بدون ما أحس", personality: "دوبامين" },
    { text: "أفتح شي مفيد (ملاحظات/إيميل/مهام) وأحاول أستفيد", personality: "منضبط" },
    { text: "أفتح تطبيق واحد وبعدها ألقى نفسي ضايع بنص أشياء ثانية", personality: "مشتت" }
  ]},

  { text: "إذا عندك هدف جديد (رياضة / تعلم مهارة)… كيف تبدأ؟", category: "🎯 الأهداف", options: [
    { text: "أبدأ فورًا حتى لو بخطوة بسيطة", personality: "منضبط" },
    { text: "أتحمس جدًا بالبداية… وبعد كم يوم أختفي", personality: "عالق" },
    { text: "أبحث كثير وأخطط… بس أتأخر بالبداية", personality: "كمال" },
    { text: "أقول ببدأ بكرا ويتكرر بكرا كثير", personality: "مماطل" }
  ]},

  { text: "وقت ما تكون فاضي لحالك بدون جوال… وش تحس؟", category: "🧠 الوعي الذاتي", options: [
    { text: "عادي جدًا، أرتاح أو أفكر بهدوء", personality: "منضبط" },
    { text: "أحس بملل قوي وأرجع للجوال بسرعة", personality: "دوبامين" },
    { text: "أبدأ أفكر بأشياء المفروض أسويها وأتوتر شوي", personality: "مستنزف" },
    { text: "أدوّر أي شي يسلّيني حتى لو مو مهم", personality: "دوبامين" }
  ]},

  { text: "لما تخلص مهمة مهمة… وش تسوي بعدها مباشرة؟", category: "⚡ الإنتاجية", options: [
    { text: "أرتاح شوي وأرجع أكمل شي ثاني", personality: "منضبط" },
    { text: "أكافئ نفسي وأطول بالمكافأة أكثر من اللازم", personality: "دوبامين" },
    { text: "أفتح الجوال وأضيع الوقت بدون ما أخطط", personality: "مشتت" },
    { text: "أجلس أفكر بالمهمة الجاية بدون ما أبدأ فعليًا", personality: "مماطل" }
  ]},

  { text: "لو انقطع عنك الإنترنت فجأة… وش أول ردة فعل؟", category: "📱 عادات الجوال", options: [
    { text: "أكمل يومي عادي وألقى شي ثاني اسويه", personality: "منضبط" },
    { text: "أحاول أرجعه بأي طريقة وأتوتر", personality: "دوبامين" },
    { text: "أستغل الفرصة وأسوي شي مؤجل", personality: "منضبط" },
    { text: "أحس إني ضايع وما أعرف وش أسوي", personality: "دوبامين" }
  ]},

  { text: "إذا قررت تشتري غرض معين أونلاين.. كيف تختار؟", category: "🛒 القرارات", options: [
    { text: "أبحث عن القطعة، أقارن سعرها في 3 مواقع، وأقرأ كل التقييمات", personality: "كمال" },
    { text: "أدخل عشان غرض واحد، وأطلع بـ 5 أشياء مالها داعي", personality: "دوبامين" },
    { text: "أضيف الغرض للسلة وأخليه أيام للتفكير", personality: "مماطل" },
    { text: "أشتري أول شيء يطلع بوجهي", personality: "مشتت" }
  ]},

  { text: "وش وضعك مع التنبيهات اللي تجيك بوسط انشغالك؟", category: "🔔 التركيز", options: [
    { text: "جوالي صامت ومقلوب", personality: "منضبط" },
    { text: "أفتح الإشعار فورًا", personality: "دوبامين" },
    { text: "ألقي نظرة سريعة", personality: "منضبط" },
    { text: "أفتح الرسالة وأنسى شغلي", personality: "مشتت" }
  ]},

  { text: "لما يطلع لك فيديو مفيد… وش تسوي؟", category: "📱 عادات الجوال", options: [
    { text: "أشوفه إذا مهم", personality: "منضبط" },
    { text: "أحفظه للمستقبل", personality: "مماطل" },
    { text: "أحفظ كثير وأنسى", personality: "مشتت" },
    { text: "أشوف فيديو بعده وبعده", personality: "دوبامين" }
  ]},

  { text: "لو أحد شاف الشاشة الرئيسية بجوالك… وش بيلاحظ؟", category: "📱 عادات الجوال", options: [
    { text: "تطبيقات كثيرة وفوضى", personality: "مشتت" },
    { text: "نفس الترتيب من زمان", personality: "روتين" },
    { text: "مرتب جدًا", personality: "منضبط" },
    { text: "أرتب كثير ويرجع يتلخبط", personality: "عالق" }
  ]}
];

const personalities = {
  مماطل: { emoji:"😈", name:"المماطل الذكي", shock:"الفكرة بدون فعل… مجرد حلم بعيون مفتوحة", desc:"عنده أفكار كبيرة…", tips:["طبّق قاعدة الـ5 دقائق","اكتب مهمة واحدة فقط","اجعل الخطوة الأولى صغيرة"] },
  كمال: { emoji:"🔬", name:"الباحث عن الكمال", shock:"السعي للكمال بلا نهاية", desc:"ما يسلّم شيء حتى يكون مثاليًا", tips:["أسلّم ثم أحسّن","التغذية الراجعة مهمة","حدد وقت تسليم ثابت"] },
  مقارنة: { emoji:"😔", name:"مدمن المقارنة", shock:"المقارنة تسرق فرحتك", desc:"يقارن نفسه بالناس دائمًا", tips:["قارن نفسك بنفسك","قلل مراقبة الآخرين","اكتب إنجازاتك"] },
  مختفي: { emoji:"👻", name:"المختفي وقت الأزمات", shock:"الهروب يضاعف المشكلة", desc:"يهرب وقت الضغط", tips:["واجه خطوة صغيرة","لا تعزل نفسك","اكتب أفكارك"] },
  مستنزف: { emoji:"🪫", name:"المستنزَف دائمًا", shock:"ينسى نفسه لإرضاء الجميع", desc:"يعطي فوق طاقته", tips:["حدد حدودك","خذ وقت لنفسك","قل لا أحيانًا"] },
  مشتت: { emoji:"🌀", name:"مشتت العصر", shock:"التشتت يستهلك طاقتك", desc:"ينتقل بين مهام كثيرة", tips:["مهمة واحدة فقط","استخدم مؤقت","أبعد الجوال"] },
  منضبط: { emoji:"🎯", name:"المنضبط الصامت", shock:"الالتزام الهادئ أقصر طريق", desc:"يعمل بصمت", tips:["كافئ نفسك","سوّق لإنجازاتك","لا تقسو على نفسك"] },
  روتين: { emoji:"🔁", name:"أسير الروتين", shock:"الأمان بدون حياة", desc:"يكرر يومه", tips:["تغيير بسيط أسبوعيًا","تقبل المفاجآت","اخرج عن النص"] },
  عالق: { emoji:"🤯", name:"العالق في البداية", shock:"البدايات سهلة… الاستمرار صعب", desc:"حماس أولي فقط", tips:["قاعدة 70%","قسّم الأهداف","التزم بالنهايات"] },
  دوبامين: { emoji:"📱", name:"مدمن الدوبامين", shock:"المتعة السريعة = فراغ أسرع", desc:"يبحث عن المتعة اللحظية", tips:["ديتوكس رقمي","استبدال العادات","أجّل المكافأة"] }
};

// ══ LOGIC ══
let currentQuestion = 0;
let selectedAnswer = null;
let scores = {};

function resetScores() {
  scores = { مماطل:0, كمال:0, مقارنة:0, مختفي:0, مستنزف:0, مشتت:0, منضبط:0, روتين:0, عالق:0, دوبامين:0 };
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  currentQuestion = 0;
  resetScores();
  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  selectedAnswer = null;

  const total = questions.length;
  document.getElementById('progress-count').textContent = `السؤال ${currentQuestion + 1} من ${total}`;
  document.getElementById('progress-bar').style.width = `${((currentQuestion + 1) / total) * 100}%`;

  document.getElementById('q-text').innerHTML = `<div class="question-category">${q.category}</div>${q.text}`;

  const letters = ['أ','ب','ج','د'];
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt.text}</span>`;
    btn.onclick = () => selectOption(btn, i);
    container.appendChild(btn);
  });

  document.getElementById('btn-next').disabled = true;

  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'cardSlideIn 0.4s cubic-bezier(0.4,0,0.2,1)';
}

function selectOption(btn, index) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedAnswer = index;
  document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {
  if (selectedAnswer === null) return;

  const personality = questions[currentQuestion].options[selectedAnswer].personality;
  scores[personality]++;

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showLoading();
  } else {
    renderQuestion();
  }
}

function showLoading() {
  showScreen('screen-loading');

  const steps = ['step1','step2','step3','step4'];
  steps.forEach(id => document.getElementById(id).classList.remove('done'));

  let i = 0;
  const interval = setInterval(() => {
    if (i < steps.length) {
      document.getElementById(steps[i]).classList.add('done');
      i++;
    } else {
      clearInterval(interval);
      setTimeout(showResult, 600);
    }
  }, 700);
}

function showResult() {
  const top = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
  const p = personalities[top];

  document.getElementById('res-emoji').textContent = p.emoji;
  document.getElementById('res-type').textContent = p.name;
  document.getElementById('res-shock').textContent = p.shock;
  document.getElementById('res-desc').textContent = p.desc;

  const tipsList = document.getElementById('res-tips');
  tipsList.innerHTML = '';
  p.tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  buildChart();
  showScreen('screen-result');
}

function buildChart() {
  const chart = document.getElementById('scores-chart');
  chart.innerHTML = '';

  const total = questions.length;
  const sorted = Object.entries(scores).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
  const topKey = sorted[0]?.[0];

  sorted.forEach(([key, val]) => {
    const pct = Math.round((val / total) * 100);
    const p = personalities[key];

    const row = document.createElement('div');
    row.className = 'score-bar-row';

    row.innerHTML = `
      <div class="score-bar-label">${p.emoji} ${p.name}</div>
      <div class="score-bar-track">
        <div class="score-bar-fill ${key===topKey?'top':''}" style="width:${pct}%"></div>
      </div>
      <div class="score-bar-pct">${pct}%</div>
    `;

    chart.appendChild(row);
  });
}

function copyResult() {
  const top = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
  const p = personalities[top];

  const text = `🎯 بصمتك الرقمية\n\nشخصيتي: ${p.emoji} ${p.name}\n\n"${p.shock}"\n\nجرّب الاختبار أنت كذلك! 🤖 نادي الروبوت والرياضات · IMSIU`;

  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  });
}

function restartQuiz() {
  showScreen('screen-intro');
}
