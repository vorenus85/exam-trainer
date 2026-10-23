export type QuestionType =
  | "single_choice"
  | "multiple_choice"
  | "true_false"
  | "matching"
  | "grouping"
  | "ordering"
  | "fill_in";

export type Topic = {
  id: string;
  name: string;
};

type BaseQuestion = {
  id: string;
  topicId: string;
  type: QuestionType;
  prompt: string;
  explanation?: string;
};

export type ChoiceOption = {
  id: string;
  text: string;
};

export type ChoiceQuestion = BaseQuestion & {
  type: "single_choice" | "multiple_choice";
  options: ChoiceOption[];
  correctOptionIds: string[];
};

export type TrueFalseQuestion = BaseQuestion & {
  type: "true_false";
  statements: TrueFalseStatement[];
  correct?: boolean;
};

export type TrueFalseStatement = {
  id: string;
  text: string;
  correct: boolean;
};

export type MatchingPair = {
  id: string;
  left: string;
  right: string;
};

export type MatchingQuestion = BaseQuestion & {
  type: "matching";
  pairs: MatchingPair[];
};

export type OrderingItem = {
  id: string;
  text: string;
};

export type GroupingQuestion = BaseQuestion & {
  type: "grouping";
  groups: ChoiceOption[];
  items: {
    id: string;
    text: string;
    correctGroupId: string;
  }[];
};

export type OrderingQuestion = BaseQuestion & {
  type: "ordering";
  items: OrderingItem[];
  correctOrderIds: string[];
};

export type FillInBlank = {
  id: string;
  label: string;
  acceptedAnswers: string[];
};

export type FillInQuestion = BaseQuestion & {
  type: "fill_in";
  textBefore: string;
  blanks: FillInBlank[];
  textAfter?: string;
};

export type ExamQuestion =
  | ChoiceQuestion
  | TrueFalseQuestion
  | MatchingQuestion
  | GroupingQuestion
  | OrderingQuestion
  | FillInQuestion;

export type QuestionAnswer =
  | { type: "single_choice"; selectedOptionId: string | null }
  | { type: "multiple_choice"; selectedOptionIds: string[] }
  | { type: "true_false"; value: boolean | null }
  | { type: "matching"; pairs: Record<string, string | null> }
  | { type: "grouping"; groups: Record<string, string | null> }
  | { type: "ordering"; orderIds: string[] }
  | { type: "fill_in"; values: Record<string, string> };
