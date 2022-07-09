let store = eval(localStorage.hours) || [];

const renderStorage = () => {
    if(store.length) {
        store.forEach((ms,i) => {
            $('textarea').eq(i).text(ms)            
        });
    }
};

$('#currentDay').text(moment().format('LLLL'));

const hours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

hours.forEach((hour,i) => {
    let cH = moment().format('H');
    let rH = i+9;

    document.querySelector('.container').innerHTML += `
        <div class="row">
            <div class="hour"> ${hour}</div>
            <textarea class= ${rH>cH ? 'future' : rH<cH ? 'past' : 'present'}></textarea>
            <div class="saveBtn">
                <i class="fa-solid fa-floppy-disk">test</i>
            </div>
        </div>
    `

    renderStorage();
});
