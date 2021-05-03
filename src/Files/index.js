import React from 'react';

import { useFiles } from './use-files';
import { addVersion, addFile } from '../api';

import styles from './index.module.css';

// TODO: Improve the implementation of this component according to task (4)
export function File({ file, handleUpdate }) {

  const onRename = () => {
    const newName = window.prompt('Rename this file');
    if(!newName) return false;
    addVersion(file.id, newName);
    handleUpdate();
  }

  return (
    <div className={styles.file}>
      <strong>{file.versions[0].name}</strong>
      <button onClick={onRename}>Rename</button>
      <ul>
        { file.versions.map(version => (
          <li key={version.id}>
            { version.name }
          </li>
        )) }
      </ul>
    </div>
  );
}

export default function Files() {
  // TODO: Replace this polling-like implementation according to task (2)
  const { files, updateFiles, isOrderAsc, changeOrder } = useFiles();

  const handleUpdate = () => {
    updateFiles()
  }

  const addNew = () => {
    const name = window.prompt('Write the name');
    if(!name) return false;
    addFile(name);
    handleUpdate()
  }

  return (
    <>
      <button onClick={changeOrder}>Sort {isOrderAsc? 'Z-A': 'A-Z'}</button>
      {
        files.map(file => <File file={file} key={file.id} handleUpdate={handleUpdate} />)
      }
      {<button onClick={addNew} >Add new</button>}
    </>
  );
}

