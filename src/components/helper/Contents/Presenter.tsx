import styles from "./Contents.module.scss";

interface Props {
  children?: React.ReactNode;
}

const Presenter: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <main
        id={"container"}
        className={`py-4 mx-auto flex-auto max-w-7xl mt-0 mb-10 pt-10 px-2 ${styles.heightContents}`}
      >
        {children}
      </main>
    </>
  );
};

export default Presenter;
