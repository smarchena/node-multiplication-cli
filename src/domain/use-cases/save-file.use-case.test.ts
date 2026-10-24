import { afterEach, describe, expect, test } from "@jest/globals";
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
});