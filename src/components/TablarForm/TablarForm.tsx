import { SubjectType, SubjectTypes } from "@/type/domain/constants/Subject";
import { Score, ScoreTable } from "@/type/domain/ScoreTable/ScoreTable";
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
  scoreTableHeader: string[];
  scroreTableA: ScoreTable[];
  scroreTableB: ScoreTable[];
}

export interface ScoreFormData {
  scoreTableAItems: ScoreTable[];
  scoreTableBItems: ScoreTable[];
}

const TablarForm: React.FC<Props> = (props) => {
  const { scoreTableHeader, scroreTableA, scroreTableB } = props;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ScoreFormData>({
    defaultValues: {
      scoreTableAItems: scroreTableA,
      scoreTableBItems: scroreTableB,
    },
    mode: "onSubmit", // registerをいつ検証するかの指定（デフォルトは、onSubmit）
    reValidateMode: "onSubmit", // エラー後の再検証イベントの指定（デフォルトは、onChange）
  });

  // スコアテーブルAのuseFieldArray構築
  const { fields: scoreTableAItems, insert: insertTableA } = useFieldArray({
    control,
    name: FieldArrayName.SCORE_TABLE_A,
  });

  // スコアテーブルBのuseFieldArray構築
  const { fields: scoreTableBItems, insert: insertTableB } = useFieldArray({
    control,
    name: FieldArrayName.SCORE_TABLE_B,
  });

  const [selectedTableASubject, setSelectedTableASubject] =
    useState<SubjectType>(SubjectTypes[0]);
  /**
   * スコアテーブルAの教科選択ドロップダウンリスト変更イベント処理
   * @param event チェンジイベント要素
   */
  const handleChangeTableASubject = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    try {
      const value = JSON.parse(event.target.value) as SubjectType;
      setSelectedTableASubject(value);
    } catch (error) {
      throw new Error(`SubjectTypeの型アサーションエラー: ${error}`);
    }
  };

  const [selectedTableBSubject, setSelectedTableBSubject] =
    useState<SubjectType>(SubjectTypes[0]);
  /**
   * スコアテーブルBの教科選択ドロップダウンリスト変更イベント処理
   * @param event チェンジイベント要素
   */
  const handleChangeTableBSubject = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    try {
      const value = JSON.parse(event.target.value) as SubjectType;
      setSelectedTableBSubject(value);
    } catch (error) {
      throw new Error(`SubjectTypeの型アサーションエラー: ${error}`);
    }
  };

  /**
   * スコアテーブルの初期データ生成処理
   * @param subject 教科
   * @param yearMonthList 年月リスト
   * @returns
   */
  const buildInitialData = (
    subject: SubjectType,
    yearMonthList: string[],
  ): ScoreTable => {
    const scores: Score[] = [];
    for (let i = 0; i < yearMonthList.length; i++) {
      scores.push({
        id: null,
        yearMonth: yearMonthList[i],
        score: null,
      });
    }

    return {
      isSelected: false,
      subject,
      scores,
    };
  };

  /**
   * 新規入力行追加処理
   * @param insert useFieldArrayのinsertメソッド
   * @param items useFieldArrayコントール配下のデータ
   * @param subject 行追加対象の教科
   */
  const handleClickInsertRow = (
    insert:
      | UseFieldArrayInsert<ScoreFormData, "scoreTableAItems">
      | UseFieldArrayInsert<ScoreFormData, "scoreTableBItems">,
    items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[],
    subject: SubjectType,
  ) => {
    const foundSubjectLastIndex = items
      .map((item) => item.subject.id)
      .lastIndexOf(subject.id);

    // 見つからない場合には、システム異常のため、スローさせる
    if (foundSubjectLastIndex === -1) {
      throw new Error(`Not Found ${subject}`);
    }

    // 引数に指定された教科の末尾に新規の入力行を追加する
    insert(
      foundSubjectLastIndex + 1,
      buildInitialData(subject, scoreTableHeader),
    );
  };

  /**
   * スコア登録処理
   * @param data 入力データ
   */
  const handleSubmitScoreRegistration: SubmitHandler<ScoreFormData> = (
    data: ScoreFormData,
  ) => {
    console.log("submit data:", data);
    reset();
  };

  return (
    <Presenter
      scoreTableHeader={scoreTableHeader}
      scoreTableAProps={{
        selectedSubject: selectedTableASubject,
        onChangeSubject: handleChangeTableASubject,
        items: scoreTableAItems,
      }}
      scoreTableBProps={{
        selectedSubject: selectedTableBSubject,
        onChangeSubject: handleChangeTableBSubject,
        items: scoreTableBItems,
      }}
      register={register}
      insertTableA={insertTableA}
      insertTableB={insertTableB}
      onClickInsertRow={handleClickInsertRow}
      onSubmit={handleSubmit}
      onSubmitScoreRegistration={handleSubmitScoreRegistration}
      errors={errors}
    />
  );
};

export default TablarForm;
