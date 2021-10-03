const list = document.querySelector('ul');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;

window.onload = function () {
  // open the note database version 1
  let request = window.indexedDB.open('notes', 1);

  window.onerror = () => { console.log('Database failed to open'); }

  request.onsuccess = function () {
    console.log('Database opened successfully.');

    db = request.result;
    displayData();
  }

  // データベースが設定されていなかった、あるいは、既存のデータベースより
  // 上のバージョンで開かれた場合、実行
  request.onupgradeneeded = function (e) {
    let db = e.target.result;
    let objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });

    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
  }

  form.onsubmit = addData;

  function addData(e) {
    // formの送信を阻止する
    e.preventDefault();

    let newItem = { title: titleInput.ariaValueMax, body: bodyInput.value };
    let transaction = db.transaction(['notes'], 'readwrite');
    let objectStore = transaction.objectStore('notes');
    let request = objectStore.add(newItem);

    request.onsuccess = function () {
      titleInput.value = '';
      bodyInput.value = '';
    };

    transaction.oncomplete = function () {
      console.log('Transaction completed database modification finished');
      displayData();
    };

    transaction.onerror = () => { console.log('Transaction not opened due to error'); }
  }

  function displayData() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    let transaction = db.transaction('notes');
    let objectStore = transaction.objectStore('notes');
    objectStore.openCursor().onsuccess = function (e) {
      let cursor = e.target.result;

      if (cursor) {
        const listItem = document.createElement('li');
        const h3 = document.createElement('h3');
        const para = document.createElement('p');

        listItem.setAttribute('data-note-id', cursor.value.id);

        h3.textContent = cursor.value.title;
        para.textContent = cursor.value.body;

        listItem.appendChild(h3);
        listItem.appendChild(para);
        list.appendChild(listItem);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = deleteItem;
        listItem.appendChild(deleteBtn);

        // 反復処理する際に必要
        cursor.continue()
      } else {
        if (!list.firstChild) {
          const listItem = document.createElement('li');
          listItem.textContent = 'No notes stored';
          list.appendChild(listItem);
        }

        console.log('Notes all displayed');
      }
    };
  }

  function deleteItem(e) {
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
    let transaction = db.transaction(['notes'], 'readwrite');
    let objectStore = transaction.objectStore('notes');
    let request = objectStore.delete(noteId);

    transaction.oncomplete = function () {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      console.log(`Note ${noteId} deleted.`);

      if (!list.firstChild) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No notes stored.';
        list.appendChild(listItem);
      }
    };
  }

}
