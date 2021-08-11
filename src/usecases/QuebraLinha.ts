export default class QuebraLinha {

    handle(frase: string, numColunas: number): string {

        const fraseTrim = frase ? frase.trim() : null

        if(!fraseTrim) {
            throw new Error("A frase não foi informada!");
        }

        if(!numColunas) throw new Error('A quantidade de colunas não foi informada!')
        
        let row = '', result = '';
        const words = fraseTrim.split(' ');
               
        words.forEach((word, index) => {
            if (row.length + word.length <= numColunas) {
                row += (!row) ? word : ` ${word}`;
                if(index === words.length-1){
                    result += `${row}`;
                }
            } else {
                result += `${row}\n`;
                row = word;
            }
        })

        return result;
    }
}

// Escreva um programa em que dado uma frase e a quantidade de colunas que podem ser exibidas na tela, faça a quebra de linhas sem quebrar as palavras.

// Por exemplo, se passarmos a frase "Um pequeno jabuti xereta viu dez cegonhas felizes." e pedirmos para ela ser exibida em 20 colunas, teremos como resposta:

// Um pequeno jabuti

// xereta viu dez

// cegonhas felizes.