import PrintExample from "./PrintExample";

interface Props {
  componentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const PrintExampleContainer: React.FC<Props> = ({ componentRef }) => {
  return (
    <>
      <PrintExample componentRef={componentRef} />
    </>
  );
};

export default PrintExampleContainer;
