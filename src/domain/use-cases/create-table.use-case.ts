export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /* 
         * DI - Dependency Injection
        */
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {

        const title: string = (`====================\n    Tabla del ${base}    \n====================\n\n`);
        let table = '';

        for (let i: number = 1; i <= limit; i++) {
            table += `${base} x ${i} = ${base * i}`;

            if (i < limit) table += '\n';
        }

        return title + table;
    }
}