
import React, { useState } from "react";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [learningStyle, setLearningStyle] = useState(null);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const reset = () => {
    setSelectedSubject(null);
    setSelectedLesson(null);
    setLearningStyle(null);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', background: 'linear-gradient(to bottom right, #c7e7f9, #fef3f5)', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: 'auto', background: '#fff', borderRadius: 20, padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2rem', color: '#d63384', marginBottom: '1rem' }}>mLearnKW 📚</h1>

        {!selectedSubject ? (
          <>
            <h2>اختر المادة التعليمية</h2>
            <button onClick={() => handleSelectSubject("science")}>🧪 العلوم</button>
          </>
        ) : !selectedLesson ? (
          <>
            <h2>اختر الدرس</h2>
            <button onClick={() => handleSelectLesson("heart")}>🫀 القلب</button>
          </>
        ) : !learningStyle ? (
          <>
            <h2>شلون تبي تتعلّم؟</h2>
            <button onClick={() => setLearningStyle("visual")}>👁️ بصري</button>
            <button onClick={() => setLearningStyle("auditory")}>🎧 سمعي</button>
            <button onClick={() => setLearningStyle("kinesthetic")}>🕹 تجريبي</button>
            <button onClick={() => setLearningStyle("reading")}>📖 قرائي</button>
            <button onClick={() => setLearningStyle("story")}>📚 قصصي</button>
          </>
        ) : (
          <div>
            <h2>درس: القلب ({learningStyle})</h2>

            {learningStyle === "visual" && (
              <>
                <p><a href="https://sketchfab.com/models/4ef81eb13225438192ca0a23e3794ee1" target="_blank">عرض نموذج القلب 🫀</a></p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Diagram_of_the_human_heart_%28cropped%29.svg" alt="رسم القلب" style={{ maxWidth: '100%', borderRadius: 10 }} />
              </>
            )}

            {learningStyle === "auditory" && (
              <p>🎧 استمع إلى شرح صوتي بسيط (لاحقًا)</p>
            )}

            {learningStyle === "kinesthetic" && (
              <p>🕹 استخدم الإطار التفاعلي لتحريك المجسم (مثال IR Frame)</p>
            )}

            {learningStyle === "reading" && (
              <>
                <p>القلب هو عضو يضخ الدم، يحتوي على أربع حجرات...</p>
                <ul style={{ textAlign: 'right' }}>
                  <li>ما وظيفة القلب؟</li>
                  <li>كم عدد حجراته؟</li>
                </ul>
              </>
            )}

            {learningStyle === "story" && (
              <p>📚 كان يا ما كان... في جسد صغير، قلب يحب مساعدة الأعضاء ❤️</p>
            )}

            <button onClick={reset} style={{ marginTop: 20 }}>🔁 العودة للاختيار</button>
          </div>
        )}
      </div>
    </div>
  );
}
