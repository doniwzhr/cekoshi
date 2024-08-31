document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const oshi = checkOshi(name);
        result.innerHTML = `Oshi Anda adalah: <strong>${oshi}</strong>`;
        document.getElementById('checkButton').disabled = true;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukkan Nama Anda!</span>';
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('checkButton').disabled = false;
});

function checkOshi(name) {
    const oshi = ['Amanda Sukma', 'Angelina Christy', 'Aurellia', 'Callista Alifia', 'Cornelia Vanisa', 
    'Febriola Sinambela', 'Feni Fitriyanti', 'Fiony Alveria', 'Flora Shafiqa', 'Freya Jayawardana', 'Gabriela Abigail',
    'Gita Sekar Andarini', 'Grace Octaviani', 'Greesella Adhalia', 'Helisma Putri', 'Indah Cahya', 'Indira Seruni',
    'Jessica Chandra', 'Jesslyn Elly', 'Kathrina Irene', 'Lulu Salsabila', 'Marsha Lenathea', 'Mutiara Azzahra', 
    'Raisha Syifa', 'Reva Fidela', 'Shania Gracia', 'Abigail Rachel', 'Adeline Wijaya', 'Alya Amanda', 'Anindya Ramadhani',
    'Aurhel Alana', 'Catherina Vallencia', ' Cathleen Nixie', 'Celline Thefani', 'Chelsea Davina', 'Cynthia Yaputera',
    'Dena Natalia', 'Desy Natalia', 'Fritzy Rosmerian', 'Gendis Mayrannisa', 'Hillary Abigail', 'Jazzlyn Trisha',
    'Letycia Moreen', 'Michelle Alexandra', 'Michelle Levia', 'Nayla Suji', 'Nina Tutachia', 'Oline Manuel', 'Regina Willian',
    'Ribka Budiman', 'Shabilqis Naila', 'Victoria Kimberly'];
    const index = Math.floor(Math.random() * oshi.length);
    return oshi[index];
}
