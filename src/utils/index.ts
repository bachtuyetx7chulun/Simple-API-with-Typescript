const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const counterTime = (startTime: string, endTime: string): string => {
  return (+endTime - +startTime).toString();
};

export default {
  getTimeStamp,
  counterTime,
};
