import type { ChoiceOption, ExamQuestion, Topic } from "../types/question.ts";

export type QuestionValidationIssue = {
  questionId?: string;
  path: string;
  message: string;
};

/** Checks the content of the TypeScript question bank, not arbitrary imported JSON. */
export function validateQuestionBank(questions: readonly ExamQuestion[], topics: readonly Topic[]): QuestionValidationIssue[] {
  const issues: QuestionValidationIssue[] = [];
  const report = (path: string, message: string, questionId?: string) => {
    issues.push({ path, message, ...(questionId === undefined ? {} : { questionId }) });
  };
  const checkText = (value: unknown, path: string, questionId?: string) => {
    if (typeof value !== "string" || value.trim().length === 0) report(path, "Nem lehet üres.", questionId);
  };
  const checkIds = (items: readonly { id: string }[], path: string, questionId?: string) => {
    const seen = new Set<string>();
    items.forEach((item, index) => {
      checkText(item.id, `${path}[${index}].id`, questionId);
      if (seen.has(item.id)) report(`${path}[${index}].id`, `Ismétlődő azonosító: ${item.id}`, questionId);
      seen.add(item.id);
    });
  };
  const checkOptions = (options: readonly ChoiceOption[], path: string, questionId: string) => {
    if (options.length < 2) report(path, "Legalább két válaszlehetőség szükséges.", questionId);
    checkIds(options, path, questionId);
    options.forEach((option, index) => checkText(option.text, `${path}[${index}].text`, questionId));
  };
  const checkReference = (id: string, validIds: ReadonlySet<string>, path: string, questionId: string) => {
    if (!validIds.has(id)) report(path, `Nem létező azonosítóra hivatkozik: ${id}`, questionId);
  };

  if (topics.length === 0) report("topics", "Legalább egy témakör szükséges.");
  if (questions.length === 0) report("questions", "Legalább egy kérdés szükséges.");
  checkIds(topics, "topics");
  topics.forEach((topic, index) => checkText(topic.name, `topics[${index}].name`));
  const topicIds = new Set(topics.map((topic) => topic.id));
  checkIds(questions, "questions");

  questions.forEach((question, index) => {
    const path = `questions[${index}]`;
    const id = question.id;
    checkText(question.prompt, `${path}.prompt`, id);
    checkReference(question.topicId, topicIds, `${path}.topicId`, id);

    switch (question.type) {
      case "single_choice":
      case "multiple_choice": {
        checkOptions(question.options, `${path}.options`, id);
        const optionIds = new Set(question.options.map((option) => option.id));
        if (question.type === "single_choice" && question.correctOptionIds.length !== 1) {
          report(`${path}.correctOptionIds`, "Pontosan egy helyes válasz szükséges.", id);
        } else if (question.correctOptionIds.length === 0) {
          report(`${path}.correctOptionIds`, "Legalább egy helyes válasz szükséges.", id);
        }
        if (new Set(question.correctOptionIds).size !== question.correctOptionIds.length) {
          report(`${path}.correctOptionIds`, "A helyes válaszok azonosítói nem ismétlődhetnek.", id);
        }
        question.correctOptionIds.forEach((optionId, optionIndex) =>
          checkReference(optionId, optionIds, `${path}.correctOptionIds[${optionIndex}]`, id));
        break;
      }
      case "true_false":
        if (question.statements.length === 0) report(`${path}.statements`, "Legalább egy állítás szükséges.", id);
        checkIds(question.statements, `${path}.statements`, id);
        question.statements.forEach((statement, statementIndex) => {
          checkText(statement.text, `${path}.statements[${statementIndex}].text`, id);
          if (typeof statement.correct !== "boolean") {
            report(`${path}.statements[${statementIndex}].correct`, "Logikai érték szükséges.", id);
          }
        });
        break;
      case "matching":
        if (question.pairs.length < 2) report(`${path}.pairs`, "Legalább két pár szükséges.", id);
        checkIds(question.pairs, `${path}.pairs`, id);
        question.pairs.forEach((pair, pairIndex) => {
          checkText(pair.left, `${path}.pairs[${pairIndex}].left`, id);
          checkText(pair.right, `${path}.pairs[${pairIndex}].right`, id);
        });
        break;
      case "grouping": {
        checkOptions(question.groups, `${path}.groups`, id);
        if (question.items.length === 0) report(`${path}.items`, "Legalább egy besorolandó elem szükséges.", id);
        checkIds(question.items, `${path}.items`, id);
        const groupIds = new Set(question.groups.map((group) => group.id));
        question.items.forEach((item, itemIndex) => {
          checkText(item.text, `${path}.items[${itemIndex}].text`, id);
          checkReference(item.correctGroupId, groupIds, `${path}.items[${itemIndex}].correctGroupId`, id);
        });
        break;
      }
      case "ordering": {
        if (question.items.length < 2) report(`${path}.items`, "Legalább két rendezendő elem szükséges.", id);
        checkIds(question.items, `${path}.items`, id);
        question.items.forEach((item, itemIndex) => checkText(item.text, `${path}.items[${itemIndex}].text`, id));
        const itemIds = new Set(question.items.map((item) => item.id));
        if (question.correctOrderIds.length !== question.items.length
          || new Set(question.correctOrderIds).size !== question.items.length) {
          report(`${path}.correctOrderIds`, "A helyes sorrendnek minden elemet pontosan egyszer kell tartalmaznia.", id);
        }
        question.correctOrderIds.forEach((itemId, itemIndex) =>
          checkReference(itemId, itemIds, `${path}.correctOrderIds[${itemIndex}]`, id));
        break;
      }
      case "fill_in":
        if (question.statements.length === 0) report(`${path}.statements`, "Legalább egy állítás szükséges.", id);
        checkIds(question.statements, `${path}.statements`, id);
        question.statements.forEach((statement, statementIndex) => {
          const statementPath = `${path}.statements[${statementIndex}]`;
          const blanks = statement.parts.filter((part) => typeof part !== "string");
          if (blanks.length === 0) report(`${statementPath}.parts`, "Legalább egy kiegészítendő mező szükséges.", id);
          const seen = new Set<string>();
          statement.parts.forEach((part, partIndex) => {
            if (typeof part === "string") return;
            const blankPath = `${statementPath}.parts[${partIndex}]`;
            checkText(part.id, `${blankPath}.id`, id);
            if (seen.has(part.id)) report(`${blankPath}.id`, `Ismétlődő mezőazonosító: ${part.id}`, id);
            seen.add(part.id);
            checkText(part.label, `${blankPath}.label`, id);
            checkOptions(part.options, `${blankPath}.options`, id);
            checkReference(part.correctOptionId, new Set(part.options.map((option) => option.id)), `${blankPath}.correctOptionId`, id);
          });
        });
        break;
      default:
        report(`${path}.type`, "Ismeretlen kérdéstípus.", id);
    }
  });

  return issues;
}

export function assertValidQuestionBank(questions: readonly ExamQuestion[], topics: readonly Topic[]): void {
  const issues = validateQuestionBank(questions, topics);
  if (issues.length > 0) {
    throw new Error(`Hibás kérdésbank (${issues.length} hiba):\n${issues.map((issue) =>
      `${issue.questionId ? `[${issue.questionId}] ` : ""}${issue.path}: ${issue.message}`,
    ).join("\n")}`);
  }
}
