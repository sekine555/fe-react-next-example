import DropDown from "@/components/helper/DropDown";
import { SubjectType, SubjectTypes } from "@/type/domain/constants/Subject";
import {
  FieldArrayWithId,
  UseFieldArrayInsert,
  UseFormRegister,
} from "react-hook-form";
import { ScoreFormData } from "../TablarForm";
import { FieldArrayName, ItemKey } from "../type";

interface Props {
  fieldArrayName: FieldArrayName;
  scoreTableHeader: string[];
  register: UseFormRegister<ScoreFormData>;
  items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[];
  selectedSubject: SubjectType;
  onChangeSubject: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  insert:
    | UseFieldArrayInsert<ScoreFormData, "scoreTableAItems">
    | UseFieldArrayInsert<ScoreFormData, "scoreTableBItems">;
  onClickInsertRow: (
    insert:
      | UseFieldArrayInsert<ScoreFormData, "scoreTableAItems">
      | UseFieldArrayInsert<ScoreFormData, "scoreTableBItems">,
    items: FieldArrayWithId<ScoreFormData, FieldArrayName, ItemKey>[],
    subject: SubjectType,
  ) => void;
}

const Presenter: React.FC<Props> = (props) => {
  const {
    fieldArrayName,
    scoreTableHeader,
    register,
    items,
    selectedSubject,
    onChangeSubject,
    insert,
    onClickInsertRow,
  } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>
              <p>選択</p>
            </td>
            <td>
              <p>教科</p>
            </td>
            {scoreTableHeader.map((yearMonth, index) => (
              <td key={index}>{yearMonth}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type={"checkbox"}
                  defaultChecked={item.isSelected}
                  {...register(
                    `${fieldArrayName}.${index}.isSelected` as const,
                  )}
                />
              </td>
              <td>
                <p>{item.subject.name}</p>
              </td>
              {item.scores.map((score, idx) => (
                <td key={score.yearMonth}>
                  <input
                    type={"number"}
                    defaultValue={score.score || undefined}
                    {...register(
                      `${fieldArrayName}.${index}.scores.${idx}.score` as const,
                      {
                        max: {
                          value: 100,
                          message: "",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "",
                        },
                      },
                    )}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex`}>
        <DropDown<SubjectType>
          value={selectedSubject}
          onSelect={onChangeSubject}
          selectOptions={SubjectTypes.map((subject) => ({
            label: subject.name,
            value: subject,
          }))}
        />

        <input
          type={"button"}
          value="行追加"
          onClick={() => onClickInsertRow(insert, items, selectedSubject)}
        />
      </div>
    </>
  );
};

export default Presenter;
