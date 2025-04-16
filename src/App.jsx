// ✅ ملف: src/App.jsx

import React, { useState } from "react";

export default function App() {
  const [lesson, setLesson] = useState("main");

  const openSketchfab = () => {
    window.open("https://sketchfab.com/3d-models/heart-3d-organ-4ef81eb13225438192ca0a23e3794ee1", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full text-center">
        {lesson === "main" && (
          <>
            <h1 className="text-3xl font-bold mb-2 text-pink-600">mLearnKW 📚</h1>
            <p className="text-lg mb-4">اختر طريقتك المفضلة للتعلم 👇</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setLesson("visual")}
                className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600"
              >
                بصري (صور)
              </button>
              <button
                onClick={() => setLesson("bloodflow")}
                className="bg-red-400 text-white px-4 py-2 rounded-xl shadow hover:bg-red-500"
              >
                رحلة الدم 🩸
              </button>
            </div>
          </>
        )}

        {lesson === "visual" && (
          <>
            <h2 className="text-xl font-semibold mb-2">درس: القلب (visual)</h2>
            <button
              onClick={openSketchfab}
              className="text-blue-600 underline mb-4 block"
            >
              💗 عرض نموذج القلب
            </button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Diagram_of_the_human_heart_%28cropped%29.svg/1024px-Diagram_of_the_human_heart_%28cropped%29.svg.png"
              alt="مخطط القلب"
              className="rounded-xl shadow mb-4 mx-auto"
            />
            <button
              onClick={() => setLesson("main")}
              className="text-gray-500 text-sm underline"
            >
              🔙 العودة للاختيار
            </button>
          </>
        )}

        {lesson === "bloodflow" && (
          <>
            <h2 className="text-xl font-semibold mb-2">🩸 رحلة الدم في القلب</h2>
            <p className="mb-4 text-gray-700">
              يدخل الدم غير المؤكسج من الجسم إلى الأذين الأيمن، ثم ينتقل إلى البطين الأيمن، ومنه إلى الرئتين ليتأكسج.
              بعد ذلك يعود إلى الأذين الأيسر، ثم البطين الأيسر، وأخيراً يُضخ إلى الجسم كله.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Heart_diagram_blood_flow_arrows.svg/1024px-Heart_diagram_blood_flow_arrows.svg.png"
              alt="رحلة الدم"
              className="rounded-xl shadow mb-4 mx-auto"
            />
            <button
              onClick={() => setLesson("main")}
              className="text-gray-500 text-sm underline"
            >
              🔙 العودة للاختيار
            </button>
          </>
        )}
      </div>
    </div>
  );
}
