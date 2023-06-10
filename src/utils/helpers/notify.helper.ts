import { type MessageInfoProps, type NotifyMessageProps } from '@/types';

export const notifyMessageType = {
  suggest: 'suggest',
  question: 'question'
};

export const formatNotifyMessage = (
  info: MessageInfoProps,
  type: NotifyMessageProps
) => {
  switch (type) {
    case notifyMessageType.suggest:
      return suggestMessage(info);
    default:
      return info.message;
  }
};

const suggestMessage = (info: MessageInfoProps) => {
  return `
  #${info.title}의 할인 금액 수정 제안
기존 금액: ${info.price}원
제안 금액: ${info.newPrice}원
사유
 -> ${info.message}
  `;
};
