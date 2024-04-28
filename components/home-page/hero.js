import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/robot.png"
          alt="An image showing me!"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Robot</h1>
      <p>I blog about tech stuff... you know what I mean.</p>
    </section>
  );
}

export default Hero;
