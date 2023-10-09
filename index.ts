import { projectVersion, projectName } from "./config";
import figlet from "figlet";

(() => {
    console.clear();
    const args: string[] = process.argv.slice(2, process.argv.length);
    const ipv4Regex: RegExp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

    if (args.length === 1 && args[0] === "createNodeFromGenesis") {
        console.log(args);
    } else if (args.length === 1 && args[0] === "createNode") {
        console.log(args);
    } else if (args.length === 2 && args[0] === "joinNode" && args[1] && ipv4Regex.test(args[1])) {
        console.log(args);
    } else {
        console.log(figlet.textSync(projectName));
        console.log("Usage: ts-node index.ts <command>");
        console.log(`Version: ${projectVersion}\n`);
        console.log("Commands:")
        console.log(`   createNodeFromGenesis   Create your own ${projectName} node from the genesis block`);
        console.log(`   createNode              Create your own ${projectName} node`);
        console.log(`   joinNode <ipv4>         Join an existing ${projectName} node`);
    };
})();