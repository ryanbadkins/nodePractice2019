const fs = require('fs')
const chalk = require('chalk')

const addNote =(title, body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log(chalk.red.inverse('Note title taken!!'))
    }

}

const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}
const removeNote =(title)=>{
        const notes = loadNotes()
        const duplicateNotes= notes.filter((note)=> note.title === title)

        if(duplicateNotes.length > 0){
            console.log(chalk.green.inverse(`Erasing  ${title.toString()} ...`))
            const keepNotes= notes.filter(((note) => note.title !== title))
                
            saveNotes(keepNotes)
        }else if(duplicateNotes.length ===0)
        {
            console.log(chalk.red.inverse(`That title doesn't exists`))
        }

}

const listNotes = ()=>{
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your notes'))
    notes.forEach(note => {
      console.log(`${note.title}`)  
    })
}
const readNote = (title)=>{
    const notes = loadNotes()
    const retrieved = notes.find((note)=> note.title === title)
    if(retrieved){
        console.log(chalk.white.inverse(retrieved.title))
        console.log(retrieved.body)
    } else {
        console.log(chalk.red.inverse('Note not found, try a new title'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}