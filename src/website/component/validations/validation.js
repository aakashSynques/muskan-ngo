// export const passreg = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/;    //contains length
export const passreg = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).*)\S$/;

export const emailreg = /[a-z]+[a-z0-9]*\@[a-z]{5,7}\.[a-z]{2,3}/;

export const userreg = /^[a-zA-Z]+[0-9]*$/;

export const specialreg = /^[a-zA-Z0-9\s]*$/;

export const numberreg = /^\d{10}$/;

export const pincodereg = /^\d{6}$/;

export const numberReg = /\d+/;

export const feeReg = /^\d+(\.\d+)?$/;

// export const voterId =/^(?=[A-Za-z0-9]{10}$)(?=[^A-Za-z]*[A-Za-z])(?=[^0-9]*[0-9]).*$/;
export const voterId = /^[A-Z]{3}[0-9]{7}$/gm;

// export const panId =/^(?=[A-Za-z0-9]{10}$)(?=[^A-Za-z]*[A-Za-z])(?=[^0-9]*[0-9]).*$/;
export const panId = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/gm;

export const dlNumber = /^[A-Z]{2}[0-9]{2}[A-Z]{1}[0-9]{11}$/gm;

export const passportId = /^[A-Z][0-9]{7}$/gm;

export const aadhaar = /^\d{12}$/;
