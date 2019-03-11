const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notejs = require('./notes.js');

//customize yargs
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body of the story',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notejs.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notejs.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notejs.listNotes();
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notejs.readNote(argv.title)
    }
})


//add, remove, read, list notes

yargs.parse();