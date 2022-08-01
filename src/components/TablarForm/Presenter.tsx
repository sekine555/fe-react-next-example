import { SubjectType } from "@/type/domain/constants/Subject";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayInsert,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import ScoreItem from "./ScoreItem";
import { ScoreFormData } from "./TablarForm";
import { FieldArrayName, ItemKey, ScoreTableProps } from "./type";

interface Props {
  scoreTableHeader: string[];
  scoreTableAProps: ScoreTableProps;
  scoreTableBProps: ScoreTableProps;
  register: UseFormRegister<ScoreFormData>;
  insertTableA: UseFieldArrayInsert<ScoreFormData, "scoreTableAItems">;
  insertTableB: UseFieldArrayInsert<ScoreFormData, "scoreTableBItems">;
  onClickInsertRow: (
    insert:
      | UseFieldArrayInsert<ScoreFormData, "scoreTableAItems">
      | UseFieldArrayInsert<ScoreFormData, "scoreTableBItems">,
    items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[],
    subject: SubjectType,
  ) => void;
  onSubmit: UseFormHandleSubmit<ScoreFormData>;
  onSubmitScoreRegistration: (data: ScoreFormData) => void;
  errors: FieldErrors<ScoreFormData>;
}

const Presenter: React.FC<Props> = (props) => {
  const {
    scoreTableHeader,
    scoreTableAProps,
    scoreTableBProps,
    register,
    insertTableA,
    insertTableB,
    onClickInsertRow,
    onSubmit,
    onSubmitScoreRegistration,
  } = props;
  return (
    <>
      <form onSubmit={onSubmit(onSubmitScoreRegistration)}>
        <ScoreItem
          fieldArrayName={FieldArrayName.SCORE_TABLE_A}
          scoreTableHeader={scoreTableHeader}
          register={register}
          items={scoreTableAProps.items}
          selectedSubject={scoreTableAProps.selectedSubject}
          onChangeSubject={scoreTableAProps.onChangeSubject}
          insert={insertTableA}
          onClickInsertRow={onClickInsertRow}
        />

        <ScoreItem
          fieldArrayName={FieldArrayName.SCORE_TABLE_B}
          scoreTableHeader={scoreTableHeader}
          register={register}
          items={scoreTableBProps.items}
          selectedSubject={scoreTableBProps.selectedSubject}
          onChangeSubject={scoreTableBProps.onChangeSubject}
          insert={insertTableB}
          onClickInsertRow={onClickInsertRow}
        />

        <button type={"submit"}>登録</button>
      </form>
    </>
  );
};

export default Presenter;
