import { NextPage } from "next";
import TablarForm from "@/components/TablarForm";
import Layout from "@/components/helper/Layout";

const TablarFormPage: NextPage = () => {
  return (
    <>
      <Layout>
        <TablarForm />
      </Layout>
    </>
  );
};

export default TablarFormPage;
