var hash = location.pathname.split('/')[1]
fetch(`https://raw.githubusercontent.com/latinonetonline/linksdb/master/${hash}`)
.then(data => data.json())
    .then(data => window.location.href = data.url)



