
import { writeFile } from 'fs/promises'

const alunosArr = [
    {
        nome: 'Luana',
        idade: 19,
        ra: '0000-01'
    },
    {
        nome: 'Mykaelly',
        idade: 19,
        ra: '0000-02'
    },
    {
        nome: 'Gabriel',
        idade: 23,
        ra: '0000-03'
    },
    {
        nome: 'Wilson',
        idade: 40,
        ra: '0000-04'
    }
]

class Alunos {

    private alunos = alunosArr

    private writeStudent() {

        try {
            writeFile('alunos.json', JSON.stringify(alunos, null, 2))
        } catch (err) {
            console.error('Erro ao tentar escrever no arquivo', err)
        }

    }
}

