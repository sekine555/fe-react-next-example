import { SubjectType, SubjectTypes } from "@/type/domain/constants/Subject";
import { ScoreTable } from "@/type/domain/ScoreTable/ScoreTable";
import React, { useState } from "react";
import {
  FieldArrayWithId,
  SubmitHandler,
  useFieldArray,
  UseFieldArrayInsert,
  useForm,
} from "react-hook-form";
import Presenter from "./Presenter";
import { FieldArrayName, ItemKey } from "./type";

interface Props {
  scroreTableA: ScoreTable[];
  scroreTableB: ScoreTable[];
}

export interface ScoreFormData {
  scoreTableAItems: ScoreTable[];
  scoreTableBItems: ScoreTable[];
}

const TablarForm: React.FC<Props> = (props) => {
  const { scroreTableA, scroreTableB } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScoreFormData>({
    defaultValues: {
      scoreTableAItems: scroreTableA,
      scoreTableBItems: scroreTableB,
    },
  });

  console.log("エラー：", errors);

  const { fields: scoreTableAItems, insert: insertTableA } = useFieldArray({
    control,
    name: FieldArrayName.SCORE_TABLE_A,
  });

  const { fields: scoreTableBItems, insert: insertTableB } = useFieldArray({
    control,
    name: FieldArrayName.SCORE_TABLE_B,
  });

  const [selectedSubject, setSelectedSubject] = useState<SubjectType>(
    SubjectTypes[0],
  );
  /**
   * 教科のドロップダウンリスト変更イベント処理
   * @param event チェンジイベント要素
   */
  const handleChangeSubject = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const value = JSON.parse(event.target.value) as SubjectType;
      setSelectedSubject(value);
    } catch (error) {
      throw new Error(`SubjectTypeの型アサーションエラー: ${error}`);
    }
  };

  const handleClickInsertRow = (
    insert: UseFieldArrayInsert<ScoreFormData, FieldArrayName>,
    items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[],
    subject: SubjectType,
  ) => {
    // 引数に指定された教科の末尾に新規の入力行を追加する
  };

  /**
   * スコア登録処理
   * @param data 入力データ
   */
  const handleSubmitScoreRegistration: SubmitHandler<ScoreFormData> = (
    data: ScoreFormData,
  ) => {
    console.log("submit data:", data);
  };

  return (
    <Presenter
      register={register}
      selectedSubject={selectedSubject}
      onChangeSubject={handleChangeSubject}
      onClickInsertRow={handleClickInsertRow}
      onSubmit={handleSubmit}
      onSubmitScoreRegistration={handleSubmitScoreRegistration}
      errors={errors}
    />
  );
};

export default TablarForm;
