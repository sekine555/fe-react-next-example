import { NextPage } from "next";
import TablarForm from "@/components/TablarForm";
import Layout from "@/components/helper/Layout";
import { ScoreTableData, ScoreTableHeaderData } from "@/mock/ScoreData";

const TablarFormPage: NextPage = () => {
  // 開発用のモックデータ
  const scoreTableHeader = [...ScoreTableHeaderData];
  const scroreTableA = [...ScoreTableData];
  const scroreTableB = [...ScoreTableData];

  return (
    <>
      <Layout>
        <TablarForm
          scoreTableHeader={scoreTableHeader}
          scroreTableA={scroreTableA}
          scroreTableB={scroreTableB}
        />
      </Layout>
    </>
  );
};

export default TablarFormPage;
