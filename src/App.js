import { Download, Features, SectionWrapper, Header } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Make money from accepting our cookies"
        description="Monify cookies is a browser plugin extension that provides its,
        users, the ability to block all unsolicited ads."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart & beautiful User Interface"
        description="The interface was carefully crafted to give users, Advertisers and Publishers the best experience they deserve"
        mockupImg={assets.homeCards}
        reverse
      />

      <SectionWrapper
        title="Don't worry about Internet speed"
        description="MonifyCookies gives you the smooth and speed experience you deserve to surf the internet."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <SectionWrapper
        title="Choose the Ads that is right for you"
        description="We have designed the application to filter out all unwanted advertisements."
        mockupImg={assets.feature}
        reverse
      />

      <Features />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">MonifyCookies Team</span>
        </p>
      </div>
    </>
  );
};

export default App;
