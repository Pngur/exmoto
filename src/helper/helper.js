export const getEpochTime = (date) => {
   const reverseDate = date.split('-').reverse().join('-');
   const epochDate = new Date(reverseDate);
   return epochDate.getTime();
};

export const epochToDate = (epoch) => {        
   const date = new Date(epoch);
   return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

// Конфигурация Input
export const createInputConfig = (elemType, inpType, label, placeholder, disabled) => ({
   elemType: elemType,
   disabled: disabled,
   value: '',
   elemConfig: {
      inpType: inpType,
      label: label,
      placeholder: placeholder,
   }
});