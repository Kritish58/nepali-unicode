const combineWithInitials = (unicode) => {
   return `&#x${unicode};`;
};

const getMappedValueType = (value) => {
   return Array.isArray(value) ? 'array' : 'string';
};

module.exports = {
   combineWithInitials,
   getMappedValueType,
};
