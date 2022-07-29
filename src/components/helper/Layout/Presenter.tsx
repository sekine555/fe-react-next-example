import Header from "@/components/Header";
import Contents from "../Contents";

interface Props {
  children: React.ReactNode;
}

const Presenter: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
    </>
  );
};

export default Presenter;
