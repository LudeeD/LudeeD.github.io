<script>
    import face from "$lib/assets/face.jpg";
    import { onMount } from "svelte";
    import { set_svg_attributes } from "svelte/internal";

    let compliments = [
        "funny 😂",
        "interesting 🤔",
        "awesome 😎",
        "lazy 🥱",
        "nice 👍",
        "a GIT lover 🤓",
    ];

    let using_compliment = 0;

    const getAge = () => {
        var currDate = new Date();
        var birthDate = new Date(1996, 12, 19);
        var secDiff = (currDate - birthDate) / 1000;
        let years = Math.trunc(secDiff / 31536000);
        return years;
    };

    let age = getAge();

    onMount(() => {
        const interval = setInterval(() => {
            using_compliment = (using_compliment + 1) % compliments.length;
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div>
    <h1 class="font-bold text-4xl">Lu•ís Sil•va</h1>
    <h2 class="font-bold text-xl">[luíɛs ˈsɪlvə]</h2>
    <h3>name</h3>
    <ol class="list-disc list-inside">
        <li>
            a person that consumes an enormous amount of <s>coffee</s> tea to properly
            function
        </li>
        <li>thinks of himself as a very creative mind</li>
        <li>kind of <strong>{compliments[using_compliment]}</strong></li>
    </ol>
</div>

<div class="mt-10 flex flex-col gap-2">
    <h2 class="text-xl font-bold">About Me</h2>
    <p>My name is Luís Silva,</p>
    <p>
        I am a <span class="bg-stone-300 font-mono px-2">{age} years</span> old boy
        from Portugal 🇵🇹 , with big dreams of a more technological world and a well-balanced
        society. Did my MSc. in Computer and Telematics Engineering at the University
        of Aveiro, Portugal. With a thesis about a distributed anonymous reputation
        system I developed a taste for security in computer systems.
    </p>
    <p>
        Currently, I am working at <a
            class="underline underline-offset-4 decoration-2 hover:decoration-fuchsia-400"
            href="https://www.teton.ai/">Teton.ai</a
        > where we are trying to shape the future of healthcare 👨‍⚕️. We work with
        AI, computer vision and powerfull embedded systems.
    </p>

    <p>
        I also try and maintain my very own digital garden 🌱, where I write
        about <a
            class="underline underline-offset-4 decoration-2 hover:decoration-fuchsia-400"
            href="https://garden.luissilva.eu/">stuff</a
        >.
    </p>
</div>

<div class="mt-10 flex flex-col gap-2">
    <h2 class="text-xl font-bold">Reach outl 📯</h2>
    <div class="flex flex-row justify-evenly flex-wrap">
        <a
            class="underline underline-offset-4 decoration-2 hover:decoration-blue-400"
            href="https://twitter.com/ludeed">Twitter</a
        >
        <a
            class="underline underline-offset-4 decoration-2 hover:decoration-blue-400"
            href="https://github.com/LudeeD">Github</a
        >
        <a
            class="underline underline-offset-4 decoration-2 hover:decoration-blue-400"
            href="https://www.linkedin.com/in/lu%C3%ADscomsnofim/">LinkedIn</a
        >
        <p>
            and if you have any burning questions you can even send me an <a
                class="underline underline-offset-4 decoration-2 hover:decoration-blue-400"
                href="mailto:luiscomsnofim@gmail.com">email</a
            >!
        </p>
    </div>
</div>
