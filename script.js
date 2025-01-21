//-----------------------------------------------------------
// romajiToJapanese converter taken from https://github.com/aleckretch/Romaji-to-Japanese-Converter and modified
//-----------------------------------------------------------
function _romajiToJapanese(romaji) {
  const hiragana = {
    "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
    "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
    "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
    "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
    "za": "ざ", "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
    "da": "だ", "de": "で", "do": "ど",
    "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
    "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
    "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
    "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",
    "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
    "ya": "や", "yu": "ゆ", "yo": "よ",
    "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
    "wa": "わ", "wo": "を",
    "n": "ん",
    "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
    "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
    "sha": "しゃ", "shu": "しゅ", "sho": "しょ",
    "ja": "じゃ", "ju": "じゅ", "jo": "じょ",
    "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ",
    "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
    "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
    "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
    "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ",
    "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
    "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
    "vu": "ゔ",
    "sakuon": "っ"
  };

  const katakana = {
    "a": "ア", "i": "イ", "u": "ウ", "e": "エ", "o": "オ",
    "ka": "カ", "ki": "キ", "ku": "ク", "ke": "ケ", "ko": "コ",
    "ga": "ガ", "gi": "ギ", "gu": "グ", "ge": "ゲ", "go": "ゴ",
    "sa": "サ", "shi": "シ", "su": "ス", "se": "セ", "so": "ソ",
    "za": "ザ", "ji": "ジ", "zu": "ズ", "ze": "ゼ", "zo": "ゾ",
    "ta": "タ", "chi": "チ", "tsu": "ツ", "te": "テ", "to": "ト",
    "da": "ダ", "de": "デ", "do": "ド",
    "na": "ナ", "ni": "ニ", "nu": "ヌ", "ne": "ネ", "no": "ノ",
    "ha": "ハ", "hi": "ヒ", "fu": "フ", "he": "ヘ", "ho": "ホ",
    "ba": "バ", "bi": "ビ", "bu": "ブ", "be": "ベ", "bo": "ボ",
    "pa": "パ", "pi": "ピ", "pu": "プ", "pe": "ペ", "po": "ポ",
    "ma": "マ", "mi": "ミ", "mu": "ム", "me": "メ", "mo": "モ",
    "ya": "ヤ", "yu": "ユ", "yo": "ヨ",
    "ra": "ラ", "ri": "リ", "ru": "ル", "re": "レ", "ro": "ロ",
    "wa": "ワ", "wo": "ヲ",
    "n": "ン",
    "kya": "キャ", "kyu": "キュ", "kyo": "キョ",
    "gya": "ギャ", "gyu": "ギュ", "gyo": "ギョ",
    "sha": "シャ", "shu": "シュ", "sho": "ショ",
    "ja": "ジャ", "ju": "ジュ", "jo": "ジョ",
    "cha": "チャ", "chu": "チュ", "cho": "チョ",
    "nya": "ニャ", "nyu": "ニュ", "nyo": "ニョ",
    "hya": "ヒャ", "hyu": "ヒュ", "hyo": "ヒョ",
    "bya": "ビャ", "byu": "ビュ", "byo": "ビョ",
    "pya": "ピャ", "pyu": "ピュ", "pyo": "ピョ",
    "mya": "ミャ", "myu": "ミュ", "myo": "ミョ",
    "rya": "リャ", "ryu": "リュ", "ryo": "リョ",
    "vu": "ヴ",
    "va": "ヴァ", "vi": "ヴィ", "ve": "ヴェ", "vo": "ヴォ",
    "wi": "ウィ", "we": "ウェ",
    "fa": "ファ", "fi": "フィ", "fe": "フェ", "fo": "フォ",
    "che": "チェ",
    "di": "ディ", "du": "ドゥ",
    "ti": "ティ", "tu": "トゥ",
    "je": "ジェ",
    "she": "シェ",
    "sakuon": "ッ",
    "pause": "ー"
  };

  romaji = romaji.toLowerCase();
  let currentAlphabet = hiragana;
  let hiraganaIsCurrent = true;
  let resultStr = "";
  let i = 0;

  while (i < romaji.length) {
    if (romaji[i] === "*") {
      // Switch alphabets
      if (hiraganaIsCurrent) {
        currentAlphabet = katakana;
        hiraganaIsCurrent = false;
      } else {
        currentAlphabet = hiragana;
        hiraganaIsCurrent = true;
      }
      i++;
    } else if (romaji[i] === " ") {
      // Check for " wa " conversion to " は "
      if (i + 3 < romaji.length && romaji.substring(i, i + 4) === " wa ") {
        resultStr += " " + currentAlphabet["ha"] + " ";
        i += 4;
        continue;
      }
      resultStr += " ";
      i++;
    } else if (
      i + 2 < romaji.length &&
      romaji[i] === "n" &&
      romaji[i + 1] === "n" &&
      !currentAlphabet.hasOwnProperty(romaji.substring(i + 1, i + 3))
    ) {
      // "nn" when next doesn't match => sokuon
      resultStr += currentAlphabet["sakuon"];
      i++;
    } else {
      let checkLen = Math.min(3, romaji.length - i);
      while (checkLen > 0) {
        let checkStr = romaji.substring(i, i + checkLen);
        if (currentAlphabet.hasOwnProperty(checkStr)) {
          resultStr += currentAlphabet[checkStr];
          i += checkLen;

          // Additional rules for repeated vowels, repeated letters, etc.
          if (i < romaji.length) {
            if (
              romaji[i] === romaji[i - 1] &&
              !hiraganaIsCurrent
            ) {
              // For Katakana double letters
              if (romaji[i] === "n") {
                // Do nothing special if repeated "n"
              } else if (["a", "e", "i", "o", "u"].includes(romaji[i])) {
                resultStr += currentAlphabet["pause"];
                i++;
              } else {
                resultStr += currentAlphabet["sakuon"];
                i++;
              }
            }
          }
          break;
        } else if (checkLen === 1) {
          // Handle punctuation or non-alphabet
          if (["?", ".", "!"].includes(checkStr)) {
            resultStr += "。";
          } else if (!/^[a-z]$/.test(checkStr)) {
            resultStr += checkStr;
          } else if (i + 1 < romaji.length) {
            // Little tsu rule for double letters (e.g., kk => っk)
            if (checkStr === romaji[i + 1]) {
              resultStr += currentAlphabet["sakuon"];
            }
          } else {
            // just leave it as is
            resultStr += checkStr;
          }
          i++;
          break;
        }
        checkLen--;
      }
    }
  }
  return resultStr;
}



//-----------------------------------------------------------
// HIEROGLYPH CLASS
//-----------------------------------------------------------
class HieroglyphType {
  static RADICAL = "radical";
  static KANJI = "kanji";
  static VOCAB = "vocab";
}

const HieroglyphProgress = [
  'Apprentice 0', // 0
  'Apprentice 1', // 1
  'Apprentice 2', // 2
  'Apprentice 3', // 3
  'Apprentice 4', // 4
  'Guru 1',       // 5
  'Guru 2',       // 6
  'Master',       // 7
  'Enlightened',  // 8
  'Burned'        // 9
];
HieroglyphProgress[-1] = 'Not Learned';

const SecToReview = [
  0 * 3600,        // 0
  4 * 3600,        // 1
  8 * 3600,        // 2
  24 * 3600,       // 3
  48 * 3600,       // 4
  168 * 3600,      // 5
  336 * 3600,      // 6
  720 * 3600,      // 7
  2880 * 3600,     // 8
  Infinity, // 9
]
SecToReview[-1] = Infinity;
  
class Mnemonics {
  constructor(meaning, reading) {
    this.meaning = meaning;
    this.reading = reading;
    this.custom_meaning = meaning;
    this.custom_reading = reading;
  }
  
  static fromJSON(json) {
    return new Mnemonics(json.meaning, json.reading);
  }
}
  
class Reading {
  constructor(onyomi, kunyomi, vocab, main_reading) {
    this.onyomi = onyomi || [];
    this.kunyomi = kunyomi || [];
    this.vocab = vocab || [];
    this.main_reading = main_reading || "";
  }
  
  static fromJSON(json) {
    return new Reading(json.onyomi, json.kunyomi, json.vocab, json.main_reading);
  }
}
  
class ResourcePaths {
  constructor(pic, sound, wanikani_link, radical_links, kanji_links) {
    this.pic = pic;
    this.sound = sound;
    this.wanikani_link = wanikani_link;
    this.radical_links = radical_links || [];
    this.kanji_links = kanji_links || [];
  }
  
  static fromJSON(json) {
    return new ResourcePaths(json.pic, json.sound, json.wanikani_link, json.radical_links, json.kanji_links);
  }
}
  
class Hieroglyph {
  constructor(symbol, level, hieroglyph_type, meanings, readings, mnemonics, sentences, resource_paths) {
    this.symbol = symbol;
    this.level = level;
    this.hieroglyph_type = hieroglyph_type;
    this.meanings = meanings || [];
    this.readings = readings;
    this.mnemonics = mnemonics;
    this.sentences = sentences || [];
    this.resource_paths = resource_paths;
    this.progres_level = [-1, -1];
    this.progres_timestamp = [-1, -1];
  }
  
  static fromJSON(json) {
    return new Hieroglyph(
      json.symbol,
      json.level,
      json.hieroglyph_type,
      json.meanings,
      Reading.fromJSON(json.readings),
      Mnemonics.fromJSON(json.mnemonics),
      json.sentences,
      ResourcePaths.fromJSON(json.resource_paths)
      );
  }
}
  
class HieroglyphDB {
  constructor(hieroglyphs) {
    this.hieroglyphs = hieroglyphs || [];
  }
  
  static fromJSON(json) {
    const items = (json.hieroglyphs || []).map(h => Hieroglyph.fromJSON(h));
    return new HieroglyphDB(items);
  }
}
  
//-----------------------------------------------------------
// GLOBALS
//-----------------------------------------------------------
let DB = null;                // Will hold HieroglyphDB
let LinkIdx = null;            // dict with wanikani link: Db idx
let filteredHieroglyphs = []; // Hieroglyphs that match ProgressLevel etc
let currentQuestion = null;   // The current Hieroglyph being asked about
let currentInfo     = null;   // The current Hieroglyph in Info section
let questionType = null;      // either 'meaning', 'reading'
let currentSoundPath = null;  // The sound path to the current vocabulary
let ProgressLevel = 1;        // The current user's progress level
let isLesson = 1;             // either 1 or 0
let learnedHieroglyphs = [];  // today's learned hieroglyphs
let current_timestamp = null; // current timestamp in seconds (UTC)
const kanjiQuotaDefault = 5;  // number of kanji per day
const vocabQuotaDefault = 9;  // number of vocab per day
let kanjiQuota = kanjiQuotaDefault; // can be extended for one day
let vocabQuota = vocabQuotaDefault; // can be extended for one day
let romajiBuffer   = '';      // user english input buffer
let japaneseBuffer = '';      // user japanese input buffer (which is shown)
let soundOn = 1;              // always 1 for now

const NextLevelRadical = 6;      // radical level required for ProgressLevel+=1
const NextLevelKanji = 5;        // kanji level required for ProgressLevel+=1
const NextLevelVocab = 2;        // vocab level required for ProgressLevel+=1
const NextLevelKanjiShare = 0.9; // kanji share leveled required for ProgressLevel+=1
const RadicalKanjiLessonLevel = 5; // radical level required for kanji lesson
const KanjiVocabLessonLevel   = 3; // kanji-compound level required for vocab lesson

//-----------------------------------------------------------
// AUTO ROMAJI-TO-JAPANESE INPUT CONVERSION
//-----------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('answer-input');
  
  inputField.addEventListener('input', () => {
    if (currentQuestion && questionType === 'reading') {
      const japaneseInput= inputField.value;
      // if japaneseInput last character is english character:
      if (/^[a-zA-Z]$/.test(japaneseInput.slice(-1)) ) {
        const newRomajiSymbol = japaneseInput.slice(-1);
        romajiBuffer += newRomajiSymbol;
        inputField.value = _romajiToJapanese(romajiBuffer);
       } else { // else user deleted something probably!
        romajiBuffer = romajiBuffer.slice(0, japaneseInput.length);
       }
      japaneseBuffer = japaneseInput;
    }
  });
});


//-----------------------------------------------------------
// ALL DATA & HANDLERS INITIALIZATION
//-----------------------------------------------------------
window.addEventListener("DOMContentLoaded", async () => {

  // LOAD ALL HIEROGLYPHS
  const loading = document.createElement("loading")
  loading.textContent = "Loading database (11.5 Mb)...";
  loading.style = "position: absolute; margin-top: 30%; left: 25%; font-size: 50px; color: var(--color-purple);";
  document.body.appendChild(loading);
  await _loadHieroglyphDB();
  document.body.removeChild(loading);
  
  // REVIEW & LESSON BUTTONS
  document.getElementById("submit-answer").addEventListener("click", submitClick);
  document.getElementById("show-info-page").addEventListener("click", showInfoForCurrent);
  document.getElementById("LessonButton").addEventListener("click", lessonButtonClick);
  document.querySelectorAll('.back-to-game').forEach(button => {
    button.addEventListener('click', () => {showSection("game-section")});
  });
  document.getElementById("extend-lessons").addEventListener("click", extendLessons);

  // fileSync buttons
  document.getElementById('downloadBtn').addEventListener('click', handleFileDownload);
  document.getElementById('uploadBtn').addEventListener('click', () => {document.getElementById('fileInput').click();});
  document.getElementById('fileInput').addEventListener('change', handleFileUpload);
  
  // INFO SECTION BUTTONS
  document.getElementById("search-button").addEventListener("click", searchHieroglyphs);
  document.getElementById("detail-symbol").addEventListener("click", searchDetail);
  document.getElementById("vocab-sound-button").addEventListener("click", () => _playSound(currentSoundPath)); 
  document.querySelectorAll(".show-mnemonic").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".mnemonic-content").forEach(content => {
        if (content !== button.nextElementSibling) {content.classList.remove("show");}
      });
    button.nextElementSibling.classList.toggle("show");
    resizeMnemonics(document.getElementById('detail-mnemonic-meaning'));
    resizeMnemonics(document.getElementById('detail-mnemonic-reading'));
    });
  });

  document.getElementById('detail-mnemonic-meaning').addEventListener('input', () => {resizeMnemonics(this);});
  document.getElementById('detail-mnemonic-reading').addEventListener('input', () => {resizeMnemonics(this);});

  // KEYBOARD HANDLER
  document.addEventListener('keydown', handleUserInteractionKeyDown);
  
  showSection("game-section");
  loadProgressFromLocalStorage();
});

// show a specific section and hide the others
function showSection(sectionId) {
  const allSections = ["game-section", "info-section", "no-lesson-section"];
  allSections.forEach(s => {
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
  if (sectionId === "game-section") {
    document.getElementById("answer-input").focus();

    // clear info's display
    document.getElementById("search-query").value = "";
    document.getElementById("search-results").innerHTML = "";
    document.getElementById("symbol-composition").innerHTML = "";
    
  }
  else if (sectionId === "info-section") {
    document.getElementById("search-query").focus();
  }
}

// add more lessons for one day - button
function extendLessons() {
  kanjiQuota += kanjiQuotaDefault;
  vocabQuota += vocabQuotaDefault;
  showSection("game-section");
}

// KEYBOARD HANDLER
function handleUserInteractionKeyDown(event) {
  const is_question = !document.getElementById("game-section").classList.contains("hidden");
  const is_info     = !document.getElementById("info-section").classList.contains("hidden");
  
  if (event.key === 'Enter') {
    event.preventDefault();
    if (event.target.id === "detail-mnemonic-meaning" || event.target.id === "detail-mnemonic-reading") {
      customMnemonicSave(event.target.id);
    }

    if (is_question) {submitClick();}
    else if (is_info) {searchHieroglyphs();}
  } else if (event.key === 'Escape') {
    event.preventDefault();
    if (is_question) {showInfoForCurrent();}
    else if (is_info && document.getElementById("search-results").innerHTML) {
      document.getElementById("search-query").value = "";
      document.getElementById("search-results").innerHTML = "";
      document.querySelectorAll(".mnemonic-content").forEach(content => {content.classList.remove("show");});
      searchHieroglyphs();
    }
    else if (!is_question) {showSection("game-section");}
  }
};

// load HieroglyphDB and LinkIdx
async function _loadHieroglyphDB() {
  const response = await fetch("./HieroglyphDB.json");
  const data = await response.json();
  DB = HieroglyphDB.fromJSON(data);

  LinkIdx = {};
  for (let i = 0; i < DB.hieroglyphs.length; i++) {
    LinkIdx[DB.hieroglyphs[i].resource_paths.wanikani_link] = i;
  }
}

//-----------------------------------------------------------
// SWAP BETWEEN LESSON AND REVIEW
//-----------------------------------------------------------
function lessonButtonClick() {
  isLesson = 1 - isLesson;
  is_sampled = showNewQuestion();
  if (is_sampled) {
    document.getElementById("LessonButton").textContent = isLesson ? "Go to Reviews" : "Go to Lessons";
  } else {
    isLesson = 1 - isLesson;
  }
  document.getElementById("submit-answer").textContent = isLesson ? "Next" : "Submit";
}

//-----------------------------------------------------------
// SHOWS A NEW HIEROGLYPH
//-----------------------------------------------------------
function showNewQuestion() {
  romajiBuffer = '';
  japaneseBuffer = '';
  
  // filter hieroglyphs based on ProgressLevel etc
  _filterHieroglyphs();
  updateLevelInfo();

  // Pick a hieroglyph and question type for lesson or review:
  const is_sampled = _sampleQuestion(filteredHieroglyphs);

  if (!is_sampled) {
    // no hieroglyphs left for review/lesson
    document.getElementById("game-section").classList.add("hidden");
    showSection("no-lesson-section");
    if (isLesson) {
      document.getElementById("next-in").innerHTML = "Next lesson in " + "<span style='color:var(--color-primary)'>" + Math.round(_get_next_lesson_sec() / 3600) + "</span>" + " hours... Or do more reviews";
      if (document.getElementById("extend-lessons").classList.contains("hidden")) {
        document.getElementById("extend-lessons").classList.remove("hidden");
      }
    } else {
      document.getElementById("next-in").innerHTML = "Next review in " + "<span style='color:var(--color-primary)'>" + Math.round(_get_next_review_sec() / 60) + "</span>" + " minutes";
      document.getElementById("extend-lessons").classList.add("hidden");
    }
    return false;
    }
    
  // Display the hieroglyph or image
  _showHieroglyph("symbol-display", currentQuestion);
  
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer-input").style.borderBottom = "2px solid var(--color-primary)";
  document.querySelectorAll(".feedback-rectangles").forEach(rect => rect.style.display  = 'none');

  // Display question text
  document.getElementById("question-text").textContent = isLesson ? "INFO" : questionType.toUpperCase();

  if (isLesson) {
    document.getElementById("answer-input").classList.add("hidden");
  } else if (document.getElementById("answer-input").classList.contains("hidden")) {
    document.getElementById("answer-input").classList.remove("hidden"); 
    document.getElementById("answer-input").focus();
  }
  
  return true;
}

function _showHieroglyph(placeholder, h) {
  const is_info = placeholder === "detail-symbol";
  const symbolField = document.getElementById(placeholder);
  symbolField.classList.remove("radical", "kanji", "vocab");
  symbolField.classList.remove("radical-info", "kanji-info", "vocab-info");
  if (h.hieroglyph_type === HieroglyphType.RADICAL) {
    symbolField.classList.add(is_info ? 'radical-info' : "radical");
  } else if (h.hieroglyph_type === HieroglyphType.KANJI) {
    symbolField.classList.add(is_info ? 'kanji-info' : "kanji");
  } else if (h.hieroglyph_type === HieroglyphType.VOCAB) {
    symbolField.classList.add(is_info ? 'vocab-info' : "vocab");
  }
  if (!h.symbol) {
    symbolField.innerHTML = `<img src="${h.resource_paths.pic}" alt="Image for radical" style="max-width: ${is_info?60:80}%; height: auto;">`;
  } else {
    symbolField.textContent = h.symbol;
    switch (symbolField.textContent.length) {
      case 1:
        symbolField.style.fontSize = is_info ? '6em' : '10em';
      break;
      case 2:
        symbolField.style.fontSize = is_info ? '5em' : '8em';
      break;
      case 3:
        symbolField.style.fontSize = is_info ? '4em' : '6em';
      break;
      default:
        symbolField.style.fontSize = ((is_info ? 12 : 16)/symbolField.textContent.length).toFixed(0)+'em';
    }
  }
}

function _get_next_lesson_sec() {
  const now = new Date();
  const startOfTodayUTC = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000);
  return 24*3600 - (Math.floor(Date.now()/1000) - startOfTodayUTC);
}

function _get_next_review_sec() {
  const filteredHieroglyphs =  DB.hieroglyphs.filter(h => ((h.level <= ProgressLevel)));
  const next_review_h = filteredHieroglyphs.reduce((a, b) => {
    const a_meaning = a.progres_timestamp[0] + SecToReview[a.progres_level[0]];
    const b_meaning = b.progres_timestamp[0] + SecToReview[b.progres_level[0]];
    const a_reading = a.progres_timestamp[1] + SecToReview[a.progres_level[1]];
    const b_reading = b.progres_timestamp[1] + SecToReview[b.progres_level[1]];
    return Math.min(a_meaning, a_reading) < Math.min(b_meaning, b_reading) ? a : b;
  })
  current_timestamp = Math.floor(Date.now() / 1000);
  if (next_review_h.progres_timestamp[0] < next_review_h.progres_timestamp[1]) {
    return next_review_h.progres_timestamp[0]+SecToReview[next_review_h.progres_level[0]] - current_timestamp;
  }
  return next_review_h.progres_timestamp[1]+SecToReview[next_review_h.progres_level[1]] - current_timestamp;
}

function _playSound(path) {
  if (path!=null && path.includes("vocabulary")) {
    const audio = new Audio(path);
    audio.play();
  }
}

//-----------------------------------------------------------
// FILTERS HIEROGLYPHS AND SAMPLES currentQuestion HIEROGLYPH
//-----------------------------------------------------------
function _sampleQuestion() {
  if (isLesson) {
    // 5 kanjis and 9 vocab per day!
    const n_kanji_today = learnedHieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.KANJI).length;
    const n_vocab_today = learnedHieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.VOCAB).length;
    questionType = 'meaning';

    for (const hieroglyph of filteredHieroglyphs) {
      if (hieroglyph.progres_level[0] === -1) {
        if (hieroglyph.hieroglyph_type === HieroglyphType.RADICAL) {
          currentQuestion = hieroglyph;
          return true;
        }
        else if (hieroglyph.hieroglyph_type === HieroglyphType.KANJI 
          && filteredHieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.RADICAL).every(h => h.progres_level[0] >= RadicalKanjiLessonLevel)
          && n_kanji_today < kanjiQuota
        ) {
          currentQuestion = hieroglyph;
          return true;
        }
        else if (hieroglyph.hieroglyph_type === HieroglyphType.VOCAB 
          && is_kanji_compounds_learned(hieroglyph)
          && n_vocab_today < vocabQuota) {
          currentQuestion = hieroglyph;
          return true;
        }
      }
    }
    // all hieroglyphs have been learned so only review mode is avaliable!
    return false;
  }

  // Review mode: sample random hieroglyph:
  const sample_hieroglyphs = filteredHieroglyphs.filter(h => h.progres_level[0] > -1);
  if (sample_hieroglyphs.length === 0) {return false;}
  currentQuestion = sample_hieroglyphs[Math.floor(Math.random() * sample_hieroglyphs.length)];
  if (currentQuestion.hieroglyph_type === HieroglyphType.RADICAL || 
    current_timestamp - currentQuestion.progres_timestamp[1] < SecToReview[currentQuestion.progres_level[1]]) {
    questionType = 'meaning';
  }
  else if (current_timestamp - currentQuestion.progres_timestamp[0] < SecToReview[currentQuestion.progres_level[0]]) {
    questionType = 'reading';
  }
  else {questionType = (Math.random() < 0.5) ? 'meaning' : 'reading';}
  return true;
}

function is_kanji_compounds_learned(vocab) {
  // check if all kanji-components have been learned:
  for (let i = 0; i < vocab.resource_paths.kanji_links.length; i++) {
    const kanji_link = vocab.resource_paths.kanji_links[i];
    const progres = DB.hieroglyphs[LinkIdx[kanji_link]].progres_level;
    if (progres[0] < KanjiVocabLessonLevel || progres[1] < KanjiVocabLessonLevel) {return false;}
  }
  return true;
}

function _filterHieroglyphs() {
  // filter all hieroglyphs of lvl up to ProgressLevel if their progress level < 9,
  // which are ready for review or their progress level is -1:
  current_timestamp = Math.floor(Date.now() / 1000);
  filteredHieroglyphs =  DB.hieroglyphs.filter(h => (
    (h.level <= ProgressLevel) && (h.progres_level[0] < 9 || h.progres_level[1] < 9) &&
    (
      h.progres_timestamp[0] === -1 || h.progres_timestamp[1] === -1 ||
      current_timestamp - h.progres_timestamp[0] > SecToReview[h.progres_level[0]] || 
      current_timestamp - h.progres_timestamp[1] > SecToReview[h.progres_level[1]]
    )
  ));
  // filter learnedHieroglyphs so that only today's hieroglyphs stay:
  const now = new Date();
  const startOfTodayUTC = Math.floor(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000);
  learnedHieroglyphs = learnedHieroglyphs.filter(h => (h.progres_timestamp[0]-startOfTodayUTC) < 24*3600);

  if (learnedHieroglyphs.length === 0) {
    kanjiQuota = kanjiQuotaDefault;
    vocabQuota = vocabQuotaDefault;
  }
}
 
//-----------------------------------------------------------
// SUBMIT / NEXT BUTTON: CHECKS USER ANSWER AND UPDATES PROGRESS
//-----------------------------------------------------------
function submitClick() {
  if (isLesson) {
    _update_progress(true, true);
    showNewQuestion();
    return;
  }

  if (document.getElementById("submit-answer").textContent === "Next") {
    is_sampled = showNewQuestion();
    if (is_sampled) {
      document.getElementById("submit-answer").textContent = "Submit";
    }
    return;
  }

  const userAnswer = document.getElementById("answer-input").value.trim();
  
  let correct = false;
  let half_correct = false;
  let possibleAnswers = [];

  if (questionType === 'meaning') {
    possibleAnswers = currentQuestion.meanings;
  } else {
    if (currentQuestion.hieroglyph_type === HieroglyphType.KANJI) {
      if (currentQuestion.readings.main_reading === 'onyomi') {
        possibleAnswers = currentQuestion.readings.onyomi || [];
      } else {
        possibleAnswers = currentQuestion.readings.kunyomi || [];
      }
    }
    else if (currentQuestion.hieroglyph_type === HieroglyphType.VOCAB) {
      possibleAnswers = currentQuestion.readings.vocab || [];
    }
  }

  let softPossibleAnswers = [];
  softPossibleAnswers = softPossibleAnswers.concat(currentQuestion.meanings);
  softPossibleAnswers = softPossibleAnswers.concat(currentQuestion.meanings.map(ans => _romajiToJapanese(ans)));
  softPossibleAnswers = softPossibleAnswers.concat(currentQuestion.readings.kunyomi || []);
  softPossibleAnswers = softPossibleAnswers.concat(currentQuestion.readings.onyomi || []);
  softPossibleAnswers = softPossibleAnswers.concat(currentQuestion.readings.vocab || []);
  softPossibleAnswers = softPossibleAnswers.map(ans => ans.toLowerCase());
  
  let userAnswerLower = userAnswer.toLowerCase();
  possibleAnswers = possibleAnswers.map(ans => ans.toLowerCase());
  if (possibleAnswers.includes(userAnswerLower)) {
    correct = true;
  } else if (softPossibleAnswers.includes(userAnswerLower) || softPossibleAnswers.includes(_romajiToJapanese(userAnswerLower))) {
    half_correct = true;
  }  

  // update progress
  _update_progress(correct, half_correct);

  // FEEDBACK
  _displayFeedback(correct, half_correct, possibleAnswers);
  
  if (correct || !half_correct) {
    document.getElementById("submit-answer").textContent = "Next";
  }
}

function updateLevelInfo() {
  const progress_hieroglyphs = DB.hieroglyphs.filter(h => (h.level === ProgressLevel))

  const nkanji_learned = progress_hieroglyphs.filter(
    h => h.hieroglyph_type === HieroglyphType.KANJI  &&
    h.progres_level[0] >= NextLevelKanji && h.progres_level[1] >= NextLevelKanji
  ).length;

  const nvocab_learned = progress_hieroglyphs.filter(
    h => h.hieroglyph_type === HieroglyphType.VOCAB  &&
    h.progres_level[0] >= NextLevelVocab && h.progres_level[1] >= NextLevelVocab
  ).length;

  document.getElementById("level-info").style.display = 'flex';
  if (isLesson) {
    document.getElementById("n-reviews-lessons").textContent = 'Lessons';
    const n_lessons = filteredHieroglyphs.filter(h => (h.level === ProgressLevel) && (h.progres_timestamp[0] === -1 || h.progres_timestamp[1] === -1));
    document.getElementById("n-reviews-lessons-num").textContent = n_lessons.length;
  } else {
    document.getElementById("n-reviews-lessons").textContent = 'Reviews';
    const n_reviews = filteredHieroglyphs.filter(h => (h.level < ProgressLevel) || (h.progres_level[0] > -1 && h.progres_level[1] > -1));
    document.getElementById("n-reviews-lessons-num").textContent = n_reviews.length;
  }
  document.getElementById("progress-level-num").textContent = ProgressLevel + ' / ' + 60;
  document.getElementById("kanji-level-num").textContent = nkanji_learned + ' / ' + Math.round(progress_hieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.KANJI).length * NextLevelKanjiShare);
  document.getElementById("vocab-level-num").textContent = nvocab_learned + ' / ' + progress_hieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.VOCAB).length;
}

function _update_progress(is_correct, is_half_correct) {  
  if (!is_correct && is_half_correct && !isLesson) {
    return;
  }

  // update levels
  const progres_level_idx = (questionType === 'meaning') ? 0 : 1;
  currentQuestion.progres_level[progres_level_idx] += is_correct ? 1 : (currentQuestion.progres_level[progres_level_idx]<5 ? -1: -2);
  currentQuestion.progres_level[progres_level_idx] = Math.max(0, currentQuestion.progres_level[progres_level_idx]);
  currentQuestion.progres_level[progres_level_idx] = Math.min(9, currentQuestion.progres_level[progres_level_idx]);
  currentQuestion.progres_timestamp[progres_level_idx] = Math.floor(Date.now()/1000);

  if (currentQuestion.hieroglyph_type === HieroglyphType.RADICAL || isLesson) {
    currentQuestion.progres_level[1-progres_level_idx] = currentQuestion.progres_level[progres_level_idx];
    currentQuestion.progres_timestamp[1-progres_level_idx] = currentQuestion.progres_timestamp[progres_level_idx];
  }
  if (isLesson) {
    learnedHieroglyphs.push(currentQuestion);
  }

  saveProgressToLocalStorage();

  // check if progress level can be updated
  // all of radical should be >= NextLevelRadical
  // NextLevelKanjiShare of kanji should be >= NextLevelKanji
  // all of vocab should be >= NextLevelVocab
  const ProgressHieroglyphs = filteredHieroglyphs.filter(h => (h.level <= ProgressLevel));
  let n_kanji_learned = 0;
  for (const hieroglyph of ProgressHieroglyphs) {
    switch (hieroglyph.hieroglyph_type) {
      case HieroglyphType.RADICAL: 
        if (hieroglyph.progres_level[0] < NextLevelRadical) {return;}
      case HieroglyphType.KANJI:
        if (hieroglyph.progres_level[0] >= NextLevelKanji) {n_kanji_learned += 1;}
        if (hieroglyph.progres_level[1] >= NextLevelKanji) {n_kanji_learned += 1;}
      case HieroglyphType.VOCAB:
        if (hieroglyph.progres_level[0] < NextLevelVocab) {return;}
        if (hieroglyph.progres_level[1] < NextLevelVocab) {return;}
    }
  }
  if (n_kanji_learned < NextLevelKanjiShare * ProgressHieroglyphs.filter(h => h.hieroglyph_type === HieroglyphType.KANJI).length) {return;}
  ProgressLevel += 1;
}

function _displayFeedback(is_correct, is_half_correct, possibleAnswers) {
  // play sound if vocab reading + correct + soundOn
  if (currentQuestion.hieroglyph_type === HieroglyphType.VOCAB && questionType === 'reading' && is_correct && soundOn) {
    currentSoundPath = 'sounds/'+encodeURIComponent(currentQuestion.resource_paths.sound);
    _playSound(currentSoundPath);
  }
  
  // half correct feedback
  const feeDBackEl = document.getElementById("feedback");
  if (!is_correct && is_half_correct) {
    if (questionType === 'reading') {
      let main_reading = currentQuestion.readings.main_reading;
      main_reading = main_reading ? main_reading[0].toUpperCase() + main_reading.slice(1) + ' r' : 'R';
      feeDBackEl.textContent = `Almost! ${main_reading}eading expected`;
    } else {
      feeDBackEl.textContent = "Almost! Meaning expected";
    }
    feeDBackEl.style.color = "var(--color-blue)";
    return;
  }
  
  // correct/incorrect feedback
  if (is_correct) {
    feeDBackEl.textContent = "Correct! New progress level: " + HieroglyphProgress[currentQuestion.progres_level[(questionType === "meaning") ? 0 : 1]];
  } else {
    feeDBackEl.textContent = "Incorrect! Possible answers: " + possibleAnswers.join(", ");
  }
  feeDBackEl.style.color = is_correct ? "var(--color-correct)" : "var(--color-incorrect)";

  document.getElementById("answer-input").style.borderBottom = is_correct ? "2px solid var(--color-correct)" : "2px solid var(--color-incorrect)";
  document.querySelectorAll(".feedback-rectangles").forEach(rect => rect.style.display  = 'flex');
  document.querySelectorAll(".feedback-rectangles").forEach(rect => rect.style.backgroundColor = 'var(--color-'+(is_correct ? 'correct)' : 'incorrect)'));
  document.querySelectorAll(".feedback-rectangles").forEach(rect => rect.textContent = is_correct ? '⛩️正しい⛩️' : '🌋正しくない🌋');
}
  
//-----------------------------------------------------------
// INFO SECTION
//-----------------------------------------------------------
function showInfoForCurrent() {
  showSection("info-section");
  fillHieroglyphDetail(currentQuestion);
}
  
function searchHieroglyphs() {
  const query = document.getElementById("search-query").value.trim().toLowerCase();
  const resultsEl = document.getElementById("search-results");
  resultsEl.innerHTML = "";

  if (!query) {return;};
  
  // Search ANY parameter and sort by priority
  // For example: symbol matches, or included in meaning, or level is the query, etc.
  let results = DB.hieroglyphs.filter(h => {
    h._priority = 0;
    
    // specials
    if ((h.level + h.hieroglyph_type[0]) === query) {h._priority = 1; return true;}
    if ((h.level + h.hieroglyph_type[0] + h.symbol) === query.split(' ')[0]) {
      h._priority = 1; 
      if (query.split(' ').length === 3 && !isNaN(query.split(' ')[1]) && !isNaN(query.split(' ')[2])) {
        const p2 = parseInt(query.split(' ')[1]);
        const p3 = parseInt(query.split(' ')[2]);
        if (p2 >= -1 && p2 <= 9 && p3 >= -1 && p3 <= 9) {h.progres_level = [p2, p3];}
      }
      return true;
    }

    // try symbol / meanings:
    if (h.symbol.toLowerCase().includes(query)) {h._priority = 2; return true;}
    if (h.meanings.some(m => m.toLowerCase().includes(query))) {h._priority = 2; return true;}

    // try kana readings:
    if (h.readings.vocab.some(r => r.toLowerCase().includes(query))) {h._priority = 3; return true;}
    if (h.readings.onyomi.some( r => (r.toLowerCase().includes(query) && h.readings.main_reading === "onyomi" ))) {h._priority = 3; return true;}
    if (h.readings.kunyomi.some(r => (r.toLowerCase().includes(query) && h.readings.main_reading === "kunyomi"))) {h._priority = 3; return true;}

    // try romaji readings:
    if (h.readings.vocab.some(r => r.toLowerCase().includes(_romajiToJapanese(query)))) {h._priority = 4; return true;}
    if (h.readings.onyomi.some( r => (r.toLowerCase().includes(_romajiToJapanese(query)) && h.readings.main_reading === "onyomi")))  {h._priority = 4; return true;}
    if (h.readings.kunyomi.some(r => (r.toLowerCase().includes(_romajiToJapanese(query)) && h.readings.main_reading === "kunyomi"))) {h._priority = 4; return true;}

    if (h.readings.onyomi.some( r => r.toLowerCase().includes(query))) {h._priority = 5; return true;}
    if (h.readings.kunyomi.some(r => r.toLowerCase().includes(query))) {h._priority = 5; return true;}
    if (h.readings.onyomi.some( r => r.toLowerCase().includes(_romajiToJapanese(query)))) {h._priority = 6; return true;}
    if (h.readings.kunyomi.some(r => r.toLowerCase().includes(_romajiToJapanese(query)))) {h._priority = 6; return true;}

    // try compounds:
    if (h.resource_paths.radical_links.some(r => DB.hieroglyphs[LinkIdx[r]].symbol.toLowerCase().includes(query))) {h._priority = 7; return true;}
    if (h.resource_paths.kanji_links.some(  r => DB.hieroglyphs[LinkIdx[r]].symbol.toLowerCase().includes(query))) {h._priority = 7; return true;}
    if (h.resource_paths.radical_links.some(r => DB.hieroglyphs[LinkIdx[r]].meanings.some(m => m.toLowerCase().includes(query)))) {h._priority = 7; return true;}
    if (h.resource_paths.kanji_links.some(  r => DB.hieroglyphs[LinkIdx[r]].meanings.some(m => m.toLowerCase().includes(query)))) {h._priority = 7; return true;}

    // try mnemonics:
    if (h.mnemonics.custom_meaning.toLowerCase().includes(query)) {h._priority = 8; return true;}
    if (h.mnemonics.custom_reading.toLowerCase().includes(query)) {h._priority = 8; return true;}
    if (h.mnemonics.meaning.toLowerCase().includes(query)) {h._priority = 9; return true;}
    if (h.mnemonics.reading.toLowerCase().includes(query)) {h._priority = 9; return true;}
    

    return false;
  }).sort((a, b) => a._priority - b._priority);
  
  let searchLength = Math.min(results.length, 64);
  if (results.some(h => h._priority == 1)) {
    results = results.filter(h => h._priority == 1);
    searchLength = results.length;
  }
  
  if (searchLength === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found.";
    li.style = "border: 2px solid var(--color-incorrect); color: var(--color-incorrect); padding: 10px;"; 
    resultsEl.style.display = "flex";
    resultsEl.appendChild(li);
    return;
  }
  resultsEl.style.display = "grid";

  for (let i = 0; i < searchLength; i++) {
    const li = document.createElement("li");
    li.textContent = results[i].symbol + " (" + results[i].meanings[0] + ")";
    switch (results[i].hieroglyph_type) {
      case HieroglyphType.RADICAL:
        li.classList.add("radical-search");
        break;  
      case HieroglyphType.KANJI:
        li.classList.add("kanji-search");
        break;
      case HieroglyphType.VOCAB:
        li.classList.add("vocab-search");
        break;
    }
    li.onclick = () => fillHieroglyphDetail(results[i]);
    resultsEl.appendChild(li);
  }
}

// fill all info for a hieroglyph
function fillHieroglyphDetail(h) {
  currentInfo = h;
  document.getElementById("hieroglyph-detail").classList.remove("hidden");
  document.getElementById("vocab-sound-button").classList.add("hidden");
  document.getElementById("line-radical").classList.add("hidden");
  document.getElementById("onkun").style.display='none';

  const progress = h.progres_level[0] > -1 ? '(' + HieroglyphProgress[h.progres_level[0]] + ', ' + HieroglyphProgress[h.progres_level[1]]+')': HieroglyphProgress[h.progres_level[0]];
  document.getElementById("detail-level").innerHTML = "Level: " + "<span style='color:var(--color-purple); font-size: 20px; font-weight: bold'>" + h.level + "</span>" +
    "<br><br>" + "Progress: " + "<span style='color:var(--color-purple); font-size: 20px; font-weight: bold'>" + progress + "</span>";

  const meaning = h.meanings[0].charAt(0).toUpperCase() + h.meanings[0].slice(1) + (h.meanings.length > 1 ? ', ' : '');
  const meanings = h.meanings.length > 1 ? h.meanings.slice(1).join(", ") : '';
  document.getElementById("detail-meaning").textContent = meaning;
  document.getElementById("extra-meanings").textContent = meanings;

  const composition = document.getElementById("symbol-composition");
  composition.innerHTML = "";

  const composition_links = h.hieroglyph_type === HieroglyphType.RADICAL ? [] : (h.hieroglyph_type === HieroglyphType.KANJI ? h.resource_paths.radical_links : h.resource_paths.kanji_links);
  for (let i = 0; i < composition_links.length; i++) {
    if (i > 0) {
      const plus = document.createElement("span");
      plus.textContent = "+";
      plus.style = 'margin: 0 10px; margin-top: 15px; color: var(--color-primary); font-size: 30px;';
      composition.appendChild(plus);
    }
    const li = document.createElement("li");
    const link_hieroglyph = DB.hieroglyphs[LinkIdx[composition_links[i]]];
    li.textContent = link_hieroglyph.symbol;
    li.classList.add((link_hieroglyph.hieroglyph_type === HieroglyphType.RADICAL) ? "radical-search" : "kanji-search");
    li.onclick = () => {composition.innerHTML = ""; fillHieroglyphDetail(link_hieroglyph);}
    composition.appendChild(li);
  }
  

  if (h.hieroglyph_type === HieroglyphType.RADICAL) {
    document.getElementById("line-radical").classList.remove("hidden");
  }
  else if (h.hieroglyph_type === HieroglyphType.KANJI) {
    document.getElementById("line-radical").classList.remove("hidden");
    document.getElementById("onkun").style.display = 'flex';

    const onyomi_style  = (h.readings.main_reading === 'onyomi') ? h.readings.onyomi.join(", ") : '<span class="faded">' + h.readings.onyomi.join(", ")  + '</span>';
    const kunyomi_style = (h.readings.main_reading === 'kunyomi') ? h.readings.kunyomi.join(", ") : '<span class="faded">' + h.readings.kunyomi.join(", ")  + '</span>';

    document.getElementById("detail-onyomi").innerHTML  = onyomi_style;
    document.getElementById("detail-kunyomi").innerHTML = kunyomi_style;
  }
  else if (h.hieroglyph_type === HieroglyphType.VOCAB) {
    document.getElementById("vocab-sound-button").classList.remove('hidden');
    currentSoundPath = 'sounds/'+encodeURIComponent(h.resource_paths.sound);
    document.getElementById("vocab-sound-button").textContent = h.readings.vocab.join(", ");
  }
  document.querySelectorAll(".mnemonic-content").forEach(content => content.classList.remove("show"));
  document.getElementById("detail-mnemonic-meaning").value = h.mnemonics.custom_meaning;
  document.getElementById("detail-mnemonic-reading").value = h.mnemonics.custom_reading;
  
  // Sentences
  const detailSentences = document.getElementById("detail-sentences");
  detailSentences.innerHTML = "";

  if (h.sentences.length > 0) {
    h.sentences.forEach(s => {
      const li = document.createElement("li");
      li.classList.add("sentence-item");

      const jpSpan = document.createElement("span");
      jpSpan.classList.add("japanese");
      jpSpan.textContent = s[0]; // Assuming first part is Japanese

      const transSpan = document.createElement("span");
      transSpan.classList.add("translation");
      transSpan.textContent = s[1]; // Assuming second part is translation

      li.appendChild(jpSpan);
      li.appendChild(transSpan);
      detailSentences.appendChild(li);
    });
  }

  _showHieroglyph("detail-symbol", h);
  
  document.getElementById("detail-wanikani-link").href = h.resource_paths.wanikani_link || "#";
}

function resizeMnemonics(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function customMnemonicSave(targetId) {
  const customMnemonic = document.getElementById(targetId).value;
  if (targetId === "detail-mnemonic-meaning") {
    currentInfo.mnemonics.custom_meaning = customMnemonic;
  } else if (targetId === "detail-mnemonic-reading") {
    currentInfo.mnemonics.custom_reading = customMnemonic;
  }

  // flash effect
  const textarea = document.getElementById(event.target.id);
  textarea.classList.add('flash-effect');
  setTimeout(() => {
    textarea.classList.remove('flash-effect');
  }, 500);

  saveProgressToLocalStorage();
}

function searchDetail() {
  document.getElementById("search-query").value = currentInfo.symbol;
  searchHieroglyphs();
}

// ---------------------------------------
// Load and Save from localStorage
// ---------------------------------------
function loadProgressFromLocalStorage() {
  const savedData = localStorage.getItem("JaniPaniProgress");
  if (!savedData) {
    showNewQuestion();
    return;
  }
  const jsonData = JSON.parse(savedData);
  _overwriteDB(jsonData)

  if (isLesson) lessonButtonClick();
  showNewQuestion();
}
  
function saveProgressToLocalStorage() {
  const jsonData = _fetchProgress();
  localStorage.setItem("JaniPaniProgress", JSON.stringify(jsonData));
}

//-----------------------------------------------------------
// "LOAD" and "SAVE" BUTTONS
//-----------------------------------------------------------
async function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) {
    alert('No file selected!');
    return;
  }

  const reader = new FileReader();
  let jsonData = {};
  reader.onload = function(e) {
    jsonData = JSON.parse(e.target.result);
    _overwriteDB(jsonData);

    if (isLesson) lessonButtonClick();
    showNewQuestion();
  };
  reader.readAsText(file);
}

function handleFileDownload() {
  const jsonData = _fetchProgress();
  const dataStr = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'JaniPaniProgress.json';
  document.body.appendChild(a);
  a.click();

  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}


// ---------------------------------------
// fetch Json & overwrite DB
// ---------------------------------------
function _fetchProgress() {
  const jsonData = {};
  for (const h of DB.hieroglyphs) {
    const is_progress = (h.level <= ProgressLevel) && (h.progres_level[0] !== -1 || h.progres_level[1] !== -1);
    const is_custom_meaning = h.mnemonics.meaning !== h.mnemonics.custom_meaning;
    const is_custom_reading = h.mnemonics.reading !== h.mnemonics.custom_reading;

    if (is_progress || is_custom_meaning || is_custom_reading) {
      jsonData[h.resource_paths.wanikani_link] = {
        'progres_level': "",
        'progres_timestamp': "",
        'custom_meaning': "",
        'custom_reading': "",
      };
      if (is_progress) {
        jsonData[h.resource_paths.wanikani_link]['progres_level']     = h.progres_level;
        jsonData[h.resource_paths.wanikani_link]['progres_timestamp'] = h.progres_timestamp;
      }
      if (is_custom_meaning) jsonData[h.resource_paths.wanikani_link]['custom_meaning'] = h.mnemonics.custom_meaning;
      if (is_custom_reading) jsonData[h.resource_paths.wanikani_link]['custom_reading'] = h.mnemonics.custom_reading;
    }
  }
  return jsonData;
}

function _overwriteDB(jsonData) {
  ProgressLevel = 1;
  for (let h of DB.hieroglyphs) {
    const wanikani_link = h.resource_paths.wanikani_link;
    if (jsonData[wanikani_link] && jsonData[wanikani_link].progres_level) {
      h.progres_level = jsonData[wanikani_link].progres_level;
      h.progres_timestamp = jsonData[wanikani_link].progres_timestamp;
      if (h.level > ProgressLevel) ProgressLevel = h.level;
    } else {
      h.progres_level = [-1, -1];
      h.progres_timestamp = [-1, -1];
    }
    // If custom mnemonic
    if (jsonData[wanikani_link] && (jsonData[wanikani_link].custom_meaning || jsonData[wanikani_link].custom_reading)) {
      h.mnemonics.custom_meaning = jsonData[wanikani_link].custom_meaning;
      h.mnemonics.custom_reading = jsonData[wanikani_link].custom_reading;
    }
  }
}