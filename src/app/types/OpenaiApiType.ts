export type OpenaiApiType = {
  id: string;
  model: string;
  choices: OpenaiChoiceType[];
};

export type OpenaiChoiceType = {
  message: OpenaiMessageType;
};

export type OpenaiMessageType = {
  role: string;
  content: string;
};
