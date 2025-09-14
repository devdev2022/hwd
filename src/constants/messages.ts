//Global MessageModal Messages
export const MESSAGES: {
  [key: string]: string;
} = {
  wrongLoginInformation: "아이디 혹은 비밀번호를 다시 확인해주세요.",
  alreadyRegister: "이미 가입한 아이디입니다.",
  enterIdJoining: "ID를 입력해주세요.",
  enterPasswordJoining: "패스워드를 입력해주세요.",
  enterRePasswordJoining: "패스워드 확인을 입력해주세요.",
  enterNameJoining: "이름을 입력해주세요.",
  enterPhoneNumberJoining: "휴대폰 번호를 입력해주세요.",
  enterBirthJoining: "생년월일을 입력해주세요.",
  selectPhoneTelecomJoining: "통신사를 선택해주세요.",
  serverConnectionFail:
    "서버와의 연결에 실패했습니다. 통신상태를 확인해주세요.",
};

export const CODE_MESSAGE_IDENTIFIER: {
  [key: string]: string;
} = {
  "10012": "wrongLoginInformation",
  "10013": "wrongLoginInformation",
  "10014": "withdrawalUser",
  "10016": "alreadyRegister",
};
