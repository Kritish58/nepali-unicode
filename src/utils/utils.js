export const combineWithInitials = (unicode) => {
   return `&#x${unicode};`;
};

export const getMappedValueType = (value) => {
   return Array.isArray(value) ? 'array' : 'string';
};
