const fs = require('fs')

async function copy(src, dest, name) {
  await fs.copyFile(src, dest, (err) => {
    if (err) throw err
    console.log(`${name} file was copied.`)
  })
}

// Copy Bootstrap JS file.
copy(
  './node_modules/bootstrap/dist/js/bootstrap.min.js',
  './js/bootstrap.min.js',
  'Bootstrap JS'
)

// Copy Barrio JS file.
copy(
  '../../contrib/bootstrap_barrio/js/barrio.js',
  './js/barrio.js',
  'Barrio JS'
)
