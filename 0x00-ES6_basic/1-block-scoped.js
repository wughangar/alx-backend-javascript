export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newtask = true;
    const newtask2 = false;
    return [newtask, newtask2];
  }
  return [task, task2];
}
