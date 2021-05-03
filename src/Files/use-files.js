import { useEffect, useState } from 'react';
import { getFiles } from '../api';

export function useFiles() {
  const [ files, setFiles ] = useState([]);
  const [ isOrderAsc, setIsOrderAsc ] = useState(true);

  useEffect(() => {
    getFiles()
      .then(files => setFiles(files));
  }, []);

  function updateFiles() {
    getFiles()
    .then(files => setFiles([...files]));
  }

  function changeOrder() {
    setIsOrderAsc((order) => !order);
  }

  function orderFilter (files) {
    return files.sort(isOrderAsc ? AtoZ: ZtoA)
  }

  return {files : orderFilter(files), updateFiles, changeOrder, isOrderAsc };
}


function AtoZ(a, b) {
  if (a.versions[0].name  < b.versions[0].name ) {
    return -1;
  }
  if (a.versions[0].name  > b.versions[0].name ) {
    return 1;
  }
  return 0;
}

function ZtoA(a, b) {
  if (a.versions[0].name  > b.versions[0].name ) {
    return -1;
  }
  if (a.versions[0].name  < b.versions[0].name ) {
    return 1;
  }
  return 0;
}