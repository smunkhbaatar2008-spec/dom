const generatedPasswordCopy = document.getElementById("generated-password-copy")
const generatedPasswordLength = document.getElementById("generated-password-length")
const passwordGeneratorRange = document.getElementById("password-generator-range")
const passwordGenerator = document.getElementById("password-generator")
const generatedPassword = document.getElementById("generated-password")
const copiedPasswordWord = document.getElementById("copied-password-word")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

const generatePassword = () => {
    let password = "";
    const random = new Uint32Array(1);
    const limit = Math.floor(2 ** 32 / characters.length) * characters.length;
    for (let i = 0 ; i < Number(generatedPasswordLength.value); i++) {
        do{
            crypto.getRandomValues(random);
        } while (random[0] > limit);
        password += characters[random[0] % characters.length];
    }
    generatedPassword.value = password;
};
