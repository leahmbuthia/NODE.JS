import fs from 'fs';
// read a txt file
fs.readFile('./blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
// // read a txt file asynchronously
fs.readFileSync('./blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
// // write a txt file - create a file if it doesn't exist and overwrite if it does
fs.writeFile('./blog2.txt', 'hello, world test', () => {
    console.log('file was written');
});
// // write a txt file asynchronously
fs.writeFileSync('./blog3.txt', 'hello, world test async', () => {
    console.log('file was written');
});
// // delete a file
if (fs.existsSync('./blog2.txt')) {
    fs.unlink('./blog2.txt', () => {
        console.log('file was deleted');
    });
}
// // delete the file content
fs.writeFile('./blog3.txt', '', () => {
    console.log('file was deleted');
});

// // create a folder if it doesn't exist
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder assets was created');
    });
}
// // delete a folder
if (fs.existsSync('./assets')) {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder assets was deleted');
    });
}
// create a folder assets if it doesn't exist and write a file if it doesn't exist
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder assets was created');
        // create four files in the folder
        fs.writeFile('./assets/blog1.txt', 'hello, world test 1', () => {
            console.log('file 1 was written');
        });
        fs.writeFile('./assets/blog2.txt', 'hello, world test 2', () => {
            console.log('file 2 was written');
        });
        fs.writeFile('./assets/blog3.txt', 'hello, world test 3', () => {
            console.log('file 3 was written');
        });
        fs.writeFile('./assets/blog4.txt', 'hello, world test 4', () => {
            console.log('file 4 was written');
        });
    });
} else {
    console.log('folder assets exists');
    const arrayFiles = ['blog1.txt', 'blog2.txt', 'blog3.txt', 'blog4.txt'];
    for (let i = 0; i < arrayFiles.length; i++) {
        if (fs.existsSync(`./assets/${arrayFiles[i]}`)) {
            console.log(`file ${arrayFiles[i]} exists`);
        } else {
            fs.writeFile(`./assets/${arrayFiles[i]}`, `hello, world test ${i + 1}`, () => {
                console.log(`file ${arrayFiles[i]} was written`);
            });
        }
    }
}
//delete a folder with files
if (fs.existsSync('./assets')) {  // check if the folder exists
    fs.readdir('./assets', (err, files) => {  // read the folder
        if (err) {
            console.log(err);
        }
        console.log(files);
        for (let file of files) {  // loop through the files
            fs.unlink('./assets/' + file, (err) => {  // delete each file
                if (err) {
                    console.log(err);
                }
                console.log('file was deleted');
            });
        }
    });
    fs.rmdir('./assets', { recursive: true, force: true }, (err) => {  // delete the folder
        if (err) {
            console.log(err);
        }
        console.log('folder assets was deleted');
    });
} else {
    console.log('folder assets does not exist');
}