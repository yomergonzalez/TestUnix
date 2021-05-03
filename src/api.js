const files = [
  {
    id: 'the-file-id-1',
    versions: [
      { id: 1, name: 'test.txt' },
      { id: 0, name: 'test.txt' },
    ],
  },
  {
    id: 'the-file-id-2',
    versions: [
      { id: 1, name: 'recipes.doc' },
      { id: 0, name: 'recipes.doc' },
    ],
  },
  {
    id: 'the-file-id-3',
    versions: [
      { id: 1, name: 'picture.png' },
      { id: 0, name: 'photo.png' },
    ],
  },
];

export async function getFiles() {
  return files;
}

export async function addFile(name) {
  files.push({
    id: `the-file-id-${(files.length+1)}`,
    versions: [
      { id: 0, name },
    ],
  },);
}

export async function addVersion(fileId, name) {
  // TODO: Insert the new version on the beginning of the stack according to task (1)
  const file = files.find(f => f.id === fileId);
  const versionId = file.versions.length + 1;
  file.versions = [{ id: versionId, name }, ...file.versions];
}
