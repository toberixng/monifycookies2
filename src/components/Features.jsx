import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>The Awesome Team</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Meet the team behind the technology</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.Abdulrasak} iconText="Abdulrasak Abdulkadir" />
          <FeatureCard iconUrl={assets.Ndifereke} iconText="Ndifereke Mathew Sam" />
          <FeatureCard iconUrl={assets.Toby} iconText="Oluwatobi Fatumo" />
          <FeatureCard iconUrl={assets.Ademola} iconText="Ademola Joseph" />
        </div>
      </div>
    </div>
  )
}

export default Features