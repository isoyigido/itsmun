const passwordMap = {
    // CoEU
    'c0790a9a824874719e73e77c0ffacb14585c0dd19719a1d8464dbf52a3b7e013': `
        PGRpdiBjbGFzcz0iYXBwbGljYXRpb24iIGlkPSJndWlkZS1pbWYiPkNsaWNrJm5ic3A7PGEgaHJlZj0iaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOXZwUEFaeVF4QXdOak9Gb19jMTZ5X1FfbVlZR3BmY3gvdmlldz91c3A9c2hhcmluZyIgdGFyZ2V0PSJfYmxhbmsiPmhlcmU8L2E+Jm5ic3A7Zm9yIHRoZSBDb0VVIGNvbW1pdHRlZSBzdHVkeSBndWlkZTwvZGl2Pg==
    `,
    // IMF
    'b7ad0797b6c67647733121a391fc778c5c169f0a94bd50a2a7011ff2fde3e0d5': `
        PGRpdiBjbGFzcz0iYXBwbGljYXRpb24iIGlkPSJndWlkZS1pbWYiPkNsaWNrJm5ic3A7PGEgaHJlZj0iaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xR2draF9fT1YyNXl0T2FtTVZsQ1A2VE5QVHkzLTd1WG0vdmlldz91c3A9c2hhcmluZyIgdGFyZ2V0PSJfYmxhbmsiPmhlcmU8L2E+Jm5ic3A7Zm9yIHRoZSBJTUYgY29tbWl0dGVlIGd1aWRlPC9kaXY+
    `
};

async function checkPassword() {
    const input = document.getElementById('password').value;
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    console.log(hashHex)

    if (passwordMap[hashHex]) {
        const decoded = atob(passwordMap[hashHex].trim());
        document.getElementById('password-input').style.display = 'none';
        document.getElementById('protected-content').innerHTML = decoded;
    } else {
        alert('Invalid password');
    }
}