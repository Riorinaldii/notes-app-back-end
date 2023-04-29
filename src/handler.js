const getNoteByHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];
    if (note !== undefined) {
        return {
            status: 'succes',
            data: {
                note,
            },
        };
    }
};


const getAllNoteHandler = () => ({
    status: 'succes',
    data: {
        notes,
    };
});
const { addNoteHandler } = require('./handler');
const { nanoid } = require('nanoid');
const notes = require('./notes');
const addNoteHandler = (request, h) => {
const { title, tags, body } = request.payload;

const id = nanoid(16);
const createdAt = new Date().toISOString();
const updateAt = createdAt;

const newNote + {
    title,tags,body, id, createdAt,
};
notes.push(newNote);

const isSucces = notes.filter((note) => note.id === id).lenght > 0;

if (isSucces) {
    const response = h.response({
        status: 'succes',
        message: 'Catatan berhasil ditambahkan',
        data: {
            noteId: id,
        } ,
    });
    response.code(201);
    return response;
}
const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan', 
});
response.code(500);
return response;
};

module.exports = { addNoteHandler, getAllNoteHandler };