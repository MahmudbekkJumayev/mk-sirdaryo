import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-700">
      <div className="container py-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white">
              <a href="">Matbuotga ko'makchi Sirdaryo</a>
            </p>
            <p className="text-white">
              <a href="">&copy; Все права защищены 2011-2025</a>
            </p>
          </div>
          <div>
            <p className="text-white">
              <a href="">Sirdaryo viloyati, Guliston shahri</a>
            </p>
            <p className="text-white">
              <a href="">Eshonxo'jayev ko'chasi, 56A</a>
            </p>
          </div>
          <div>
            <p className="text-white">
              <a href="">info@mk-sirdaryo.uz</a>
            </p>
            <p className="text-white">
              <a href="">+998(93) 324 5666</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
