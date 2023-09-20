import React from "react";
import infoConfig from "../../config/infoConfig";

import "./Info.css";

const Info = () => {
  return (
    <div className="center">
      <table className="rounded-corners">
        <tbody>
          {infoConfig.info.map((item, index) => (
            <tr key={index}>
              <td className={`${index % 2 === 0 ? "bgDark" : "bgLight"} bold`}>
                {item.title}
              </td>
              <td className={`${index % 2 === 0 ? "bgLight" : "bgDark"} value`}>
                {Array.isArray(item.body) ? (
                  <>
                    {item.title == "Email" ? (
                      <a href={`mailto:${item.body[0]}`}>{item.body[0]} </a>
                    ) : (
                      item.body[0]
                    )}
                    <br />
                    {item.title == "Email" ? (
                      <a href={`mailto:${item.body[1]}`}>{item.body[1]} </a>
                    ) : (
                      item.body[1]
                    )}
                  </>
                ) : (
                  item.body
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Info;
