import styles from "./bubble.module.css";

export const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300 cursor-pointer">
      {"React Minimal Starter Template".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
