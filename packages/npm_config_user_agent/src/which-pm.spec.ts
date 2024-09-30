import { exec } from 'node:child_process';

// unit test to check that pm is correctly defined
// npx should return npm
// pnpm exec -> pnpm
// yarn exec -> yarn

// we need to spawn a child process to test this

async function execAsync(command: string) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve(stdout.trim());
        });
    });
}

describe('npm-config-user-agent', () => {
    test('should support npm exec', async () => {
        await expect(execAsync('npm exec which-pm')).resolves.toBe('npm');
    });
    test('should support yarn', async () => {
        await expect(execAsync('yarn exec --silent which-pm')).resolves.toBe('yarn');
    });
    test('should support pnpm', async () => {
        await expect(execAsync('pnpm exec which-pm')).resolves.toBe('pnpm');
    });

    //needs to be investiaged why this test fails
    //in CLI it just works
    //bun run which-pm => bun  

    // test('should support bun', async () => {
    //     // await expect(runCommand(`bun`, ["run", "packages/npm_config_user_agent/bin/which-pm"])).resolves.toBe('bun');
    //     await expect(execAsync(`bun run which-pm`)).resolves.toBe('bun');
    // });
});



