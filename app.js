var pw = 'dynopass';

function showAlert(){
    alert('Create Your Password');
    pwBox.innerHTML = pw;
};

genBtn.addEventListener('click', showAlert);
//change to dynamic random password