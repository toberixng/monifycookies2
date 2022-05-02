import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
      <>
        <div class="my-px px-px w-1/1 overflow-hidden sm:my-px sm:px-px md:my-px md:px-px lg:my-px lg:px-px xl:my-px xl:px-px">
          <div
            className={styles.btnBlack}
            onClick={() => window.open(link, "_blank")}
          >
            <img
              src={assetUrl}
              alt="Chrome extension"
              className={styles.btnIcon}
            />
            <div className="flex flex-col justify-start ml-4">
              <p className={`${styles.btnText} font-normal text-xs`}>Mozilla</p>
              <p className={`${styles.btnText} font-bold text-sm`}>Extension</p>
            </div>
          </div>
        </div>
      </>
  );
};

export default Button;
