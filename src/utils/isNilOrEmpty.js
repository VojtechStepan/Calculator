import { either, isNil, isEmpty } from 'ramda';

const isNilOrEmpty = either(isNil, isEmpty);

export default isNilOrEmpty;