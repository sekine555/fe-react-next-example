export const FieldArrayName = {
  SCORE_TABLE_A: "scoreTableAItems",
  SCORE_TABLE_B: "scoreTableBItems",
} as const;

export type FieldArrayName = typeof FieldArrayName[keyof typeof FieldArrayName];
export type ItemKey = "id";
