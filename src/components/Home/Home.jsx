import React from "react";
import Form from "./Form";

const Home = () => {
  return (
    <div className="container py-5">
      <div>
        <h2 className="text-[20px] md:text-[30px] font-medium text-gray-900 text-center">
          2025-YIL UCHUN DAVRIY NASHRLARGA OBUNA BO'LISH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-5">
          <div>
            <Form />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[25px] text-gray-900 font-bold">
              Dastur xaqida
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-gray-900 font-medium text-[17px]">
                Ushbu dastur{" "}
                <span className="text-blue-700"> "Nextin Web Studio"</span>{" "}
                tomonidan obuna xizmatiga yordamlashish maqsadida ishlab
                chiqildi. Dasturdan maqsad obunachilarga qulayliklar yaratish,
                ularga gazeta va jurnallarni o'z vaqtida yetkazib berish va
                obuna davridan ularni xabardor qilib turish. Dasturimiz undan
                tashqari sizga quydagi qulayliklarni yaratib beradi!
              </p>
              <span className="text-[16px] text-gray-800">
                <p>1: Har obuna davridan sizni xabardor qilib turish;</p>
                <p>
                  2) Obuna bo'lgan nashrlar soni to'lovlar va boshqa kerakli
                  ma'lumotlarni shahasiy kabinetda kuzatib borish;
                </p>
                <p>
                  3) Obunaning yetkazib berish vaqt yoki kechikish sabablarini
                  muntazam kuzatib borish;
                </p>
                <p>
                  4) Davlat korxonalari uchun xisobotlarni online topshirish;
                </p>
                <p>
                  5) Har qanday gadjetdan foydalanish mumkinligi, zamonaviy
                  bo'lmagan (Eski tugmali telefonlar, internetsiz) uyali aloqa
                  vositalarida yuqoridagi barcha imkoniyatlarni qisqa buyruqlar
                  yordamida amalga oshirish;
                </p>
              </span>
              <p className="text-center font-medium">Dastur ayni vaqtda test ko'rinishida ishlamoqda. Ushbu sanalgan qulaykiklar tez orada ishga tushuriladi!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
