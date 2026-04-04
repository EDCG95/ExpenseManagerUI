export default function arrayMapper(objectArray, mapping) {
  return objectArray.map((item) => item[mapping]);
}
