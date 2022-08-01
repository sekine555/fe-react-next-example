import { SubjectType } from "@/type/domain/constants/Subject";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayInsert,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ScoreFormData } from "./TablarForm";
import { FieldArrayName, ItemKey } from "./type";

interface Props {
  register: UseFormRegister<ScoreFormData>;
  selectedSubject: SubjectType;
  onChangeSubject: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickInsertRow: (
    insert: UseFieldArrayInsert<ScoreFormData, FieldArrayName>,
    items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[],
    subject: SubjectType,
  ) => void;
  onSubmit: UseFormHandleSubmit<ScoreFormData>;
  onSubmitScoreRegistration: (data: ScoreFormData) => void;
  errors: FieldErrors<ScoreFormData>;
}

const Presenter: React.FC<Props> = (props) => {
  const {
    register,
    selectedSubject,
    onChangeSubject,
    onClickInsertRow,
    onSubmit,
    onSubmitScoreRegistration,
  } = props;
  return <>表形式UI</>;
};

export default Presenter;
