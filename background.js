console.log("Firefox MV3 stub background.js has loaded");


async function main() {
    let result = await fetch("https://gutenberg.org");

    if (result.ok)
        console.log(await result.text());
}

main();
