import { afterEach, describe, expect, jest, test } from "@jest/globals";
import fs from 'fs';
import { SaveFile } from "./save-file.use-case";

describe('SaveFilesUseCase', () => {



    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custon-table-name',
    };

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // clean up
    afterEach(() => {
        const outputFolderExist = fs.existsSync('outputs');
        if (outputFolderExist) fs.rmSync('outputs', { recursive: true });

        const customOutpuFolderExist = fs.existsSync(customOptions.fileDestination);
        if (customOutpuFolderExist) fs.rmSync(customOptions.fileDestination, { recursive: true });

    });

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        };

        const result = saveFile.execute(options);

        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy;
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should save file with custom values', () => {

        const saveFile = new SaveFile();
        const result = saveFile.execute(customOptions);
        const checkFile = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

        expect(result).toBeTruthy;
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);

    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing.'); }
        );

        const result = saveFile.execute(customOptions);

        expect(result).toBe(false);

        mkdirSpy.mockRestore();

    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom writing error message from testing.'); }
        );

        const result = saveFile.execute({ fileContent: 'Hola' });

        expect(result).toBe(false);

        writeFileSpy.mockRestore();

    });


});