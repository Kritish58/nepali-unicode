//* mapping
import consonants from './mapping/consonants.js';
import independentVowels from './mapping/independentVowels.js';
import dependentVowels from './mapping/dependentVowels.js';
import numbers from './mapping/numbers.js';
import specialCharacters from './mapping/specialCharacters.js';

// * utils
import { getMappedValueType, combineWithInitials } from './utils/utils.js';

const MappingData = {
   ...consonants,
   ...independentVowels,
   ...dependentVowels,
   ...numbers,
   ...specialCharacters,

   kharaayo: ['0000', '1111'], //* test
};

const mapper = (input) => {
   return MappingData[input];
};

const engine = (input) => {
   let unmapped = input;
   let mapped = '';
   let output = [];

   while (unmapped.length >= 1) {
      const tempOutput = mapper(unmapped);

      if (!tempOutput) {
         unmapped = unmapped.slice(0, unmapped.length - 1);
         continue;
      }

      mapped += unmapped;
      unmapped = input.slice(mapped.length, input.length);

      const mappedValueType = getMappedValueType(tempOutput);
      if (mappedValueType === 'string') {
         output = [...output, combineWithInitials(tempOutput)];
      }
      if (mappedValueType === 'array') {
         output = [...output, tempOutput.map((item) => combineWithInitials(item)).join('')];
      }
   }

   return output;
};

export const converter = (input) => {
   const unicodesInArray = engine(input);

   // * if output => return output; else return original input
   return unicodesInArray.length > 0 ? unicodesInArray.map((item) => item).join('') : input;
};
