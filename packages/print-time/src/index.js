const getDate = () => new Date();




const dateToIsoString = date => date.toISOString();

export const printTime = () => dateToIsoString(getDate());
