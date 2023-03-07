import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./index.module.less";
const Footer = () => {
  const [val, setVal] = useState("");

  const submit = () => {
    console.log("submit", val);
  };
  
  return (
    <div className={s.footer}>
      <textarea
        className={s.textarea}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          switch (e.code) {
            case "Enter":
              submit();
              // 考虑使用组合键回车功能
              // e.preventDefault();
              break;
            default:
              break;
          }
        }}
      />
    </div>
  );
};

export default Footer;
